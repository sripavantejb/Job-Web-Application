import React, { useState } from 'react';

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-800 rounded-lg">
              <BriefcaseIcon />
            </div>
            <span className="text-2xl font-bold text-gray-800">JobLink</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Jobs</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Companies</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          </nav>

          <div className="flex items-center space-x-4">
            
            <div className="hidden md:flex relative items-center">
              <span className="absolute left-3"><SearchIcon /></span>
              <input
                type="text"
                placeholder="Search Jobs"
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="flex items-center space-x-2 px-5 py-2.5 text-white font-semibold bg-gradient-to-r from-blue-500 to-gray-800 rounded-lg shadow-md hover:opacity-90">
              <PlusIcon />
              <span>Post Job</span>
            </button>

            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <MenuIcon />
                </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
            <div className="mt-4 md:hidden">
                <nav className="flex flex-col space-y-2">
                    <a href="#" className="text-gray-600 hover:text-gray-900 p-2 rounded hover:bg-gray-100">Jobs</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 p-2 rounded hover:bg-gray-100">Companies</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 p-2 rounded hover:bg-gray-100">About</a>
                </nav>
            </div>
        )}
      </div>
    </header>
  );
}

export default Header;
