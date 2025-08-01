import React from 'react';
import { Card } from 'react-bootstrap';
import { FaHeart, FaStar } from 'react-icons/fa';

const FurnitureCard = () => {
  return (
    <Card className="border-0 shadow-sm p-2 rounded-4" style={{ backgroundColor: "#f4f3ef" }}>
      <div className="d-flex justify-content-between align-items-center px-2 pt-2">
        <h6 className="fw-bold text-dark m-0">$320</h6>
        <FaHeart className="text-muted" />
      </div>
      <div className="text-center my-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9091/9091917.png"
          alt="Sofa"
          style={{ width: "90%", borderRadius: "12px" }}
        />
      </div>
      <Card.Body className="text-center py-1">
        <Card.Title className="fs-6 fw-semibold mb-1 text-dark">
          Rift Gogan Sofa Large
        </Card.Title>
        <div className="d-flex justify-content-center align-items-center gap-1 text-warning fs-6">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <small className="text-muted ms-1">(11)</small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FurnitureCard;
