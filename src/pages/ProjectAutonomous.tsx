import React from 'react';
import { Link } from 'react-router-dom';

const ProjectAutonomous: React.FC = () => {
  return (
    <div className="container project-container">
      <div className="card">
        <Link to="/project" className="back-link">&larr; Back to Projects</Link>
        <h1 style={{ marginTop: '20px', fontSize: '1.8rem', color: 'var(--text-primary)' }}>Autonomous Driving Assistant Robot for Driver's License Test</h1>
      </div>
    </div>
  );
};

export default ProjectAutonomous;
