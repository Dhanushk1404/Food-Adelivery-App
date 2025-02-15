import React, { useState } from "react";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    order: "",
    additional: "",
    quantity: "",
    datetime: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    alert("Order placed successfully!");
  };

  return (
    <section className="py-16 px-6 bg-gray-100" id="order">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-lg text-green-500 uppercase font-semibold tracking-wide">Order Now</h3>
          <h1 className="text-4xl font-bold text-gray-800">Free and Fast</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Your Number</label>
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter your number"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium">Your Order</label>
              <input
                type="text"
                name="order"
                value={formData.order}
                onChange={handleChange}
                placeholder="Enter food name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Additional Food</label>
              <input
                type="text"
                name="additional"
                value={formData.additional}
                onChange={handleChange}
                placeholder="Extra with food"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium">How Much</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="How many orders"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Date and Time</label>
              <input
                type="datetime-local"
                name="datetime"
                value={formData.datetime}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium">Your Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-300"
                rows="3"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-300"
                rows="3"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Order Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Order;
