import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  
  useEffect(() => {
  
    setUser({ name: "John Doe" });

    
    setRecommendations([
      { id: 1, name: "Cozy Apartment", location: "City Center", price: 100 },
      { id: 2, name: "Spacious House", location: "Suburbs", price: 200 },
      { id: 3, name: "Modern Loft", location: "Downtown", price: 150 },
    ]);
  }, []);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Personalized Welcome Message */}
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user ? user.name : "User"}
      </h1>

      {/* Search Functionality */}
      <div className="mb-6 flex items-center">
        <input
          type="text"
          placeholder="Search for boarding..."
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
        />
        <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Search
        </button>
      </div>

      {/* Recommended or Featured Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {recommendations.map((listing) => (
          <div
            key={listing.id}
            className="bg-white p-4 rounded-md shadow-sm border border-gray-200"
          >
            <h2 className="text-xl font-bold text-gray-900">{listing.name}</h2>
            <p className="text-gray-600">{listing.location}</p>
            <p className="text-green-600 font-semibold">${listing.price}/night</p>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}