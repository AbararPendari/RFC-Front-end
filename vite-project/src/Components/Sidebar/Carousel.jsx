import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Carousel.css";

const Carousel = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();
  
  const handleMouseEnter = () => {
    setIsSidebarVisible(true);
  };
  const handleMouseLeave = () => {
    setIsSidebarVisible(false);
  };
  return (
    <div
      className="sidebar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className={`logo ${isSidebarVisible ? "visible" : "hidden"}`}>
        {" "}
        🚚FruitTrack
      </h2>
      <ul className="menu">
        <li className={location.pathname === '/' || location.pathname === '/dashboard' ? 'active' : ''}>
          <Link to="/dashboard">🏠 Dashboard</Link>
        </li>
        <li className={location.pathname === '/gps-tracker' ? 'active' : ''}>
          <Link to="/gps-tracker">🗺 GPS Tracker</Link>
        </li>
        <li className={location.pathname === '/sales-analytics' ? 'active' : ''}>
          <Link to="/sales-analytics">📉 Sales Analytics</Link>
        </li>
        <li className={location.pathname === '/orders' ? 'active' : ''}>
          <Link to="/orders">🎁 Orders</Link>
        </li>
        <li className={location.pathname === '/payment' ? 'active' : ''}>
          <Link to="/payment">🏧 Payment</Link>
        </li>
        <li className={location.pathname === '/users' ? 'active' : ''}>
          <Link to="/users">👥 Users</Link>
        </li>
        <li className={location.pathname === '/settings' ? 'active' : ''}>
          <Link to="/settings">⚙️ Settings</Link>
        </li>
      </ul>
    </div>
  );
};
export default Carousel;
