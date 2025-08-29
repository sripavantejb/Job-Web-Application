import React from 'react';

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

function HeroSection() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-center p-4">
      <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-800 rounded-xl shadow-lg">
        <BriefcaseIcon />
      </div>
      <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-800">
        Find Your Dream Job
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-gray-500">
        Discover opportunities from top companies worldwide. Your next career move is just a click away.
      </p>
    </div>
  );
}

export default HeroSection;
