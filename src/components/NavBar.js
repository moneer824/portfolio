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
               <li> <i class="far fa-address-card"></i> About</li>
               <li> <i class="fas fa-sitemap"></i> Skills</li>
               <li> <i class="fas fa-laptop"></i> Projects</li>
               <li> <i class="far fa-file-alt"></i> Resume</li>
           </ul>
        </nav>
    )
}
