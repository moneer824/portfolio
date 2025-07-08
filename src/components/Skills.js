import React from 'react'
import "./Skills.css"
import SkillComponents from './SkillComponents'

export default function Skills() {
    return (
        <div className='skills' id='SKILLS'>
            <div className="skills-container">
                <div className="skills-header">
                    <h2>Technical Expertise</h2>
                    <p>Technologies and tools I've mastered during my 3 years at Freshworks</p>
                </div>
                
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>Frontend Development</h3>
                        <div className="skills-row">
                            <SkillComponents name="React" icon="fab fa-react" level="Expert" />
                            <SkillComponents name="TypeScript" icon="fas fa-code" level="Advanced" />
                            <SkillComponents name="Next.js" icon="fas fa-forward" level="Advanced" />
                            <SkillComponents name="JavaScript" icon="fab fa-js" level="Expert" />
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>UI/UX & Styling</h3>
                        <div className="skills-row">
                            <SkillComponents name="Tailwind CSS" icon="fas fa-palette" level="Advanced" />
                            <SkillComponents name="Styled Components" icon="fas fa-paint-brush" level="Advanced" />
                            <SkillComponents name="SCSS/Sass" icon="fab fa-sass" level="Expert" />
                            <SkillComponents name="Figma" icon="fab fa-figma" level="Intermediate" />
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>State Management & APIs</h3>
                        <div className="skills-row">
                            <SkillComponents name="Redux Toolkit" icon="fas fa-layer-group" level="Advanced" />
                            <SkillComponents name="React Query" icon="fas fa-search" level="Advanced" />
                            <SkillComponents name="REST APIs" icon="fas fa-server" level="Expert" />
                            <SkillComponents name="GraphQL" icon="fas fa-project-diagram" level="Intermediate" />
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Testing & Quality</h3>
                        <div className="skills-row">
                            <SkillComponents name="Jest" icon="fas fa-check-circle" level="Advanced" />
                            <SkillComponents name="React Testing Library" icon="fas fa-vial" level="Advanced" />
                            <SkillComponents name="Cypress" icon="fas fa-bug" level="Intermediate" />
                            <SkillComponents name="ESLint" icon="fas fa-shield-alt" level="Expert" />
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Build Tools & DevOps</h3>
                        <div className="skills-row">
                            <SkillComponents name="Webpack" icon="fas fa-cube" level="Advanced" />
                            <SkillComponents name="Vite" icon="fas fa-bolt" level="Advanced" />
                            <SkillComponents name="Docker" icon="fab fa-docker" level="Intermediate" />
                            <SkillComponents name="AWS" icon="fab fa-aws" level="Intermediate" />
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Backend & Database</h3>
                        <div className="skills-row">
                            <SkillComponents name="Node.js" icon="fab fa-node-js" level="Advanced" />
                            <SkillComponents name="Express.js" icon="fas fa-server" level="Advanced" />
                            <SkillComponents name="MongoDB" icon="fas fa-database" level="Intermediate" />
                            <SkillComponents name="PostgreSQL" icon="fas fa-database" level="Intermediate" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
