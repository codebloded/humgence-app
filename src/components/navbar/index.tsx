import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar: React.FC<{ isTransparent: boolean }> = ({ isTransparent }) => {
  return (
    <div
      className={`navbar fixed w-full z-10 top-0 ${
        isTransparent ? "bg-transparent" : "bg-black"
      } transition-colors duration-500 ease-in-out`}
    >
      <div className="navbar-start">
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Team</a>
            </li>

            <li>
              <a>Our Projects</a>
            </li>
            <li>
              <a>Vision</a>
            </li>
          </ul>
        </div>
        <div className="drawer drawer-start">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <div className="flex flex-col w-full items-start justify-start h-full bg-neutral-600">
              <div className="flex flex-col mt-4 w-full items-start justify-center">
                <div className="flex flex-row items-start w-11/12 justify-between ">
                  <Link
                    href="/"
                    className="text-2xl font-bold text-center ml-4"
                  >
                    REAL ESTATE
                  </Link>
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  >
                    <X size={24} />
                  </label>
                </div>
                <ul className="menu">
                  <li>
                    <a>Vision</a>
                  </li>
                  <li>
                    <a>Team and connect</a>
                  </li>
                  <li>
                    <a>Our Projects</a>
                  </li>
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-center lg:flex ">
        <a className="btn btn-ghost text-center text-xl">REAL ESTATE</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About Us</a>
          </li>

          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
