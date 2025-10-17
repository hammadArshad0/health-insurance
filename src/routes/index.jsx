import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "../components/feature/home/homepage";
import Contact from "../pages/contact";
import HomeLayout from "../components/common/homelayout";
import Insurance from "../components/feature/insurance/insurance";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-500 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

function Index() {
  return (
    <Routes>
      {/* All routes wrapped inside HomeLayout */}
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Homepage />} />
        <Route path="insurance" element={<Insurance />} />
        <Route path="contact" element={<Contact />} />

        {/* 404 Page within HomeLayout */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Index;
