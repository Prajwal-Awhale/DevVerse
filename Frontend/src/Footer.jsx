import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => (
  <footer className="relative bg-gradient-to-br w-full from-purple-900 via-purple-800 to-purple-900 text-white min-h-20vh flex flex-col">
    <div className="absolute top-0 left-0 w-full  leading-[0] ">
      <svg
        className="relative block w-full h-8"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.39,22,103.6,29,158,20s102.36-36,154-29,99,44,149,59c51,15,103-2,154-19s102-32,154-27,103,27,154,29c52,2,103-14,154-26,52-12,103-18,155-6,51,12,103,46,154,62V0Z"
          fill="rgba(31, 41, 55, 1)"
        />
      </svg>
    </div>

    <div className="max-w-6xl mx-auto px-6 pt-12 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex flex-col items-center md:items-start space-y-4">
        <h1 className="text-2xl font-bold">About DevVerse</h1>
        <p className="text-sm text-purple-300 text-center md:text-left">
          DevVerse is a community‑driven job portal where developers connect,
          grow, and get hired. Build your future, one line of code at a time.
        </p>
      </div>

      <div className="flex flex-col items-center md:items-start space-y-2">
        <h3 className="text-xl font-semibold">Quick Links</h3>
        <ul className="space-y-1 text-sm">
          <li>
            <a href="#" className="hover:text-purple-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-300 transition">
              Jobs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-300 transition">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-300 transition">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-300 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center md:items-end space-y-4">
        <div className="w-full max-w-xs">
          <h3 className="text-xl font-semibold">Stay Updated</h3>
          <form className="mt-2 flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-3 py-2 rounded-l bg-purple-700 placeholder-purple-400 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 rounded-r font-semibold hover:bg-amber-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex space-x-4 text-2xl">
          {[
            FaGithub,
            FaLinkedin,
            FaTwitter,
            FaInstagram,
            FaDiscord,
            FaEnvelope,
          ].map((Icon, i) => (
            <a key={i} href="#" className="hover:text-purple-300 transition">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="border-t border-purple-700 mt-4 pt-4 pb-6">
      <p className="text-center text-sm text-purple-300">
        © {new Date().getFullYear()} DevVerse. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
