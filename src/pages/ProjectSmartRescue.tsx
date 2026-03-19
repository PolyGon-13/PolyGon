import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSmartRescue: React.FC = () => {
  return (
    <div className="container project-container">
      <div className="card">
        <Link to="/project" className="back-link">&larr; Back to Projects</Link>
        <h1 style={{ marginTop: '20px', fontSize: '1.8rem', color: 'var(--text-primary)' }}>디자인씽킹 기반 로봇 서비스·솔루션 기획</h1>
      </div>
    </div>
  );
};

export default ProjectSmartRescue;
