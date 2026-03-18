import React, { useState } from 'react';
import './Settings.css';

interface SettingsProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

const Settings: React.FC<SettingsProps> = ({ isDark, setIsDark }) => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="container" style={{ padding: 0 }}>
      <div className="vscode-settings-container">
        <div className="vscode-settings-layout">
          
          {/* Left Sidebar Tabs */}
          <aside className="vscode-sidebar">
            <ul className="vscode-tabs">
              <li className={activeTab === 'general' ? 'active' : ''} onClick={() => setActiveTab('general')}>
                General
              </li>
            </ul>
          </aside>
          
          {/* Main Content Area */}
          <main className="vscode-main">
            {activeTab === 'general' && (
              <div className="vscode-settings-group">
                <h2 className="vscode-group-title">General</h2>
                
                <div className="vscode-setting-item">
                  <div className="vscode-setting-info" style={{ marginBottom: '12px' }}>
                    <div className="vscode-setting-name">Theme: <span>Dark Mode</span></div>
                  </div>
                  <div className="vscode-setting-control">
                    <div className={`mini-theme-toggle ${isDark ? 'dark' : 'light'}`} onClick={() => setIsDark(!isDark)}>
                      <div className="mini-toggle-thumb">{isDark ? '🌙' : '☀️'}</div>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
};

export default Settings;
