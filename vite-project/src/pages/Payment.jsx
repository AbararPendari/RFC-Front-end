import React from 'react';

const Payment = () => {
  const payments = [
    { id: "PAY-001", amount: "$2,450.00", status: "Completed", date: "2024-01-15", method: "Bank Transfer" },
    { id: "PAY-002", amount: "$1,890.50", status: "Pending", date: "2024-01-14", method: "Credit Card" },
    { id: "PAY-003", amount: "$3,200.75", status: "Completed", date: "2024-01-13", method: "Bank Transfer" },
    { id: "PAY-004", amount: "$950.25", status: "Failed", date: "2024-01-12", method: "Credit Card" },
  ];

  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Payment Management</h2>
          <div className="header-actions">
            <button className="btn primary">Process Payment</button>
            <button className="btn">Generate Invoice</button>
          </div>
        </div>
        
        <div className="grid stats">
          <div className="stat-card">
            <div className="stat-title">Total Revenue</div>
            <div className="stat-value">$84.2k</div>
            <div className="stat-delta up">▲ +5.3%</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Pending Payments</div>
            <div className="stat-value">$1.9k</div>
            <div className="stat-delta down">▼ -0.9%</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Failed Payments</div>
            <div className="stat-value">$950</div>
            <div className="stat-delta down">▼ -2.1%</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Success Rate</div>
            <div className="stat-value">94.3%</div>
            <div className="stat-delta up">▲ +1.1%</div>
          </div>
        </div>
        
        <div className="table-card">
          <div className="card-header">
            <h3>Payment History</h3>
            <span className="subtle">Recent transactions</span>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Method</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id}>
                    <td>{payment.id}</td>
                    <td>{payment.amount}</td>
                    <td>
                      <span
                        className={`badge ${payment.status
                          .replace(/\s/g, "-")
                          .toLowerCase()}`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td>{payment.date}</td>
                    <td>{payment.method}</td>
                    <td>
                      <button className="btn small">View</button>
                      <button className="btn small">Retry</button>
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

export default Payment;
