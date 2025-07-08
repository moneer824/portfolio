import React from "react";
import "./AboutMe.css";
import img from "./Myself.jpg";

export default function AboutMe() {
  return (
    <div className="about">
      <div className="hero-content">
        <div className="text-content">
          <div className="hero-badge">
            <span className="badge-text">Frontend Engineer</span>
          </div>
          <h1 className="hero-title">
            Building <span className="gradient-text">exceptional</span> digital experiences
          </h1>
          <p className="hero-description">
            Senior Frontend Engineer with 3 years of experience at Freshworks, 
            specializing in React, modern JavaScript, and scalable web applications. 
            Passionate about creating user-centric solutions that drive business growth.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat">
              <span className="stat-number">100K+</span>
              <span className="stat-label">Users Impacted</span>
            </div>
          </div>
          <div className="hero-actions">
            <a href="#recent-work" className="btn btn-primary">
              View My Work
            </a>
            <a href="#connect" className="btn btn-secondary">
              Let's Connect
            </a>
          </div>
        </div>
        
        <div className="image-container">
          <div className="profile-image">
            <img src={img} alt="Frontend Engineer" />
            <div className="image-overlay"></div>
          </div>
          <div className="floating-card">
            <div className="card-content">
              <span className="availability-dot"></span>
              <span>Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </div>
  );
}
