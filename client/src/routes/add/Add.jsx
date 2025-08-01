import React from 'react';

const Add = () => {
  return (
    <div className="container py-4">
      <h3 className="mb-4">Add New Product</h3>

      <div className="card shadow-sm rounded-3 p-4">
        <form>
          {/* Product Name */}
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input type="text" className="form-control" placeholder="Enter product name" />
          </div>

          {/* Product Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows="3" placeholder="Short description about the product"></textarea>
          </div>

          {/* Price */}
          <div className="mb-3">
            <label className="form-label">Price (₹)</label>
            <input type="number" className="form-control" placeholder="Enter price" />
          </div>

          {/* Stock */}
          <div className="mb-3">
            <label className="form-label">Stock Quantity</label>
            <input type="number" className="form-control" placeholder="How many available?" />
          </div>

          {/* Category */}
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select">
              <option>Living Room</option>
              <option>Bedroom</option>
              <option>Outdoor</option>
            </select>
          </div>

          {/* Image Upload */}
          <div className="mb-3">
            <label className="form-label">Product Image</label>
            <input type="file" className="form-control" />
          </div>

          {/* Submit Button */}
          <div className="text-end">
            <button type="submit" className="btn btn-success">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
