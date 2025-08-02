import React from "react";
import FurnitureCard from "../../components/furnitureCard/FurnitureCard";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold">Our Products</h2>
      <div className="row g-4 d-flex ">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <FurnitureCard
              price={320}
              image={f1}
              title="Rift Gogan Sofa Large"
              rating={5}
              reviews={11}
            />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FurnitureCard
            price={320}
            image={f2}
            title="Rift Gogan Sofa Large"
            rating={5}
            reviews={11}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FurnitureCard
            price={320}
            image={f2}
            title="Rift Gogan Sofa Large"
            rating={5}
            reviews={11}
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FurnitureCard
            price={320}
            image={f1}
            title="Rift Gogan Sofa Large"
            rating={5}
            reviews={11}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FurnitureCard
            price={320}
            image={f3}
            title="Rift Gogan Sofa Large"
            rating={5}
            reviews={11}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FurnitureCard
            price={320}
            image={f3}
            title="Rift Gogan Sofa Large"
            rating={5}
            reviews={11}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FurnitureCard
            price={320}
            image={f2}
            title="Rift Gogan Sofa Large"
            rating={5}
            reviews={11}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FurnitureCard
            price={320}
            image={f3}
            title="Rift Gogan Sofa Large"
            rating={5}
            reviews={11}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FurnitureCard
            price={320}
            image={f3}
            title="Rift Gogan Sofa Large"
            rating={5}
            reviews={11}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FurnitureCard
            price={320}
            image={f3}
            title="Rift Gogan Sofa Large"
            rating={5}
            reviews={11}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FurnitureCard
            price={320}
            image={f3}
            title="Rift Gogan Sofa Large"
            rating={5}
            reviews={11}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
