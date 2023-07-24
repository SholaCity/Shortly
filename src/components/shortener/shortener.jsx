import {useState, useEffect} from 'react'
import './shortener.css'
import '../navbar/navbar.css'

//  https://api.shrtco.de/v2/shorten?url=


const shortener = () => {


  
  const [text, setText]= useState("");
  const [link, setLinks]= useState([])
  const [copyText, setCopyText]= useState('copy');

  const [linTab, setLinkTab]= useState(false)
  const [copyBgColor, setCopyBgColor]= useState('#2acfcf')

  const [errorState, setErrorState] = useState(false)
 

  useEffect(() => {
      const  genLink = localStorage.getItem("generated_link")
      if(genLink) {
        const data = JSON.parse(genLink)
        if (data !== null) {
          setLinks(data)
          setLinkTab(true)
        }
        console.log(data);
        console.log(genLink);
      }
  }, [])
  


  function handleChange (e){
    const newValue = e.target.value
    setText(newValue);
  }
 
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(!text){
      setErrorState(true)
    } else {
      const apiLink = ('https://api.shrtco.de/v2/shorten?url=' + `${text}`)
      // check if its a valid link
      const shortenedLink = async ()=>{
        const res = await fetch(apiLink);
        const data = await res.json()
        console.log(data.result);
        setLinks(data.result)
        setLinkTab(true)
        setText("")
        setErrorState(false)

      }
      shortenedLink()
    }
  }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(link.full_short_link)
    setCopyText('copied!')
    setCopyBgColor('hsl(260, 8%, 14%)')
  }

  useEffect(() => {
    window.localStorage.setItem("generated_link", JSON.stringify(link))

  }, [link])
  


  const GenLinks = ()=>{
    return <div className='short__shortener-link section__margin'>
              <p className='short__shortener-link_old p__text'>{link.original_link}</p>
              <span className='line'></span>
              <div className='short__shortener-link_wrap'>
                <button className='short__shortener-link_new p__text'>{link.short_link}</button>
                <button onClick={handleCopy} style={{background: copyBgColor}} type='submit' className='cta__button' title='copy link'>{copyText}</button>
              </div>
           </div>
  }

  return (
    <div className='short__shortener section__margin'>
      <form className='short__shortener-form section__margin' onSubmit={handleSubmit}>
          <input 
          placeholder='shorten a link here...' 
          type='text'
          onChange={handleChange}
          value={text}
          style={ errorState ? {border: "4px solid hsl(0, 87%, 67%)"}  : {border: "4px solid transparent"}}
          />
          <p className='error' style={ errorState ? {display:'block'} : {display:'none'}}><i>please add a link</i></p>
          <button type='submit' className='cta__button' onClick={handleSubmit}>shorten it!</button>
      </form>
      {linTab ? <GenLinks/>: ""}
    </div>
  )
}

export default shortener