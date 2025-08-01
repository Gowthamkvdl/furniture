import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FurnitureCard = ({ price, image, title, rating, reviews }) => {
  return (
    <div className="border-0 shadow-sm p-3 rounded-4" style={{ backgroundColor: "#f4f3ef" }}>
      <div className="d-flex justify-content-between align-items-center px-1">
        <h6 className="fw-bold text-dark m-0">${price}</h6>
        <FaHeart className="text-muted" />
      </div>

      <div className="text-center my-3">
        <img
          src={image}
          alt={title}
          className="img-fluid rounded"
          style={{ width: "90%" }}
        />
      </div>

      <div className="text-center">
        <h6 className="fw-semibold mb-1 text-dark fs-6">{title}</h6>
        <div className="d-flex justify-content-center align-items-center gap-1 text-warning fs-6 mb-2">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <small className="text-muted ms-1">({reviews})</small>
        </div>
        <Link to={'/product'} className="btn btn-dark rounded-pill px-4 py-2 fw-semibold" >Buy Now</Link>
        
      </div>
    </div>
  );
};

export default FurnitureCard;
