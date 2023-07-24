import React from 'react'
import './statistic.css'
import content from './statscontent'


const statistic = () => {
    const Items = (props)=> {
      return <div className='short__statistic-container_item'>
              <div className='image-wrap'>
              <img src={props.img} alt='brand recognition image'/>
              </div>
              <h3>{props.title}</h3>
              <p className='p__text'>{props.description}</p>
            </div>
    }


    const createItems = (content)=>{
      return <Items
        key={content.id}
        img={content.img}
        title={content.title}
        description={content.description}
      />
    }


  return (
    <div className='short__statistic section__padding'>
      <div className='short__statistic-header'>
        <h2>Advanced Statistics</h2>
        <p className='p__text'>  Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>
      </div>
      <div className='short__statistic-container'>
      <div className='short__statistic-container-bgline'></div>
      <div className='short__statistic-container-bgline mb'></div>
      <div className='short__statistic-container-bgline mb2'></div>
        {content.map(createItems)}
      </div>
    </div>
  )
}

export default statistic