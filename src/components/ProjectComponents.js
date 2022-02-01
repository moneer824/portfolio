import React from "react";
import Projects from "./Projects.js";
import "./ProjectComponents.css";
import Plural from "./Projects-pic/Plural.png";
import Sasta from "./Projects-pic/Sasta.png";




export default function ProjectComponents() {
const project1 = ["fab fa-html5","fab fa-css3-alt","fab fa-js"]
const project2 = ["fab fa-html5","fab fa-css3-alt","fab fa-js"]

  return (
    <div className="all-projects" id="recent-work">
      <p>Recent Work</p>
      <Projects
      preview={Plural}
        title="Pluralsight clone"
        description="In this project we have tried to manipulate dom elements, styling using css and tried to make website more dynamic and responsive.some of the functionality we have added are sign-in/sign-up, home page, user authentication, payment page,  developed data using local storage."
        arr={project1}
        github="https://github.com/aadityaneve/Clone-Pluralsight"
        website="https://aadityaneve.github.io/Clone-Pluralsight"
      />
      <Projects
      preview={Sasta}
        title="Sastasundar clone"
        description="In this project we have tried to make a look alike clone of sastasundhar.com. some of the functionality we have added are home page, payment page, slider, navbar, pop up, drop down"
        arr={project2}
        github="https://github.com/harshpagar/sastabazr"
        website="https://sastasundhar-clone.netlify.app/"
      />
    </div>
  );
}
