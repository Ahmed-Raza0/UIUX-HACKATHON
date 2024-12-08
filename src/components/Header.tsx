'use client'
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[60px] flex flex-row items-center px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
      {/* Logo */}
      <div className="flex items-center justify-start">
        <Image
          src="/images/nike.svg"
          alt="Logo"
          width={78.47}
          height={78.47}
          className="ml-4"
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden sm:flex flex-grow justify-center gap-6 items-center">
        <h1 className="text-sm font-medium text-gray-800">New & Featured</h1>
        <h1 className="text-sm font-medium text-gray-800">Men</h1>
        <h1 className="text-sm font-medium text-gray-800">Women</h1>
        <h1 className="text-sm font-medium text-gray-800">Kids</h1>
        <h1 className="text-sm font-medium text-gray-800">Sale</h1>
        <h1 className="text-sm font-medium text-gray-800">SNKRS</h1>
        
        {/* Image in between */}
        <Image
          src="/images/Frame.png"
          alt="Special Offer"
          width={180}
          height={40}
          className="ml-12"
        />
      </div>

      {/* Right-side Icon (Side Image) */}
      <div className="flex items-center justify-end ml-auto">
        <Image
          src="/images/side.svg"
          alt="Side Image"
          width={84}
          height={60}
        />
      </div>
      
      {/* Mobile Hamburger Menu */}
      <div className="sm:hidden flex items-center ml-auto">
        <button
          className="text-gray-800"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-[100px] left-0 w-full bg-white shadow-md z-10">
          <div className="flex flex-col items-center py-4">
            <h1 className="text-sm font-medium text-gray-800 py-2">New & Featured</h1>
            <h1 className="text-sm font-medium text-gray-800 py-2">Men</h1>
            <h1 className="text-sm font-medium text-gray-800 py-2">Women</h1>
            <h1 className="text-sm font-medium text-gray-800 py-2">Kids</h1>
            <h1 className="text-sm font-medium text-gray-800 py-2">Sale</h1>
            <h1 className="text-sm font-medium text-gray-800 py-2">SNKRS</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
