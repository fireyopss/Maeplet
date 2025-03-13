import React from "react";

const DashboardNavItem = ({ href, children, icon, isActive = false }) => {
  return (
    <li>
      <a
        href={href}
        className={`flex items-center py-3 px-6 text-white rounded-lg transition-all duration-300
          ${isActive ? "bg-blue-600 shadow-lg" : "hover:bg-gray-800"}
          relative group`}
      >
        <span className="text-lg flex items-center space-x-3">
          {icon}
          <span>{children}</span>
        </span>
        {/* Indicator Effect */}
        <span
          className={`absolute right-0 h-full w-1 bg-blue-400 transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        ></span>
      </a>
    </li>
  );
};

export default DashboardNavItem;
