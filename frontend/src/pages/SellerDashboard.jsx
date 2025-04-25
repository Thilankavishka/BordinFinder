import React from "react";
import { Link } from "react-router-dom";

export default function SellerDashboard() {
  // Sample data - in a real app, this would come from an API
  const boardings = [
    {
      id: 1,
      title: "Cozy Room Near University",
      status: "active",
      bookings: 5,
      price: 15000
    },
    {
      id: 2,
      title: "Luxury Apartment in City Center",
      status: "pending",
      bookings: 2,
      price: 25000
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
        <Link
          to="/seller/add-boarding"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add New Boarding
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Your Boardings</h3>
          <p className="mt-1 text-sm text-gray-500">Manage your listed boarding places</p>
        </div>
        
        {boardings.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            You haven't listed any boardings yet.
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {boardings.map((boarding) => (
              <li key={boarding.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-blue-600 truncate">
                        {boarding.title}
                      </p>
                      <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        boarding.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {boarding.status}
                      </span>
                    </div>
                    <div className="mt-1 flex">
                      <p className="text-sm text-gray-500">
                        LKR {boarding.price.toLocaleString()} per month
                      </p>
                      <p className="ml-3 text-sm text-gray-500">
                        {boarding.bookings} {boarding.bookings === 1 ? 'booking' : 'bookings'}
                      </p>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <Link
                      to={`/seller/edit-boarding/${boarding.id}`}
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Statistics</h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-blue-800">Total Listings</h4>
              <p className="mt-1 text-2xl font-semibold text-blue-600">2</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-green-800">Active Listings</h4>
              <p className="mt-1 text-2xl font-semibold text-green-600">1</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-purple-800">Total Earnings</h4>
              <p className="mt-1 text-2xl font-semibold text-purple-600">LKR 80,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}