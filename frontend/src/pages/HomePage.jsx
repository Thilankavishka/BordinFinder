// pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Find a Boarding</h1>
      <p className="mb-6 text-lg text-gray-700">Search and explore available boardings in your area.</p>
      <Link to="/login" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Login</Link>
    </div>
  );
}