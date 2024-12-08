'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const TopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <div className="w-full">
      {/* Mobile Menu Button (Visible only on Small Screens) */}
      <div className="block md:hidden p-4">
        <button aria-label="Open Menu" onClick={toggleMenu}>
          <MenuIcon className="text-gray-800" />
        </button>
      </div>

      {/* Mobile Menu (Toggle Visible on Button Click) */}
      {isMenuOpen && (
        <div className="block md:hidden bg-white p-4">
          <div className="flex flex-col items-center">
            <Link href="/" className="text-[#111111] font-medium mb-2">
              Find a Store
            </Link>
            <Link href="/" className="text-[#111111] font-medium mb-2">
              Help
            </Link>
            <Link href="/JoinUs/" className="text-[#111111] font-medium mb-2">
              Join Us
            </Link>
            <Link href="/Login/" className="text-[#111111] font-medium mb-2">
              Sign In
            </Link>
          </div>
        </div>
      )}

      {/* Desktop and Larger Screens */}
      <div className="w-full h-full hidden md:block lg:block xl:block 2xl:block">
        <div className="h-[36px] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={24}
              height={24}
              className="ml-0 sm:ml-[48px] mb-2 sm:mb-0"
            />
          </div>

          {/* Navigation Links */}
          <div className="w-auto h-[36px] flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-[15px]">
            {/* Find a Store */}
            <div className="w-[98.5px] h-[34px] flex flex-row gap-[15.38px]">
              <h1 className="text-[11px] text-[#111111] font-medium">
                Find a Store
              </h1>
              <p className="text-[12px] text-[#111111]">|</p>
            </div>

            {/* Help */}
            <div className="w-[51.81px] h-[34px] flex flex-row gap-[12.69px]">
              <h1 className="text-[11px] text-[#111111] font-medium">Help</h1>
              <p className="text-[12px] text-[#111111]">|</p>
            </div>

            {/* Join Us & Sign In */}
            <div className="w-[122.5px] h-[36px] flex justify-between gap-2 sm:gap-3">
              <Link href="/JoinUs/" className="text-[11px] font-medium">
                Join Us
              </Link>
              <p className="text-[12px] text-[#111111]">|</p>
              <Link
                href="/Login/"
                className="text-center text-[11px] text-[#111111]"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
