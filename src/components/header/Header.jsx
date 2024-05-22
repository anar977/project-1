import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import {Link as ScrollLink} from "react-scroll"
const Header = () => {

  return (
    <div className='Header'>
       
       <div className="container-1">
        <div className="row">
          <div className="left">
         <Link to="/">
         <h1>ALLAN JOHNSON <br /><span>Personal Life Coach</span></h1>
         </Link>
          </div>
          <div className="right">
            <ul>
          <ScrollLink
          to='aboutus'
          spy={true}
          smooth={true}
          duration={500}
          >
          <li style={{cursor:"pointer"}}>About</li>
          </ScrollLink>
          <Link to="./services">
          <li>Services</li>
          </Link>
          <Link to="./plans">
           <li>Plans</li>
           </Link>
           <Link to="./blog">
           <li>Blog</li>
           </Link>
           <li>Guides</li>
           <ScrollLink
           to='footer'
           spy={true}
           smooth={true}
           duration={500}
           >
           <li style={{cursor:"pointer"}}>Contact</li>
           </ScrollLink>
           <img className='prof' width="25" height="25" src="https://img.icons8.com/material-rounded/40/317f81/user-male-circle.png" alt="user-male-circle"/>
           <span>Log In</span>
            </ul>
          </div>
        </div>
       </div>
    </div>

  )
}

export default Header
