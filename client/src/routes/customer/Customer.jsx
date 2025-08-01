import React, { useState } from "react";
import './customer.css';

const Customer = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const orders = [
    { id: "#1234", product: "Rift Gogan Sofa Large", status: "Delivered", total: 2499 },
    { id: "#1235", product: "Maple Wooden Dining Set", status: "Pending", total: 1299 },
  ];

  return (
    <div className="container py-4">
      <h4 className="mb-4">Customer Dashboard</h4>

      <div className="row">
        {/* Profile Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-3">
            <h5>Profile Info</h5>
            <p><strong>Name:</strong> Gowtham</p>
            <p><strong>Email:</strong> gowtham@example.com</p>
          </div>
        </div>

        {/* Password Change */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-3">
            <h5>Change Password</h5>
            <button className="btn btn-sm btn-outline-success mt-2" onClick={() => setShowPasswordModal(true)}>
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="card shadow-sm p-3 mb-4">
        <h5>My Orders</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td><span className={`badge ${order.status === 'Delivered' ? 'bg-success' : 'bg-warning text-dark'}`}>{order.status}</span></td>
                <td>₹{order.total}</td>
                <td><button className="btn btn-sm btn-outline-secondary" onClick={() => setShowOrderModal(true)}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Logout */}
      <div className="text-end">
        <button className="btn btn-outline-danger">Logout</button>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="custom-modal">
          <div className="modal-content p-4">
            <h5>Change Password</h5>
            <input type="password" className="form-control mb-2" placeholder="Current Password" />
            <input type="password" className="form-control mb-2" placeholder="New Password" />
            <input type="password" className="form-control mb-2" placeholder="Confirm Password" />
            <div className="text-end">
              <button className="btn btn-sm btn-secondary me-2" onClick={() => setShowPasswordModal(false)}>Cancel</button>
              <button className="btn btn-sm btn-success">Update</button>
            </div>
          </div>
        </div>
      )}

      {/* Order Modal */}
      {showOrderModal && (
        <div className="custom-modal">
          <div className="modal-content p-4">
            <h5>Order Actions</h5>
            <p>What would you like to do with this order?</p>
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-sm btn-outline-danger">Cancel Order</button>
              <button className="btn btn-sm btn-secondary" onClick={() => setShowOrderModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer;
