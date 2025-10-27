import React from 'react';

const Users = () => {
  const users = [
    { id: "USR-001", name: "John Smith", email: "john@example.com", role: "Admin", status: "Active" },
    { id: "USR-002", name: "Sarah Johnson", email: "sarah@example.com", role: "Manager", status: "Active" },
    { id: "USR-003", name: "Mike Wilson", email: "mike@example.com", role: "Driver", status: "Inactive" },
    { id: "USR-004", name: "Lisa Brown", email: "lisa@example.com", role: "Customer", status: "Active" },
  ];

  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>User Management</h2>
          <div className="header-actions">
            <button className="btn primary">Add User</button>
            <button className="btn">Import Users</button>
          </div>
        </div>
        
        <div className="grid stats">
          <div className="stat-card">
            <div className="stat-title">Total Users</div>
            <div className="stat-value">1,284</div>
            <div className="stat-delta up">▲ +8.4%</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Active Users</div>
            <div className="stat-value">1,156</div>
            <div className="stat-delta up">▲ +2.1%</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">New This Month</div>
            <div className="stat-value">89</div>
            <div className="stat-delta up">▲ +12.3%</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Admin Users</div>
            <div className="stat-value">12</div>
            <div className="stat-delta">—</div>
          </div>
        </div>
        
        <div className="table-card">
          <div className="card-header">
            <h3>User Directory</h3>
            <span className="subtle">All system users</span>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`badge ${user.role.toLowerCase()}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${user.status.toLowerCase()}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn small">Edit</button>
                      <button className="btn small">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
