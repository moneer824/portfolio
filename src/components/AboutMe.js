import React, { useEffect, useState } from "react";
import "./AboutMe.css";
import img from "./Myself.jpg";

const words = [
  "Frontend Engineer",
  "React Developer", 
  "UI/UX Enthusiast",
  "Problem Solver",
  "Tech Innovator"
];

export default function AboutMe() {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 100 : 150;
    const delay = isDeleting ? 1000 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentWord.length) {
          setTypedText(currentWord.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentWord.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, currentWordIndex, isDeleting]);

  return (
    <div className="about">
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      <div className="floating-icons">
        <div className="tech-icon icon-react">⚛️</div>
        <div className="tech-icon icon-js">🟨</div>
        <div className="tech-icon icon-ts">🔷</div>
        <div className="tech-icon icon-node">🟢</div>
        <div className="tech-icon icon-css">🎨</div>
        <div className="tech-icon icon-git">🔧</div>
      </div>

      <div className="hero-content">
        <div className="text-content">
          <div className="hero-badge">
            <span className="badge-icon">💼</span>
            <span className="badge-text">Senior Frontend Engineer</span>
          </div>
          
          <div className="hero-title-container">
            <h1 className="hero-title">
              Hi, I'm <span className="name-highlight">Moneer</span>
            </h1>
            <h2 className="hero-subtitle">
              A <span className="typing-text">{typedText}</span>
              <span className="cursor">|</span>
            </h2>
          </div>
          
          <p className="hero-description">
            <span className="highlight-text">3+ years</span> of building exceptional digital experiences at 
            <span className="company-highlight"> Freshworks</span>. 
            Specializing in React, TypeScript, and scalable frontend architectures that serve 
            <span className="highlight-text"> millions of users</span> worldwide.
          </p>
          
          <div className="hero-achievements">
            <div className="achievement-item">
              <div className="achievement-icon">🚀</div>
              <div className="achievement-content">
                <span className="achievement-number">50+</span>
                <span className="achievement-label">Projects Delivered</span>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">👥</div>
              <div className="achievement-content">
                <span className="achievement-number">100K+</span>
                <span className="achievement-label">Users Impacted</span>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">⚡</div>
              <div className="achievement-content">
                <span className="achievement-number">40%</span>
                <span className="achievement-label">Performance Boost</span>
              </div>
            </div>
          </div>
          
          <div className="hero-actions">
            <a href="#recent-work" className="btn btn-primary">
              <span className="btn-icon">👀</span>
              <span>View My Work</span>
              <div className="btn-shimmer"></div>
            </a>
            <a href="#connect" className="btn btn-secondary">
              <span className="btn-icon">💬</span>
              <span>Let's Connect</span>
            </a>
            <a 
              href="https://drive.google.com/file/d/1PCcrnGgonMmAZSzq9f_Ltg57b03EpKtW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <span className="btn-icon">📄</span>
              <span>Resume</span>
            </a>
          </div>
        </div>
        
        <div className="image-container">
          <div className="profile-wrapper">
            <div className="profile-ring">
              <div className="profile-image">
                <img src={img} alt="Moneer - Frontend Engineer" />
                <div className="image-overlay"></div>
              </div>
            </div>
            
            <div className="status-indicators">
              <div className="status-card available">
                <div className="status-dot"></div>
                <span>Available for opportunities</span>
              </div>
              <div className="status-card location">
                <div className="location-icon">📍</div>
                <span>Remote / Hybrid</span>
              </div>
            </div>
          </div>
          
          <div className="experience-badge">
            <div className="badge-content">
              <span className="experience-years">3+</span>
              <span className="experience-text">Years at Freshworks</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span className="scroll-text">Discover More</span>
        <div className="scroll-mouse">
          <div className="mouse-wheel"></div>
        </div>
      </div>
    </div>
  );
}
