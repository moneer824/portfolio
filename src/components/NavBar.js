import React from 'react'
import"./NavBar.css"

export default function NavBar() {
    return (
        <nav className='container'>
           <div className="logo">Portfolio</div>
           <input type="checkbox" name="" id="checker" />
           <label htmlFor="checker">
           <i className="fas fa-bars"></i>
           </label>
           <ul>
               <li> <i class="far fa-address-card"></i> <a href="#HOME"> Home </a></li>
               <li> <i class="far fa-address-card"></i> <a href="#ABOUT"> About </a></li>
               <li> <i class="fas fa-sitemap"></i> <a href="#SKILLS"> Skills </a></li>
               <li> <i class="fas fa-laptop"></i> <a href="#recent-work"> Projects </a></li>
               <li> <i class="far fa-file-alt"></i><a target="_blank" rel='noreferrer' href="https://drive.google.com/file/d/19rR82dAwqaX_mwkFEx6hBAAth_Fex1C8/view?usp=sharing"> Resume </a> </li>
           </ul>
        </nav>
    )
}
