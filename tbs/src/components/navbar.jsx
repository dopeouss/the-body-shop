import React from 'react'
import '../app.css'
import { Routes, Route, Link } from 'react-router-dom'
import Man from './man'
import Woman from './woman'
import Jewelry from './jewelry'
import Home from './home'



export default function navBar() {
  return (
    <div>
        <section className='navcountainer'>
      <nav className='navigation'>
        <img id='navlogo' src="/The-Body-Shop-Logo.png" alt="error" />
        <ul className='nav-items'>
          
         <li className='nav-item'><Link className='nav-link' to="/Home">HOME</Link></li>
          <li className='nav-item'><Link className='nav-link' to="/woman">WOMAN</Link></li>
          <li className='nav-item'><Link className='nav-link' to="/man">MAN</Link></li>
          <li className='nav-item'><Link className='nav-link' to="/jewelry">JEWELERY</Link></li>
        </ul>
      </nav>   </section>

      
      <Routes>
        
        <Route path='/home' element={<Home /> } />
        <Route path='/woman' element={<Woman />} />
        <Route path='/man' element={<Man />} />
        <Route path='/jewelry' element={<Jewelry />} />
        
      </Routes>

    </div>
  )
}
