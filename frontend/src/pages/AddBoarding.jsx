import React, { useState } from "react";
import axios from "axios";

export default function AddBoarding() {
  const [boarding, setBoarding] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    status: "pending",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setBoarding({ ...boarding, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleImageRemove = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in boarding) {
      formData.append(key, boarding[key]);
    }
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.post("http://localhost:8080/api/boardings", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Boarding added successfully!");
      setBoarding({ title: "", description: "", price: "", location: "", status: "pending" });
      handleImageRemove();
    } catch (error) {
      alert("Error adding boarding!");
      console.error(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">🛏️ Add New Boarding</h2>
      <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              name="title"
              value={boarding.title}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Cozy room near university"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              name="location"
              value={boarding.location}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Vavuniya, City Center"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price (LKR)</label>
            <input
              name="price"
              type="number"
              value={boarding.price}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. 15000"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={boarding.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Include facilities, nearby landmarks, etc."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
          />
          {preview && (
            <div className="mt-4 relative w-40">
              <img
                src={preview}
                alt="Preview"
                className="rounded-lg shadow-md object-cover w-full h-40"
              />
              <button
                type="button"
                onClick={handleImageRemove}
                className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded-full hover:bg-red-700"
              >
                ✖
              </button>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-200"
        >
          🚀 Submit Boarding
        </button>
      </form>
    </div>
  );
}
