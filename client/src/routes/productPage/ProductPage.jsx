import React, { useState } from "react";
import f3 from "../../assets/f3.png";
import f2 from "../../assets/f2.png";
import f1 from "../../assets/f1.png";


const ProductPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [ordered, setOrdered] = useState(false);

  const product = {
    name: "Rift Gogan Sofa",
    description:
      "This elegant sofa adds comfort and style to your living space. Built with premium wood and velvet upholstery.",
    price: 2499,
    stock: 10,
    image: "../../assets/f3.png"
  };

  const handlePlaceOrder = () => {
    if (quantity > product.stock) {
      alert("Not enough stock.");
      return;
    }
    setOrdered(true);
    // Later, send data to backend here
  };

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={f2} 
            alt={product.name}
            className="img-fluid "
          />
        </div>
        <div className="col-md-6">
          <h3>{product.name}</h3>
          <p className="text-muted">{product.description}</p>
          <h5 className="text-success">₹{product.price}</h5>
          <p>
            <strong>Stock:</strong> {product.stock}
          </p>

          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              min={1}
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="form-control"
              style={{ width: "100px" }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Rate this Product</label>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  style={{
                    cursor: "pointer",
                    fontSize: "20px",
                    color: rating >= star ? "#ffc107" : "#ccc",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Write a Review</label>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Say something about this product..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button className="btn secondary-600" onClick={handlePlaceOrder}>
            Place Order
          </button>

          {ordered && (
            <div className="alert alert-success mt-3">
              Order placed successfully! 🎉
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
