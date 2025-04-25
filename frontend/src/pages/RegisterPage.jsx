import React from "react";

export default function RegisterPage() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Register</h2>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="Full Name" className="border border-gray-300 rounded p-3" />
        <input type="email" placeholder="Email" className="border border-gray-300 rounded p-3" />
        <input type="password" placeholder="Password" className="border border-gray-300 rounded p-3" />
        <select className="border border-gray-300 rounded p-3">
          <option value="user">User</option>
          <option value="seller">Seller</option>
        </select>
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
      </form>
    </div>
  );
}