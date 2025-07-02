import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!validateEmail(formData.email)) newErrors.email = "Invalid email.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Signup successful!", formData);
      // Submit form logic here
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-md bg-gray-700 text-white border ${
                  errors.name ? "border-red-500" : "border-gray-600"
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-md bg-gray-700 text-white border ${
                  errors.email ? "border-red-500" : "border-gray-600"
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-md bg-gray-700 text-white border ${
                  errors.password ? "border-red-500" : "border-gray-600"
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-md bg-gray-700 text-white border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-600"
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
