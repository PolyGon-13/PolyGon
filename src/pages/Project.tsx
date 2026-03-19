import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project: React.FC = () => {
  return (
    <div className="project-container">
      <div className="projects-section card">
        <h3>Projects</h3>
        <div className="experience-item">
          <div className="project-title-row">
            <h4><Link to="/project/smart-rescue-mat" className="project-detail-link">디자인씽킹 기반 로봇 서비스·솔루션 기획</Link></h4>
            <a href="https://github.com/PolyGon-13/Smart_Rescue_Mat" target="_blank" rel="noreferrer" className="github-icon-link" title="GitHub Repository">
              <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
          </div>
          <p className="experience-subtitle">
            - 주관기관 : 고용노동부<br />
            - 참여기업 : 한국로봇산업협회
          </p>
          <p className="experience-date">2025.12 - 2026.01</p>
        </div>
        <hr className="divider" />
        <div className="experience-item">
          <div className="project-title-row">
            <h4><Link to="/project/agilex-piper" className="project-detail-link">Agilex PiPER VR Hand Tracking</Link></h4>
            <a href="https://github.com/PolyGon-13/PiPER_Unity_VR" target="_blank" rel="noreferrer" className="github-icon-link" title="GitHub Repository">
              <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
          </div>
          <p className="experience-subtitle">Korea Atomic Energy Research Institute | KAERI</p>
          <p className="experience-date">2025.09 - 2025.10</p>
        </div>
        <hr className="divider" />
        <div className=" अनुभव-item experience-item">
          <div className="project-title-row">
            <h4><Link to="/project/virtual-hot-cell" className="project-detail-link">Virtual Hot Cell Facility Implementation in Unity and PLC Integration</Link></h4>
            <a href="https://github.com/PolyGon-13/Digital_Twin-Pyro_Process_Mockup.git" target="_blank" rel="noreferrer" className="github-icon-link" title="GitHub Repository">
              <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
          </div>
          <p className="experience-subtitle">Korea Atomic Energy Research Institute | KAERI</p>
          <p className="experience-date">2025.08 - 2025.10</p>
        </div>
        <hr className="divider" />
        <div className="experience-item">
          <div className="project-title-row">
            <h4><Link to="/project/autonomous-driving" className="project-detail-link">Autonomous Driving Assistant Robot for Driver's License Test</Link></h4>
            <a href="https://github.com/PolyGon-13/Basic_Robotics_Experiment.git" target="_blank" rel="noreferrer" className="github-icon-link" title="GitHub Repository">
              <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
          </div>
          <p className="experience-subtitle">Hanyang ERICA University (Basic_Robotics_Experiment)</p>
          <p className="experience-date">2023.09 - 2023.12</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
