import React from "react";
import { Phone, Mail, MapPin, HeartPulse } from "lucide-react";
import insuranceImg from "../assets/icon/image1.jpg";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left: Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-700">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-center mb-8">
            We’re here to help you with your health insurance needs. Fill out the form below,
            and our team will reach out shortly.
          </p>

          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Type your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Info Card */}
        <div className="relative group">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border-t-4 border-green-700">
            <img
              src={insuranceImg}
              alt="Health Insurance"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-700 flex items-center gap-2">
                <HeartPulse className="text-red-500" /> Health Insurance Support
              </h3>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We offer 24/7 assistance and personalized health plan guidance.
                Our expert team helps you secure the best coverage for your
                family’s well-being.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="text-green-600" />
                  <span>+1 (800) 234-5678</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="text-green-600" />
                  <span>support@healthsecure.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="text-green-600" />
                  <span>123 Wellness Street, New York, USA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -z-10 top-8 left-8 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-all"></div>
        </div>
      </div>
    </div>
  );
}
