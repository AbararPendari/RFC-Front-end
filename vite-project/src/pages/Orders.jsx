import React from 'react';

const Orders = () => {
  const orders = [
    { id: "ORD-1023", route: "LA → SF", status: "In Transit", eta: "2h", customer: "Fresh Market Co." },
    { id: "ORD-1022", route: "NYC → BOS", status: "Delivered", eta: "—", customer: "Boston Grocers" },
    { id: "ORD-1021", route: "SEA → PDX", status: "Delayed", eta: "+1h", customer: "Pacific Fresh" },
    { id: "ORD-1020", route: "DAL → AUS", status: "In Transit", eta: "4h", customer: "Austin Markets" },
    { id: "ORD-1019", route: "CHI → DET", status: "Processing", eta: "6h", customer: "Motor City Foods" },
    { id: "ORD-1018", route: "MIA → ATL", status: "Delivered", eta: "—", customer: "Atlanta Fresh" },
  ];

  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Orders Management</h2>
          <div className="header-actions">
            <button className="btn primary">New Order</button>
            <button className="btn">Bulk Actions</button>
          </div>
        </div>
        
        <div className="table-card">
          <div className="card-header">
            <h3>All Orders</h3>
            <span className="subtle">Complete order history</span>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Route</th>
                  <th>Status</th>
                  <th>ETA</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.route}</td>
                    <td>
                      <span
                        className={`badge ${order.status
                          .replace(/\s/g, "-")
                          .toLowerCase()}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>{order.eta}</td>
                    <td>
                      <button className="btn small">View</button>
                      <button className="btn small">Edit</button>
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

export default Orders;
