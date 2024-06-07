import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Card = ({ item }) => {
  console.log(item);
  const { image, toy_name, price, rating } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="toy" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toy_name}</h2>
        <div className="flex items-center justify-between">
          <span>Price: $ {price}</span>
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-block btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
