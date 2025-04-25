import React from "react";

export default function SellerDashboard() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Seller Dashboard</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600">Add New Boarding</button>
      <div className="bg-gray-100 p-4 rounded shadow">
        <p className="text-gray-600">No boardings yet.</p>
      </div>
    </div>
  );
}