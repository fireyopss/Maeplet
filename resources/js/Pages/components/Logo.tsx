import React from "react";
import { FaCube } from "react-icons/fa"; // Example icon

const MaepletLogo = () => {
  return (
    <div className="flex items-center justify-center h-16 border-b border-gray-700 bg-gray-900">
      <FaCube className="text-3xl text-blue-400 drop-shadow-lg mr-2" />
      <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Maeplet
      </h1>
    </div>
  );
};

export default MaepletLogo;
