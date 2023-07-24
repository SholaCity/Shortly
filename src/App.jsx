import React from 'react';
import ReactDOM  from 'react-dom/client';
import './App.css'
import './index.css'

import {Header, Shortener,Cta, Navbar,Footer, Statistic} from './components';





 const App = ()=> {
    return <div className='App'>
        <div className='app__banner'>
            <Navbar/>
            <Header/>
        </div>
        <Shortener/>
        <Statistic/>
        <Cta/>
        <Footer/>
     </div>
 }


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)