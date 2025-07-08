import React from "react";
import "./Projects.css";

export default function Projects({ 
  title, 
  description, 
  technologies, 
  features, 
  impact, 
  github, 
  website, 
  type 
}) {
  return (
    <div className="project-card">
      <div className="project-header">
        <div className="project-type">
          <span className="type-badge">{type}</span>
        </div>
        <h4 className="project-title">{title}</h4>
      </div>
      
      <div className="project-content">
        <p className="project-description">{description}</p>
        
        <div className="project-features">
          <h5>Key Features:</h5>
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="project-impact">
          <div className="impact-metric">
            <span className="impact-icon">📈</span>
            <span className="impact-text">{impact}</span>
          </div>
        </div>
        
        <div className="project-tech">
          <h5>Technologies:</h5>
          <div className="tech-stack">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="project-actions">
        {github !== "#" && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-btn btn-secondary"
          >
            <span className="btn-icon">🔗</span>
            <span>Code</span>
          </a>
        )}
        {website !== "#" && (
          <a 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-btn btn-primary"
          >
            <span className="btn-icon">🚀</span>
            <span>Live Demo</span>
          </a>
        )}
        {github === "#" && website === "#" && (
          <div className="project-btn btn-disabled">
            <span className="btn-icon">🔒</span>
            <span>Confidential</span>
          </div>
        )}
      </div>
      
      <div className="project-overlay"></div>
    </div>
  );
}
