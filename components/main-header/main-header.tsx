"use client";

import Image from "next/image";
import { useState } from "react";

const MainHeader: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <div className="md:col-span-1 md:flex md:justify-end">
      <nav className="text-right">
        <div className="flex justify-between items-center">
          <h1 className="font-bold uppercase p-4 border-b border-gray-100">
            <a href="/" className="hover:text-gray-700">
              Food Ninja
            </a>
          </h1>

          <div className="px-4 cursor-pointer md:hidden" onClick={toggleMenu}>
            <Image
              src="/burger.svg"
              alt="Burger Menu Icon"
              width={24}
              height={24}
              priority
            />
          </div>
        </div>
        <ul className="text-sm mt-6 hidden md:block">
          <li className="text-gray-700 font-bold py-1">
            <a
              href="#"
              className="px-4 flex justify-end border-r-4 border-primary"
            >
              <span>Home</span>
              <Image
                src="/home.svg"
                alt="Home Icon"
                width={20}
                height={20}
                className="ml-2"
                priority
              />
            </a>
          </li>
          <li className="py-1">
            <a
              href="#"
              className="px-4 flex justify-end border-r-4 border-white"
            >
              <span>About</span>
              <Image
                src="/about.svg"
                alt="About Icon"
                width={20}
                height={20}
                className="ml-2"
                priority
              />
            </a>
          </li>
          <li className="py-1">
            <a
              href="#"
              className="px-4 flex justify-end border-r-4 border-white"
            >
              <span>Contact</span>
              <Image
                src="/contact.svg"
                alt="Contact Icon"
                width={20}
                height={20}
                className="ml-2"
                priority
              />
            </a>
          </li>
        </ul>
        {showMenu && (
          <ul className="text-sm mt-6">
            <li className="text-gray-700 font-bold py-1">
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-primary"
              >
                <span>Home</span>
                <Image
                  src="/home.svg"
                  alt="Home Icon"
                  width={20}
                  height={20}
                  className="ml-2"
                  priority
                />
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-white"
              >
                <span>About</span>
                <Image
                  src="/about.svg"
                  alt="About Icon"
                  width={20}
                  height={20}
                  className="ml-2"
                  priority
                />
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-white"
              >
                <span>Contact</span>
                <Image
                  src="/contact.svg"
                  alt="Contact Icon"
                  width={20}
                  height={20}
                  className="ml-2"
                  priority
                />
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default MainHeader;
