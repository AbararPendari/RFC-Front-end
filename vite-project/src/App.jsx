import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navabr";
import Sidebar from "./Components/Sidebar/Carousel";
import LoginForm from "./Components/LoginForm/LoginForm";
import { AppRouter } from "./routing";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openNotify = () => setIsNotifyOpen(true);
  const closeNotify = () => setIsNotifyOpen(false);
  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <div className={`container ${theme}`}>
              <Navbar
                theme={theme}
                setTheme={setTheme}
                onNotify={openNotify}
                onLogin={openLogin}
              />

              <div style={{ display: "flex" }}>
                <Sidebar />
                <AppRouter />
              </div>
              {/* 
            {isNotifyOpen && (
              <div className="modal-overlay" onClick={closeNotify}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-header">
                    <h3>Notifications</h3>
                    <button className="btn close" onClick={closeNotify}>✕</button>
                  </div>
                  <div className="modal-body">
                    <div className="notice-item">New shipment assigned to route LA → SF.</div>
                    <div className="notice-item">Temperature alert resolved for ORD-1021.</div>
                    <div className="notice-item">3 invoices due this week.</div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn primary" onClick={closeNotify}>Mark all as read</button>
                  </div>
                </div>
              </div>
            )} */}

              {isLoginOpen && <LoginForm onClose={closeLogin} theme={theme} />}
            </div>
          </>
        }
      />
    </Routes>
  );
};
export default App;
