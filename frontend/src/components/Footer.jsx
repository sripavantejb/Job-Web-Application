import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="bg-blue-600 p-2 rounded-lg">
            <span className="text-white text-xl">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </span>
          </div>
          <h1 className="text-xl font-bold text-gray-800">JobLink</h1>
        </div>

        <div className="flex space-x-6 text-gray-600 mb-4 md:mb-0">
          <a href="#jobs" className="hover:text-blue-600">
            Jobs
          </a>
          <a href="#companies" className="hover:text-blue-600">
            Companies
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
        </div>

        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} JobLink. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
