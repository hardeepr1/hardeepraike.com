import React from "react";

const Header: React.FC = () => (
  <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-md sticky top-0 z-50">
    <h1 className="text-2xl font-bold text-blue-700 tracking-tight">Hardeep Raike</h1>
    <nav className="space-x-6">
      <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
      <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Projects</a>
      <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
    </nav>
  </header>
);

export default Header;
