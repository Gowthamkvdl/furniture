import React, { useState } from "react";

const AdminPanel = () => {
  const [customers] = useState([
    { id: 1, name: "Arun", email: "arun@example.com" },
    { id: 2, name: "Priya", email: "priya@example.com" },
  ]);

  const [sellers, setSellers] = useState([
    { id: 1, name: "Mani Store", email: "mani@store.com", verified: false },
    { id: 2, name: "Siva Mart", email: "siva@mart.com", verified: true },
  ]);

  const [products] = useState([
    {
      id: 1,
      name: "Rift Gogan Sofa Large",
      seller: "Mani Store",
      price: 2499,
      stock: 10,
    },
    {
      id: 2,
      name: "Maple Wooden Dining Set",
      seller: "Siva Mart",
      price: 1299,
      stock: 5,
    },
  ]);

  const handleVerify = (id) => {
    const updated = sellers.map((seller) =>
      seller.id === id ? { ...seller, verified: true } : seller
    );
    setSellers(updated);
  };

  return (
    <div className="container py-4">
      <h3 className="mb-4">Admin Dashboard</h3>

      {/* Customers Table */}
      <div className="card shadow-sm rounded-3 mb-4 p-3">
        <h5 className="mb-3">Customers</h5>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cust) => (
              <tr key={cust.id}>
                <td>{cust.id}</td>
                <td>{cust.name}</td>
                <td>{cust.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sellers Table */}
      <div className="card shadow-sm rounded-3 mb-4 p-3">
        <h5 className="mb-3">Sellers</h5>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller) => (
              <tr key={seller.id}>
                <td>{seller.id}</td>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  {seller.verified ? (
                    <span className="badge bg-success">Verified</span>
                  ) : (
                    <span className="badge bg-danger">Not Verified</span>
                  )}
                </td>
                <td>
                  {!seller.verified ? (
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleVerify(seller.id)}
                    >
                      Verify Seller
                    </button>
                  ) : (
                    <button className="btn btn-sm btn-secondary" disabled>
                      Verified
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Products Table */}
      <div className="card shadow-sm rounded-3 mb-4 p-3">
        <h5 className="mb-3">Products</h5>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Name</th>
              <th>Seller</th>
              <th>Price (₹)</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.seller}</td>
                <td>{prod.price}</td>
                <td>{prod.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
