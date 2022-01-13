import React from "react";
import Projects from "./Projects.js";
import "./ProjectComponents.css";
import Plural from "./Projects-pic/Plural.png";
import Sasta from "./Projects-pic/Sasta.png";


import logo1 from "./skill-logo/html.png";
import logo2 from "./skill-logo/css.png";
import logo3 from "./skill-logo/js.png";

export default function ProjectComponents() {
  const project1 = [logo1, logo2, logo3];

  return (
    <div className="all-projects" id="recent-work">
      <p>Recent Work</p>
      <Projects
      preview={Plural}
        title="Pluralsight clone"
        description="Pluralsight is an online learning and workforce development platform that helps businesses and individuals adjust to changing technology. Pluralsight provide products to build tech skills and Get insights into your workflow."
        arr={project1}
      />
      <Projects
      preview={Sasta}
        title="Sastasundar clone"
        description="Sastasundhar is a Indian website where we can order medicine and Healthcare products. SastaSundar.com is an Innovative Information and Knowledge based web portal that helps people on their path to wellness."
        arr={project1}
      />
    </div>
  );
}
