import React from "react";

export default function UserDashboard() {
  const email = localStorage.getItem("email");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <p>Welcome, {email}</p>
    </div>
  );
}
