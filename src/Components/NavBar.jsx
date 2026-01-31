import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, UserIcon, ClipboardClockIcon } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">NavBar</h2>

        <ul className="flex gap-6">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <HomeIcon size={20} />
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link
              to="/appointment"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <UserIcon size={20} />
              <span>Appointment</span>
            </Link>
          </li>

          <li>
            <Link
              to="/doctors"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <ClipboardClockIcon size={20} />
              <span>Doctors</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
