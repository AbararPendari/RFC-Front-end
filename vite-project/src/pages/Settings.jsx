import React from 'react';

const Settings = () => {
  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>System Settings</h2>
          <div className="header-actions">
            <button className="btn primary">Save Changes</button>
            <button className="btn">Reset to Default</button>
          </div>
        </div>
        
        <div className="grid main">
          <div className="info-card">
            <div className="info-icon" aria-hidden>⚙️</div>
            <div className="info-content">
              <div className="info-title">System Configuration</div>
              <div className="info-body">Manage your application settings, preferences, and system configurations.</div>
              <div className="info-footer subtle">Last updated: 2 hours ago</div>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon" aria-hidden>🔒</div>
            <div className="info-content">
              <div className="info-title">Security Settings</div>
              <div className="info-body">Configure authentication, permissions, and security policies.</div>
              <div className="info-footer subtle">Security level: High</div>
            </div>
          </div>
        </div>
        
        <div className="grid cards">
          <div className="info-card">
            <div className="info-icon" aria-hidden>🌐</div>
            <div className="info-content">
              <div className="info-title">API Configuration</div>
              <div className="info-body">Manage API endpoints, rate limits, and external integrations.</div>
              <div className="info-footer subtle">3 active integrations</div>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon" aria-hidden>📊</div>
            <div className="info-content">
              <div className="info-title">Analytics Settings</div>
              <div className="info-body">Configure data collection, reporting, and analytics preferences.</div>
              <div className="info-footer subtle">Reports generated daily</div>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon" aria-hidden>🔔</div>
            <div className="info-content">
              <div className="info-title">Notification Settings</div>
              <div className="info-body">Manage email alerts, push notifications, and system alerts.</div>
              <div className="info-footer subtle">5 notification types active</div>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon" aria-hidden>💾</div>
            <div className="info-content">
              <div className="info-title">Backup & Storage</div>
              <div className="info-body">Configure data backup schedules and storage preferences.</div>
              <div className="info-footer subtle">Last backup: 1 hour ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
