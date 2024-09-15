import React from 'react'
import"./NavBar.css"

export default function NavBar() {
   const uncheck = ()=>{
       document.getElementById("checker").checked = false
     
   }
    return (
        <nav className='container'>
           <div className="logo">Moneer</div>
           <input type="checkbox" name="" id="checker" />
           <label htmlFor="checker">
           <i className="fas fa-bars"></i>
           </label>
           <ul>
               <li onClick={uncheck}>  <a href="#HOME"><i className="far fa-address-card"></i> Home </a></li>
               <li onClick={uncheck}> <a href="#ABOUT"> <i className="far fa-address-card"></i>  About </a></li>
               <li onClick={uncheck}> <a href="#SKILLS"><i className="fas fa-sitemap"></i>  Skills </a></li>
               <li onClick={uncheck}>  <a href="#recent-work"><i className="fas fa-laptop"></i> Projects </a></li>
               <li onClick={uncheck}> <a target="_blank" rel='noreferrer' href="https://drive.google.com/file/d/1PCcrnGgonMmAZSzq9f_Ltg57b03EpKtW/view?usp=sharing"><i className="far fa-file-alt"></i> Resume </a> </li>
           </ul>
        </nav>
    )
}
