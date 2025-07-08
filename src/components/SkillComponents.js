import React from 'react'
import "./SkillComponents.css"

export default function SkillComponents({ name, icon, level = "Intermediate" }) {
    const getLevelColor = (level) => {
        switch(level) {
            case "Expert": return "#10b981";
            case "Advanced": return "#3b82f6";
            case "Intermediate": return "#f59e0b";
            default: return "#6b7280";
        }
    };

    return (
        <div className="skill-item">
            <div className="skill-icon">
                <i className={icon}></i>
            </div>
            <div className="skill-content">
                <h4 className="skill-name">{name}</h4>
                <div className="skill-level">
                    <span 
                        className="level-badge" 
                        style={{ backgroundColor: getLevelColor(level) }}
                    >
                        {level}
                    </span>
                </div>
            </div>
            <div className="skill-hover-effect"></div>
        </div>
    )
}
