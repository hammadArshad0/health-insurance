import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> {/* This will render child routes */}
      </main>
      <Footer />
    </>
  );
}
