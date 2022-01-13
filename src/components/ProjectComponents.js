import React from "react";
import Projects from "./Projects.js";
import "./ProjectComponents.css";

import logo1 from "./skill-logo/html.png";
import logo2 from "./skill-logo/css.png";
import logo3 from "./skill-logo/js.png";

export default function ProjectComponents() {
  const project1 = [logo1, logo2, logo3];

  return (
    <div className="all-projects">
      <p>Recent Work</p>
      <Projects
        title="Pulseplus clone"
        description="Pulse Pharmacy is a leading Online Pharmacy in India that offers prescription medicines and OTC products all over India. Pulse Pharmacy is to ensure health to all the individuals."
        arr={project1}
      />
      <Projects
        title="Pulseplus clone"
        description="Pulse Pharmacy is a leading Online Pharmacy in India that offers prescription medicines and OTC products all over India. Pulse Pharmacy is to ensure health to all the individuals."
        arr={project1}
      />
    </div>
  );
}
