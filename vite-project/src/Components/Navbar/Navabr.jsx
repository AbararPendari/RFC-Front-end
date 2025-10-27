import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import reminder_icon from "../../assets/reminder.png";
// login_icon is not being used, we're using SVG instead
// import login_icon from "../../assets/login.png";

const Navbar = ({ theme, setTheme, onNotify, onLogin }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [notificationCount, setNotificationCount] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New message from John Doe", time: "2 hours ago", read: false },
    { id: 2, message: "Your order has been shipped", time: "Yesterday", read: false },
    { id: 3, message: "Payment received successfully", time: "3 days ago", read: false },
  ]);
  const searchRef = useRef(null);
  const notificationRef = useRef(null);

  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  const handleSearchIconClick = () => {
    setIsSearchExpanded(true);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      console.log("Searching for:", searchValue);
      // Handle search logic here
    }
    setIsSearchExpanded(false);
    setSearchValue("");
  };

  const handleSearchBlur = () => {
    // Delay to allow form submission
    setTimeout(() => {
      setIsSearchExpanded(false);
      setSearchValue("");
    }, 200);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsSearchExpanded(false);
      setSearchValue("");
    }
  };

  // Handle click outside to close search and notifications
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchExpanded(false);
        setSearchValue("");
      }
      
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Notification functionality is now handled with useState above
  
  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (onNotify) onNotify();
  };

  return (
    <div className="navbar">
      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>
      <div className="search-container" ref={searchRef}>
        {!isSearchExpanded ? (
          <div className="search-icon-only" onClick={handleSearchIconClick}>
            <img
              src={theme == "light" ? search_icon_light : search_icon_dark}
              alt="Search"
              className="search-trigger-icon"
            />
          </div>
        ) : (
          <form className="expandable-search" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchChange}
              onBlur={handleSearchBlur}
              onKeyDown={handleKeyDown}
              className="search-input-expanded"
              autoFocus
            />
            <button type="submit" className="search-submit-btn">
              <img
                src={theme == "light" ? search_icon_light : search_icon_dark}
                alt="Search"
                className="search-submit-icon"
              />
            </button>
          </form>
        )}
      </div>

      <div className="notification-container" ref={notificationRef}>
        <div className="notification-bell" onClick={handleNotificationClick}>
          <img
            src={reminder_icon}
            className="reminder_icon"
            alt="Notifications"
          />
          {notificationCount > 0 && (
            <span className="notification-badge">{notificationCount}</span>
          )}
        </div>
        
        {showNotifications && (
          <div className={`notification-dropdown ${theme === 'dark' ? 'dark' : ''}`}>
            <div className="notification-header">
              <h3>Notifications</h3>
              <button onClick={() => setNotificationCount(0)}>Mark all as read</button>
            </div>
            <div className="notification-list">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div key={notification.id} className={`notification-item ${notification.read ? 'read' : ''}`}>
                    <p className="notification-message">{notification.message}</p>
                    <span className="notification-time">{notification.time}</span>
                  </div>
                ))
              ) : (
                <div className="no-notifications">No new notifications</div>
              )}
            </div>
          </div>
        )}
      </div>

      <div
        onClick={() => onLogin && onLogin()}
        className="login-icon"
        title="Login"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H15"
            stroke={theme === "light" ? "#374151" : "#f3f4f6"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 17L15 12L10 7"
            stroke={theme === "light" ? "#374151" : "#f3f4f6"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12H3"
            stroke={theme === "light" ? "#374151" : "#f3f4f6"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme == "light" ? toggle_light : toggle_dark}
        alt=""
        className="toggle-icon"
      />
    </div>
  );
};
export default Navbar;
