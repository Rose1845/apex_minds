"use client";
import React from "react";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#0F172B] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              ApexMinds
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="flex flex-col lg:flex-row list-none lg:ml-auto lg:space-x-4 ">
              <a href="#home" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="#features" className="text-white hover:text-gray-300">
                Features
              </a>
              <a href="#pricing" className="text-white hover:text-gray-300">
                Pricing
              </a>
              <a href="#contact" className="text-white hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
