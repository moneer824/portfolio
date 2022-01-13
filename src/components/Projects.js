import React from "react";
import "./Projects.css";
import Plural from "./Projects-pic/Plural.png";


export default function Projects(props) {
  return (
    <div className="projects">
      <div className="pro-img">
        <img src={Plural} alt="" />
      </div>
      <div className="pro-info">
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>Tech Stack</p>
        <div className="tech-used">
      
          {props.arr.map((img) => (
           <img src={img} alt="" />
          ))}
        </div>
        <div className="pro-btn">
          <button>Preview</button>
          <button>Code</button>
        </div>
      </div>
    </div>
  );
}
