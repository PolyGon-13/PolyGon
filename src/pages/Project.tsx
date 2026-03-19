import React from 'react';
import './Project.css';

const Project: React.FC = () => {
  return (
    <div className="project-container">
      <div className="projects-section card">
        <h3>Projects</h3>
        <div className="experience-item">
          <h4>
            <a href="https://github.com/PolyGon-13/Smart_Rescue_Mat" target="_blank" rel="noreferrer" className="project-link">
              Smart Rescue Mat
            </a>
          </h4>
          <p className="experience-subtitle">Design Thinking-based Robot Service & Solution Planning</p>
          <p className="experience-date">2025.12 - 2026.01</p>
          <p className="experience-desc">Hosted by the Ministry of Employment and Labor, and the Korea Association of Robot Industry.</p>
        </div>
        <hr className="divider" />
        <div className="experience-item">
          <h4>
            <a href="https://github.com/PolyGon-13/PiPER_Unity_VR" target="_blank" rel="noreferrer" className="project-link">
              Agilex PiPER VR Hand Tracking
            </a>
          </h4>
          <p className="experience-date">2025.09 - 2025.10</p>
        </div>
        <hr className="divider" />
        <div className="experience-item">
          <h4>
            <a href="https://github.com/PolyGon-13/Digital_Twin-Pyro_Process_Mockup.git" target="_blank" rel="noreferrer" className="project-link">
              Virtual Hot Cell Facility Implementation
            </a>
          </h4>
          <p className="experience-subtitle">Unity VR and PLC Integration (KAERI)</p>
          <p className="experience-date">2025.08 - 2025.10</p>
        </div>
        <hr className="divider" />
        <div className="experience-item">
          <h4>
            <a href="https://github.com/PolyGon-13/Basic_Robotics_Experiment.git" target="_blank" rel="noreferrer" className="project-link">
              Autonomous Driving Assistant Robot
            </a>
          </h4>
          <p className="experience-subtitle">Assistant Robot for Driver's License Test</p>
          <p className="experience-date">2023.09 - 2023.12</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
