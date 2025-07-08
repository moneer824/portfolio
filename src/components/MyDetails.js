import React from 'react'
import img1 from './Coding.gif'
import "./MyDetails.css"

export default function MyDetails() {
    return (
        <div className='details' id="ABOUT">
            <div className="details-container">
                <div className="details-content">
                    <div className="section-header">
                        <h2>About Me</h2>
                        <div className="header-line"></div>
                    </div>
                    
                    <div className="about-grid">
                        <div className="about-text">
                            <div className="intro-text">
                                <p className="lead">
                                    I'm a passionate <strong>Senior Frontend Engineer</strong> with over 3 years of experience 
                                    building scalable, user-centric web applications at Freshworks.
                                </p>
                                
                                <p>
                                    During my tenure at Freshworks, I've had the privilege of working on mission-critical 
                                    products that serve millions of users globally. My journey has been focused on creating 
                                    intuitive user experiences while maintaining high performance and accessibility standards.
                                </p>
                                
                                <p>
                                    I specialize in modern JavaScript frameworks, particularly React and TypeScript, 
                                    and have a deep understanding of frontend architecture patterns, state management, 
                                    and performance optimization techniques.
                                </p>
                            </div>
                            
                            <div className="experience-highlights">
                                <h3>Key Achievements</h3>
                                <ul className="achievements-list">
                                    <li>
                                        <span className="achievement-icon">🚀</span>
                                        Led frontend development for multiple product features serving 100K+ users
                                    </li>
                                    <li>
                                        <span className="achievement-icon">⚡</span>
                                        Improved application performance by 40% through code optimization and lazy loading
                                    </li>
                                    <li>
                                        <span className="achievement-icon">👥</span>
                                        Mentored junior developers and contributed to team best practices
                                    </li>
                                    <li>
                                        <span className="achievement-icon">🔧</span>
                                        Implemented comprehensive testing strategies reducing bugs by 60%
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="tech-focus">
                                <h3>What I Love Building</h3>
                                <div className="focus-areas">
                                    <span className="focus-tag">Responsive Web Apps</span>
                                    <span className="focus-tag">Component Libraries</span>
                                    <span className="focus-tag">Real-time Dashboards</span>
                                    <span className="focus-tag">Performance Optimization</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="about-visual">
                            <div className="coding-animation">
                                <img src={img1} alt="Coding Animation" />
                                <div className="animation-overlay">
                                    <div className="code-stats">
                                        <div className="stat-item">
                                            <span className="stat-number">3+</span>
                                            <span className="stat-label">Years at Freshworks</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-number">50+</span>
                                            <span className="stat-label">Features Shipped</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-number">100K+</span>
                                            <span className="stat-label">Users Impacted</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
