import React from 'react'
import '../app.css'
import Card from './card'
import NavBar from './navbar'


export default function home() {
  return (
    
    <div className='hero-img'>
      
     
       
      <header className='hero-img'>
      <div className='hero-text'>
       <h2 className='hero-title'> Welcome To The Body Shop </h2> 
        <p className='hero-disc'>The Body Shop is not just like any other shop we are proud with our quality of our products and the varity and diversity of what we sell like our massive collection of jewelry that u cannot find in other places .  </p>
      </div> 
      </header>
      <body>
        <div className='prodbody'>
          <div className="header"><h1> PRODUCTS </h1></div>
          <Card />
          
        </div>

      </body>


    </div>
  )
}
