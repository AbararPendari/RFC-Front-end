import React from 'react';

const GPSTracker = () => {
  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>GPS Tracker</h2>
          <div className="header-actions">
            <button className="btn primary">Refresh Locations</button>
            <button className="btn">Export Data</button>
          </div>
        </div>
        
        <div className="grid main">
          <div className="info-card">
            <div className="info-icon" aria-hidden>🧭</div>
            <div className="info-content">
              <div className="info-title">Live GPS</div>
              <div className="info-body">24 vehicles reporting in real time across 12 routes.</div>
              <div className="info-footer subtle">5 vehicles near destination</div>
            </div>
          </div>
          
          <div className="table-card">
            <div className="card-header">
              <h3>Vehicle Locations</h3>
              <span className="subtle">Real-time tracking</span>
            </div>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Vehicle ID</th>
                    <th>Route</th>
                    <th>Status</th>
                    <th>Last Update</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>VH-001</td>
                    <td>LA → SF</td>
                    <td><span className="badge in-transit">In Transit</span></td>
                    <td>2 min ago</td>
                  </tr>
                  <tr>
                    <td>VH-002</td>
                    <td>NYC → BOS</td>
                    <td><span className="badge delivered">Delivered</span></td>
                    <td>15 min ago</td>
                  </tr>
                  <tr>
                    <td>VH-003</td>
                    <td>SEA → PDX</td>
                    <td><span className="badge delayed">Delayed</span></td>
                    <td>5 min ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPSTracker;
