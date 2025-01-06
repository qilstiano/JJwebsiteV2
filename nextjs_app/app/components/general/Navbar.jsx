'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMouseLeave = () => {
    // Start a timeout to close the dropdown after 2 seconds
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 2000);
  };

  const handleMouseEnter = () => {
    // Clear the timeout if the mouse enters the dropdown again
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-black">
      <nav
        className="flex justify-between items-center bg-cover bg-center text-white p-2"
        style={{
          backgroundImage:
            "url('/images/Header.svg'), linear-gradient(180deg, rgba(8,71,56,1) 31%, rgba(103,77,147,1) 100%)",
        }}
      >
        {/* Logo and Menu Container */}
        <div className="flex items-center">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center justify-center -m-4 z-2"
            style={{ width: '90px', height: 'auto' }}
          >
            <Image
              src="/images/JJlogo.svg"
              alt="Jalan Journey"
              width={100}
              height={100}
              className="h-auto"
            />
          </a>

          {/* Menu and Dropdown */}
          <div className="relative flex items-center">
            <div
              className="cursor-pointer hover:bold"
              onClick={toggleDropdown}
            >
              &#9776; Menu
            </div>
            <div
              className={`absolute top-[3rem] bg-gray-800 bg-opacity-80 text-white rounded shadow-lg z-10 transition-opacity duration-300 ${
                dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <a href="/about" className="block px-4 py-2 hover:bg-gray-600">
                About Us
              </a>
              <a href="/faq" className="block px-4 py-2 hover:bg-gray-600">
                FAQ
              </a>
              <a
                href="/testimonials"
                className="block px-4 py-2 hover:bg-gray-600"
              >
                Testimonials
              </a>
              <a href="/joinus" className="block px-4 py-2 hover:bg-gray-600">
                Get Involved
              </a>
              <a
                href="/contactus"
                className="block px-4 py-2 hover:bg-gray-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Links centered according to viewport */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <a href="/institutions" className="hover:underline text-base">
            Institutions
          </a>
          <a href="/organisations" className="hover:underline text-base">
            Organisations
          </a>
          <a href="/individuals" className="hover:underline text-base">
            Individuals
          </a>
        </div>
      </nav>

      {/* Decorative Vine */}
      <div className="absolute -bottom-4 w-full flex justify-center z-40">
        <Image
          src="/images/Vine2.svg"
          alt="Vine"
          layout="responsive"
          width={450}
          height={40}
          className="w-full h-auto"
        />
      </div>
    </header>
  );
};

export default Navbar;
