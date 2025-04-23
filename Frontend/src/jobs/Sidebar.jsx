import React from "react";
import {
  FiHome,
  FiBriefcase,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-purple-800 text-white p-6 space-y-6">
        <div className="text-center text-xl font-bold">Dashboard</div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <a
            href="/"
            className="flex items-center space-x-2 p-2 rounded hover:bg-purple-700"
          >
            <FiHome size={20} />
            <span>Home</span>
          </a>
          <a
            href="/jobs"
            className="flex items-center space-x-2 p-2 rounded hover:bg-purple-700"
          >
            <FiBriefcase size={20} />
            <span>Jobs</span>
          </a>
          <a
            href="/profile"
            className="flex items-center space-x-2 p-2 rounded hover:bg-purple-700"
          >
            <FiUser size={20} />
            <span>Profile</span>
          </a>
          <a
            href="/settings"
            className="flex items-center space-x-2 p-2 rounded hover:bg-purple-700"
          >
            <FiSettings size={20} />
            <span>Settings</span>
          </a>
          <a
            href="/logout"
            className="flex items-center space-x-2 p-2 rounded hover:bg-purple-700"
          >
            <FiLogOut size={20} />
            <span>Logout</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        {/* Your content goes here */}
        <h1 className="text-2xl font-bold">Available Jobs</h1>
        {/* You can map through job data here */}
      </div>
    </div>
  );
};

export default Sidebar;
