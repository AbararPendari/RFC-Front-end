import React from 'react';

const SalesAnalytics = () => {
  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Sales Analytics</h2>
          <div className="header-actions">
            <button className="btn primary">Generate Report</button>
            <button className="btn">Export Data</button>
          </div>
        </div>
        
        <div className="grid main">
          <div className="info-card">
            <div className="info-icon" aria-hidden>📉</div>
            <div className="info-content">
              <div className="info-title">Sales Performance</div>
              <div className="info-body">Revenue up 15.3% this month compared to last month.</div>
              <div className="info-footer subtle">Best performing quarter</div>
            </div>
          </div>
          
          <div className="trend-card">
            <div className="card-header">
              <h3>Revenue Trend</h3>
              <span className="subtle">Last 30 days</span>
            </div>
            <svg
              className="trend-svg"
              viewBox="0 0 300 100"
              preserveAspectRatio="none"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                points="0,80 40,70 80,75 120,60 160,45 200,50 240,35 280,40 300,30"
              />
              <line x1="0" y1="80" x2="300" y2="80" className="axis" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;
