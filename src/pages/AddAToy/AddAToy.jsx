import React from "react";

const AddAToy = () => {
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const subCategory = form.category.value;
    const photo = form.photo.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const details = form.details.value;
    console.log(
      productName,
      subCategory,
      photo,
      sellerName,
      sellerEmail,
      price,
      quantity,
      rating,
      details
    );
  };

  return (
    <div className="bg-white border border-4 rounded-lg shadow relative m-10">
      <h3 className="text-xl font-semibold text-center my-5">Add a product</h3>

      <div className="p-6 space-y-6">
        <form onSubmit={handleAddToy}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium text-gray-900 block mb-2">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Product Name"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium text-gray-900 block mb-2">
                Sub-category
              </label>
              <input
                type="text"
                name="category"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Sub-category"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium text-gray-900 block mb-2">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Photo URL"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium text-gray-900 block mb-2">
                Seller Name
              </label>
              <input
                type="text"
                name="sellerName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Seller Name"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium text-gray-900 block mb-2">
                Seller Email
              </label>
              <input
                type="email"
                name="sellerEmail"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Seller Email"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium text-gray-900 block mb-2">
                Price
              </label>
              <input
                type="text"
                name="price"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Price"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium text-gray-900 block mb-2">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Rating"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium text-gray-900 block mb-2">
                Available quantity
              </label>
              <input
                type="text"
                name="quantity"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Available quantity"
                required
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm font-medium text-gray-900 block mb-2">
                Product Details
              </label>
              <textarea
                typeof="text"
                name="details"
                rows="6"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Details"
              ></textarea>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 rounded-b">
            <button
              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Add Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
