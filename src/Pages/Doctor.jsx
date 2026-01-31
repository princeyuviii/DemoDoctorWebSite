import React from "react";
import { useSelector } from "react-redux";

export default function Doctor() {
  const doctors = useSelector((state) => state.doctor.doctors);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-semibold text-gray-900">Our Doctors</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Meet our experienced and trusted medical professionals across
            different departments.
          </p>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden hover:-translate-y-1"
            >
              {/* Image Section (Face visible) */}
              <div className="h-72 bg-gray-100 flex items-center justify-center">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full object-contain p-6"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  {doctor.name}
                </h2>

                <p className="text-blue-600 text-sm font-medium">
                  {doctor.specialization}
                </p>

                <p className="text-gray-500 text-sm mb-3">
                  {doctor.department}
                </p>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {doctor.desc}
                </p>

                {/* Meta info */}
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>{doctor.experience} experience</span>
                  <span className="font-semibold text-gray-900">
                    ₹{doctor.fees}
                  </span>
                </div>

                {/* Action */}
                <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition font-medium">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
