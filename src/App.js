import { useState } from 'react';

import './App.css';

const menuItems = [
  {
    "title": "Home",
    "url": "#",
    "cName": "nav-link"
  },
  {
    "title": "About",
    "url": "#",
    "cName": "nav-link"
  },
  {
    "title": "Services",
    "url": "#",
    "cName": "nav-link"
  },
  {
    "title": "Contact",
    "url": "#",
    "cName": "nav-link"
  },
  {
    "title": "Blog",
    "url": "#",
    "cName": "nav-link"
  },
]

function App(){
  return (
     <nav className='nav'>
     
        <h1 className='logo'>
           "Logo"
        </h1>
        
        <ul className='nav-menu' >
          {menuItems.map((item, index) => {
            return(
                  <li key={index}>
                      <a className={item.cName} href={item.url}>
                      {item.title}
                      </a>
                      
                  </li>
            )
          })}
          </ul>
        <div className='sign-in'>
            <a className='login' id='btn' href='#'>Login</a>
        </div>
     </nav>
  )
}

  
export default App;