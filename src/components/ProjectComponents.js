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
        description="Pluralsight is an online learning and workforce development platform that helps businesses and individuals adjust to changing technology. Pluralsight provide products to build tech skills and Get insights into your workflow."
        arr={project1}
        github="https://github.com/aadityaneve/Clone-Pluralsight"
        website="https://aadityaneve.github.io/Clone-Pluralsight"
      />
      <Projects
      preview={Sasta}
        title="Sastasundar clone"
        description="Sastasundhar is a Indian website where we can order medicine and Healthcare products. SastaSundar.com is an Innovative Information and Knowledge based web portal that helps people on their path to wellness."
        arr={project2}
        github="https://github.com/harshpagar/sastabazr"
        website="https://sastasundhar-clone.netlify.app/"
      />
    </div>
  );
}
