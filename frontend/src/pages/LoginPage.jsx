// pages/LoginPage.jsx
import React from "react";

export default function LoginPage() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Login</h2>
      <form className="flex flex-col space-y-4">
        <input type="email" placeholder="Email" className="border border-gray-300 rounded p-3" />
        <input type="password" placeholder="Password" className="border border-gray-300 rounded p-3" />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
      </form>
    </div>
  );
}