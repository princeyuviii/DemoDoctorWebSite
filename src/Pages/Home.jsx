import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative h-[520px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/01/33/33/41/360_F_133334155_X23HzbJKawbIgXVaub4bPM8CjpkS5uMS.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-xl">
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
              Your Healthcare, Simplified
            </h1>

            <p className="text-lg text-gray-200 mb-8">
              Find doctors, book appointments, and access medical support online
              with confidence.
            </p>

            <div className="flex gap-4">
              <Link
                to="/appointment"
                className="text-white bg-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
              >
                Book Appointment
              </Link>

              <Link
                to="/doctors"
                className="text-white border border-white/60 px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition"
              >
                Find Doctors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-medium mb-2">Verified Doctors</h3>
              <p className="text-gray-600 text-sm">
                Consult with trusted and verified medical professionals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-medium mb-2">Easy Booking</h3>
              <p className="text-gray-600 text-sm">
                Schedule appointments in just a few clicks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-medium mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                We’re here to help you anytime you need assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Image Feature */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://contentful.harrypotter.com/usf1vwtuqyxm/5FtTAM6imxaomoS7qznfxj/664a661ea9cb071659d0abc8edd88374/fact-file-hero-hospital-wing-harry-hermione-ron-seamus-pomfrey-hp-f2.jpg"
            alt="Hospital scene"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Dedicated Care and Support
            </h2>
            <p className="text-gray-700 mb-4">
              We connect you with professionals and facilities that prioritize
              your wellbeing. From routine consultations to urgent support, find
              what you need here.
            </p>
            <Link to="/about" className="text-blue-500 hover:underline">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What Patients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border p-6 rounded-lg shadow-sm bg-white">
              <p className="text-gray-600 mb-4">
                “Booking an appointment was super easy and smooth.”
              </p>
              <span className="font-medium text-gray-800">– Rahul</span>
            </div>

            <div className="border p-6 rounded-lg shadow-sm bg-white">
              <p className="text-gray-600 mb-4">
                “Found the right doctor without wasted time.”
              </p>
              <span className="font-medium text-gray-800">– Ananya</span>
            </div>

            <div className="border p-6 rounded-lg shadow-sm bg-white">
              <p className="text-gray-600 mb-4">
                “Clean UI and smooth experience overall.”
              </p>
              <span className="font-medium text-gray-800">– Aman</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-10 bg-gray-200 text-black text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Take Control of Your Health?
        </h2>
        <p className="text-lg mb-6">
          Join thousands of patients managing their care online with ease.
        </p>
        <Link
          to="/signup"
          className="bg-white text-blue-600 px-8 py-3 border-black rounded-md font-medium hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
