import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 bg-transparent">
      <div className="p-4">
        <nav className="flex items-center justify-around">
          <div className="flex items-center space-x-4 text-white">
            <a href="#" className="text-white hover:text-gray-300">
              Sales
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Rentals
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Projects
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white font-semibold">HUMGANCE</p>
            <p className="text-xs text-white font-semibold">REAL ESTATE</p>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
