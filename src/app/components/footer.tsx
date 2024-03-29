import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©{new Date().getFullYear()} {""}
          <a href="" className="hover:underline">
            ApexMinds Solutions{" "}
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://twitter.com/nyaugenya001"
              className="hover:underline me-4 md:me-6"
            >
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Rose1845"
              className="hover:underline me-4 md:me-6"
            >
              <FaGithub />{" "}
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              <FaLinkedinIn />{" "}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
