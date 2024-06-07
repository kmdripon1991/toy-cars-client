import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const singleToyData = useLoaderData();
  console.log(singleToyData);
  const {
    image,
    toy_name,
    seller_name,
    seller_email,
    available_quantity,
    price,
    detail_description,
    rating,
  } = singleToyData;
  return (
    <div className="p-4 w-3/4 mx-auto">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="h-48 w-full object-cover object-center"
          src={image}
          alt="toy"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">{toy_name}</h1>
          <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">
            Seller name : {seller_name}
          </h2>
          <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">
            Seller Email : {seller_email}
          </h2>
          <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">
            Available Quantity: {available_quantity}
          </h2>
          <p className="leading-relaxed mb-3">{detail_description}</p>
          <div className="flex items-center justify-between">
            <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Price: $ {price}
            </p>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
