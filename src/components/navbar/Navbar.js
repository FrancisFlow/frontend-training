"use client"
import { useState, useEffect } from "react";
const Navbar = () => {
  

  const [scrolling, setScrolling]= useState(false);
  
  useEffect(()=>{
    const handleScroll= event =>{
      if(window.scrollY > 0){
        setScrolling(true);
      }
      else{
        setScrolling(false);
      }
    }
    window.addEventListener('scroll', handleScroll)
    
  },[])
  
    return (  
        <>
      <header className={`header js-header ${scrolling ? "bg-reveal" : "" }`}>
        <div className="container">
          <div className='logo'>
            <a href="/">tolmol <span>cleaning services</span></a>
          </div>
          <button type="button" className="nav-toggler js-nav-toggler">
            <span></span>
          </button>
          <nav className="nav js-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>

      </header>
      
     
        </>
    );
}
 
export default Navbar;