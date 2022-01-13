import React from 'react'
import logo1 from './skill-logo/html.png'
import logo2 from './skill-logo/css.png'
import logo3 from './skill-logo/js.png'
import logo4 from './skill-logo/bootstrap.png'
import logo5 from './skill-logo/mongodb.png'
import logo6 from './skill-logo/react.png'
import logo7 from './skill-logo/react-js.png'
import logo8 from './skill-logo/vs.png'
import"./Skills.css"
import SkillComponents from './SkillComponents'

export default function Skills() {
    return (
        <div className='skills' id='SKILLS'>
            <p>Skills and Tools</p>
            <div className="tools">

           <SkillComponents img={logo1}/>
           <SkillComponents img={logo2}/>
           <SkillComponents img={logo3}/>
           <SkillComponents img={logo4}/>
           <SkillComponents img={logo5}/>
           <SkillComponents img={logo6}/>
           <SkillComponents img={logo7}/>
           <SkillComponents img={logo8}/>
            </div>
        </div>
    )
}
