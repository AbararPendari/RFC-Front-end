import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import GPSTracker from '../pages/GPSTracker';
import SalesAnalytics from '../pages/SalesAnalytics';
import Orders from '../pages/Orders';
import Payment from '../pages/Payment';
import Users from '../pages/Users';
import Settings from '../pages/Settings';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/gps-tracker" element={<GPSTracker />} />
      <Route path="/sales-analytics" element={<SalesAnalytics />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/users" element={<Users />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRouter;
