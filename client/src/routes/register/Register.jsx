import React, { useState } from 'react';

const Register = () => {
  const [activeTab, setActiveTab] = useState('customer');

  return (
    <div className="container py-5 height-100" style={{ maxWidth: '450px' }}>
      <h2 className="mb-4 fw-bold text-center fs-1">REGISTER</h2>
      <div className="bg-light  py-5 px-3 shadow rounded-4">
        <div className="d-flex justify-content-around mb-4">
          <button
            className={`btn ${activeTab === 'customer' ? 'btn-dark' : 'btn-outline-dark'} rounded-pill`}
            onClick={() => setActiveTab('customer')}
          >
            Customer
          </button>
          <button
            className={`btn ${activeTab === 'seller' ? 'btn-dark' : 'btn-outline-dark'} rounded-pill`}
            onClick={() => setActiveTab('seller')}
          >
            Seller
          </button>
        </div>

        {activeTab === 'customer' && (
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter full name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Create password" />
            </div>
            <button type="submit" className="btn btn-dark w-100 rounded-pill">
              Register as Customer
            </button>
          </form>
        )}

        {activeTab === 'seller' && (
          <form>
            <div className="mb-3">
              <label className="form-label">Business Name</label>
              <input type="text" className="form-control" placeholder="Enter business name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Create password" />
            </div>
            <button type="submit" className="btn btn-dark w-100 rounded-pill">
              Register as Seller
            </button>
          </form>
        )}
        <a href="/login" className='float-end mt-2' >Already have an account?</a>
      </div>
    </div>
  );
};

export default Register;
