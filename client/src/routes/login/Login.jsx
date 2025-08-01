import React, { useState } from "react";

const Login = () => {
  const [activeTab, setActiveTab] = useState("customer");

  return (
    <div className="container py-3 height-100" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 fw-bold text-center fs-1">LOGIN</h2>
      <div className="bg-light py-5 px-3 shadow rounded-4">
        <div className="d-flex justify-content-around mb-4">
          <button
            className={`btn ${
              activeTab === "customer" ? "btn-dark" : "btn-outline-dark"
            } rounded-pill`}
            onClick={() => setActiveTab("customer")}
          >
            Customer
          </button>
          <button
            className={`btn ${
              activeTab === "seller" ? "btn-dark" : "btn-outline-dark"
            } rounded-pill`}
            onClick={() => setActiveTab("seller")}
          >
            Seller
          </button>
        </div>

        {activeTab === "customer" && (
          <form>
            <div className="mb-3">
              <label className="form-label">Customer Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-dark w-100 rounded-pill">
              Login as Customer
            </button>
          </form>
        )}

        {activeTab === "seller" && (
          <form>
            <div className="mb-3">
              <label className="form-label">Seller Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-dark w-100 rounded-pill">
              Login as Seller
            </button>
          </form>
        )}
        <a href="/register" className="float-end mt-2">
          Don't have an account?
        </a>
      </div>
    </div>
  );
};

export default Login;
