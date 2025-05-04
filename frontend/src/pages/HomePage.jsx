import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow py-4 px-6 flex justify-end space-x-4">
        <Link
          to="/login"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Register
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Boarding Place</h1>
          <p className="text-xl mb-8">Discover comfortable and affordable boarding options near you</p>
          <Link 
            to="/boardings" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Browse Boardings
          </Link>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step Cards */}
            {["Search", "Visit", "Book"].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
                <p className="text-gray-600">
                  {step === "Search" && "Find boardings that match your preferences and budget"}
                  {step === "Visit" && "Schedule a visit to see the boarding in person"}
                  {step === "Book" && "Secure your spot with easy online booking"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
