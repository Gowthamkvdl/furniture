import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./seller.css";

const Seller = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);

  const products = [
    { name: "Rift Gogan Sofa", stock: 12, price: 2499, status: "Active" },
    { name: "Wooden Dining Table", stock: 5, price: 7999, status: "Active" },
  ];

  const orders = [
    {
      id: "#2201",
      product: "Classic Study Chair",
      customer: "Kumar",
      status: "Processing",
    },
    {
      id: "#2202",
      product: "Rift Gogan Sofa",
      customer: "Ajay",
      status: "Shipped",
    },
  ];

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setShowOrderModal(true);
  };

  const handleRemoveProduct = (product) => {
    setProductToRemove(product);
    setShowRemoveModal(true);
  };

  return (
    <div className="container py-4">
      <h4 className="mb-4">Seller Dashboard</h4>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-3">
            <h5>Profile Info</h5>
            <p>
              <strong>Name:</strong> Gowtham Furniture
            </p>
            <p>
              <strong>Email:</strong> seller@example.com
            </p>
            <p>
              <strong>Store:</strong> Gowtham Interiors
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-3">
            <h5>Change Password</h5>
            <button
              className="btn btn-sm btn-outline-success mt-2"
              onClick={() => setShowPasswordModal(true)}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="card shadow-sm p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">My Products</h5>
          <Link to="/add" className="btn btn-sm btn-success">
            + Add Product
          </Link>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.stock}</td>
                <td>₹{item.price}</td>
                <td>
                  <span className="badge bg-success">{item.status}</span>
                </td>
                <td>
                  <Link
                    to="/edit"
                    className="btn btn-sm btn-outline-primary me-1"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Orders Section */}
      <div className="card shadow-sm p-3 mb-4">
        <h5>Recent Orders</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.customer}</td>
                <td>
                  <span className="badge bg-info text-dark">
                    {order.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => handleViewOrder(order)}
                  >
                    View
                  </button>
                </td>
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
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Current Password"
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="New Password"
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Confirm Password"
            />
            <div className="text-end">
              <button
                className="btn btn-sm btn-secondary me-2"
                onClick={() => setShowPasswordModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-sm btn-success">Update</button>
            </div>
          </div>
        </div>
      )}

      {/* Order View Modal */}
      {showOrderModal && selectedOrder && (
        <div className="custom-modal">
          <div className="modal-content p-4">
            <h5>Order Details</h5>
            <p>
              <strong>Order ID:</strong> {selectedOrder.id}
            </p>
            <p>
              <strong>Product:</strong> {selectedOrder.product}
            </p>
            <p>
              <strong>Customer:</strong> {selectedOrder.customer}
            </p>
            <p>
              <strong>Status:</strong> {selectedOrder.status}
            </p>
            <div className="text-end">
              <button
                className="btn btn-sm btn-secondary me-2"
                onClick={() => setShowOrderModal(false)}
              >
                Close
              </button>
              <button className="btn btn-sm btn-success">Deliver Order</button>
            </div>
          </div>
        </div>
      )}

      {/* Remove Product Modal */}
      {showRemoveModal && productToRemove && (
        <div className="custom-modal">
          <div className="modal-content p-4">
            <h5>Remove Product</h5>
            <p>
              Are you sure you want to remove{" "}
              <strong>{productToRemove.name}</strong>?
            </p>
            <div className="text-end">
              <button
                className="btn btn-sm btn-secondary me-2"
                onClick={() => setShowRemoveModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-sm btn-danger">Yes, Remove</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Seller;
