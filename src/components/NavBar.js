import React, { useState, useEffect } from 'react'
import "./NavBar.css"

export default function NavBar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
       const handleScroll = () => {
           setScrolled(window.scrollY > 50);
       };

       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const toggleMenu = () => {
       setIsMenuOpen(!isMenuOpen);
   };

   const closeMenu = () => {
       setIsMenuOpen(false);
   };

   return (
       <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
           <div className="nav-container">
               <div className="nav-logo">
                   <span className="logo-text">Portfolio</span>
                   <span className="logo-accent">.</span>
               </div>
               
               <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                   <div className="nav-links">
                       <a href="#HOME" className="nav-link" onClick={closeMenu}>
                           <span className="nav-icon">🏠</span>
                           <span>Home</span>
                       </a>
                       <a href="#ABOUT" className="nav-link" onClick={closeMenu}>
                           <span className="nav-icon">👨‍💻</span>
                           <span>About</span>
                       </a>
                       <a href="#SKILLS" className="nav-link" onClick={closeMenu}>
                           <span className="nav-icon">⚡</span>
                           <span>Skills</span>
                       </a>
                       <a href="#recent-work" className="nav-link" onClick={closeMenu}>
                           <span className="nav-icon">💼</span>
                           <span>Projects</span>
                       </a>
                       <a href="#connect" className="nav-link" onClick={closeMenu}>
                           <span className="nav-icon">📧</span>
                           <span>Contact</span>
                       </a>
                   </div>
                   
                   <div className="nav-actions">
                       <a 
                           href="https://drive.google.com/file/d/1PCcrnGgonMmAZSzq9f_Ltg57b03EpKtW/view?usp=sharing" 
                           target="_blank" 
                           rel="noreferrer"
                           className="resume-btn"
                           onClick={closeMenu}
                       >
                           <span className="btn-icon">📄</span>
                           <span>Resume</span>
                       </a>
                   </div>
               </div>
               
               <div className="nav-toggle" onClick={toggleMenu}>
                   <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                       <span></span>
                       <span></span>
                       <span></span>
                   </span>
               </div>
           </div>
       </nav>
   )
}
