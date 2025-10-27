import React from "react";
import "../four/b.css";

const StatCard = ({ title, value, delta, positive }) => {
  return (
    <div className="stat-card">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      {delta != null && (
        <div className={`stat-delta ${positive ? "up" : "down"}`}>
          {positive ? "▲" : "▼"} {delta}
        </div>
      )}
    </div>
  );
};

const TrendChart = () => {
  return (
    <div className="trend-card">
      <div className="card-header">
        <h3>Weekly Shipments</h3>
        <span className="subtle">Last 7 days</span>
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
  );
};

const RecentTable = () => {
  const rows = [
    { id: "ORD-1023", route: "LA → SF", status: "In Transit", eta: "2h" },
    { id: "ORD-1022", route: "NYC → BOS", status: "Delivered", eta: "—" },
    { id: "ORD-1021", route: "SEA → PDX", status: "Delayed", eta: "+1h" },
    { id: "ORD-1020", route: "DAL → AUS", status: "In Transit", eta: "4h" },
  ];

  return (
    <div className="table-card">
      <div className="card-header">
        <h3>Recent Orders</h3>
        <span className="subtle">Latest updates</span>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Route</th>
              <th>Status</th>
              <th>ETA</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.route}</td>
                <td>
                  <span
                    className={`badge ${r.status
                      .replace(/\s/g, "-")
                      .toLowerCase()}`}
                  >
                    {r.status}
                  </span>
                </td>
                <td>{r.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, title, body, footer }) => {
  return (
    <div className="info-card">
      <div className="info-icon" aria-hidden>
        {icon}
      </div>
      <div className="info-content">
        <div className="info-title">{title}</div>
        <div className="info-body">{body}</div>
        {footer && <div className="info-footer subtle">{footer}</div>}
      </div>
    </div>
  );
};

const b = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <div className="header-actions">
          <button className="btn primary">New Order</button>
          <button className="btn">Export</button>
        </div>
      </div>

      <div id="section-stats" className="grid stats">
        <StatCard
          title="Total Orders"
          value="1,284"
          delta="+8.4%"
          positive={true}
        />
        <StatCard
          title="In Transit"
          value="312"
          delta="+2.1%"
          positive={true}
        />
        <StatCard title="Delayed" value="18" delta="-0.9%" positive={false} />
        <StatCard
          title="Revenue"
          value="$84.2k"
          delta="+5.3%"
          positive={true}
        />
      </div>

      <div className="grid main">
        <div id="section-trend">
          <TrendChart />
        </div>
        <div id="section-recent">
          <RecentTable />
        </div>
      </div>

      <div id="section-cards" className="grid cards">
        <InfoCard
          icon="🧭"
          title="Live GPS"
          body="24 vehicles reporting in real time across 12 routes."
          footer="5 vehicles near destination"
        />
        <InfoCard
          icon="🥝"
          title="Freshness Score"
          body="Average cargo temp 4.2°C; humidity 55% across all shipments."
          footer="2 alerts require attention"
        />
        <InfoCard
          icon="⏱️"
          title="On-time Rate"
          body="94.3% on-time deliveries this week."
          footer="Up 1.1% vs last week"
        />
        <InfoCard
          icon="🧾"
          title="Open Invoices"
          body="$12.7k pending across 7 invoices."
          footer="3 due this week"
        />
      </div>
    </div>
  );
};

export default b;
