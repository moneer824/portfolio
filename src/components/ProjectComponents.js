import React from "react";
import Projects from "./Projects.js";
import "./ProjectComponents.css";

export default function ProjectComponents() {
  const freshworksProjects = [
    {
      title: "Freshworks CRM Dashboard",
      description: "Led the development of a real-time analytics dashboard for Freshworks CRM, serving 50K+ users globally. Implemented advanced data visualization, real-time updates, and responsive design. Improved user engagement by 35% and reduced load times by 40%.",
      technologies: ["React", "TypeScript", "Redux Toolkit", "D3.js", "WebSocket", "Material-UI"],
      features: ["Real-time Data Updates", "Interactive Charts", "Advanced Filtering", "Export Functionality"],
      impact: "50K+ Active Users",
      github: "#",
      website: "#",
      type: "Enterprise Product"
    },
    {
      title: "Freshworks Chat Widget",
      description: "Architected and built a highly performant, embeddable chat widget used by 100K+ websites. Focused on minimal bundle size, cross-browser compatibility, and seamless integration. Reduced customer response time by 60%.",
      technologies: ["React", "TypeScript", "Webpack", "PostCSS", "WebRTC", "Socket.io"],
      features: ["Embeddable Widget", "Cross-browser Support", "Real-time Messaging", "File Sharing"],
      impact: "100K+ Websites",
      github: "#",
      website: "#",
      type: "Core Product Feature"
    },
    {
      title: "Freshworks Mobile App",
      description: "Contributed to the React Native mobile application, implementing key features for customer support agents. Built offline-first architecture and optimized performance for low-end devices. Increased mobile usage by 45%.",
      technologies: ["React Native", "TypeScript", "Redux Persist", "AsyncStorage", "Push Notifications"],
      features: ["Offline Support", "Push Notifications", "Optimized Performance", "Cross-platform"],
      impact: "45% Mobile Usage Increase",
      github: "#",
      website: "#",
      type: "Mobile Application"
    }
  ];

  const sideProjects = [
    {
      title: "Developer Portfolio Template",
      description: "Created a modern, responsive portfolio template for developers with dark/light theme, smooth animations, and SEO optimization. Open-sourced and used by 500+ developers worldwide.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
      features: ["Dark/Light Theme", "SEO Optimized", "Responsive Design", "Blog Support"],
      impact: "500+ Downloads",
      github: "https://github.com/",
      website: "https://portfolio-template.dev",
      type: "Open Source"
    }
  ];

  return (
    <div className="projects-section" id="recent-work">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>A showcase of my work at Freshworks and personal projects</p>
        </div>
        
        <div className="projects-category">
          <h3>🚀 Freshworks Projects</h3>
          <p className="category-description">
            Enterprise-level projects I've worked on during my 3 years at Freshworks, 
            impacting millions of users globally.
          </p>
          <div className="projects-grid">
            {freshworksProjects.map((project, index) => (
              <Projects
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                features={project.features}
                impact={project.impact}
                github={project.github}
                website={project.website}
                type={project.type}
              />
            ))}
          </div>
        </div>
        
        <div className="projects-category">
          <h3>💡 Side Projects</h3>
          <p className="category-description">
            Personal projects I've built to explore new technologies and contribute to the developer community.
          </p>
          <div className="projects-grid">
            {sideProjects.map((project, index) => (
              <Projects
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                features={project.features}
                impact={project.impact}
                github={project.github}
                website={project.website}
                type={project.type}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
