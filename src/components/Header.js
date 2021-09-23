import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import '../css/header.css'
const Header = () => {
    const [open, setopen] = useState()
    

    function openit(){
      setopen('nav-opened');
  
    }
  
    function closeit(){
      setopen('');
  
    }
    return (
        <>
            <div className="header">
               <div className="child-header">
               <div className="logo"><Link to="/"><img src="/images/logo.png" alt="Logo" /></Link></div>
               <nav className={open}>
                    <div className="top"><img src="/images/callIcon.png" alt="" /> <span>Call: +1-866-577-6310</span></div>
                <div className="navLinks">
                    <Link to="/">HOME</Link>
                    <Link to="/blog">BLOG</Link>
                    <Link to="/services">SERVICES</Link>
                    <Link to="/case-study">CASE STUDY</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
                <div className="close" onClick={closeit}>
                <i class="far fa-times"></i>
                </div>
                </nav>
                <div className="burger" onClick={openit}>
                <i class="far fa-bars"></i>
                </div>

               </div>
              
            </div>
        </>
    )
}

export default Header
