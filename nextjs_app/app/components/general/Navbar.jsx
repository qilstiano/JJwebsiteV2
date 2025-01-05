'use client';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
        {/* Logo */}
        <a
          href="/"
          className="flex items-center justify-center p-0 -m-1 w-[70px] h-[70px]"
          style={{ display: "inline-block" }}
        >
          <Image
            src="/images/JJlogo.svg"
            alt="Jalan Journey"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </a>

        {/* Menu and Dropdown */}
        <div className="absolute pl-14 order-1 flex items-center">
          <div
            className="cursor-pointer hover:bold"
            onClick={toggleDropdown}
          >
            &#9776; Menu
          </div>
          {dropdownOpen && (
            <div className="absolute top-[3.5rem] left-[4.5rem] bg-gray-800 bg-opacity-80 text-white rounded shadow-lg z-10">
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
          )}
        </div>

        {/* Links centered according to viewport */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <a href="/institutions" className="hover:underline text-sm px-">
            Institutions
          </a>
          <a href="/organisations" className="hover:underline text-sm">
            Organisations
          </a>
          <a href="/individuals" className="hover:underline text-sm">
            Individuals
          </a>
        </div>

      </nav>

      {/* Decorative Vine */}
      <div className="absolute bottom-[-16px] mt-[21rem] w-full flex justify-center z-40">
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
