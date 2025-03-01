import React, { useState, useEffect } from "react";
import { headerData } from "@site/src/data";
import { AiOutlineClose } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-[1000] transition-all duration-300 ${
        isScrolled ? "bg-brand-home_bg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between container-custom items-center py-5">
        {/* Desktop Logo */}
        <img
          src={useBaseUrl("/img/Logo.png")}
          alt="Logo"
          className="hidden md:block w-60 xl:w-auto"
        />

        {/* Mobile Logo */}
        <img
          src={useBaseUrl("/img/mobile-logo.png")}
          alt="Logo"
          className="md:hidden w-44"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10">
          {headerData.map((data) => (
            <a
              className="font-matter font-normal text-brand-black-200 hover:text-inherit hover:no-underline text-base xl:text-xl"
              key={data}
              href="#"
            >
              {data}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:inline-block relative group">
          <div className="bg-[#66912D] rounded-md absolute inset-0 translate-y-[2px]"></div>
          <button className="relative px-4 py-2 md:px-7 md:py-3 text-brand-black-100 text-sm lg:text-base font-matter font-medium bg-brand-green-100 rounded-md transition-transform duration-150 -translate-y-1 group-hover:-translate-y-1.5 active:-translate-y-0.5 cursor-pointer border-[1.5px] border-[#66912D] w-full">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose size={24} className="text-brand-black-200" />
          ) : (
            <MdMenu size={24} className="text-brand-black-200" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bg-brand-home_bg z-50 shadow-xl h-screen">
          <div className="container-custom py-6 flex flex-col">
            {/* Navigation Links */}
            <div className="flex flex-col mb-8">
              {headerData.map((data, index) => (
                <a
                  className="font-matter font-medium text-brand-black-200 py-4 border-b border-gray-200 text-lg flex justify-between items-center"
                  key={data}
                  href="#"
                >
                  <span>{data}</span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 11L6.5 6L1.5 1"
                      stroke="#333"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <div className="relative group mt-4">
              <div className="bg-[#66912D] rounded-md absolute inset-0 translate-y-[2px]"></div>
              <button className="relative py-4 text-brand-black-100 text-base font-matter font-medium bg-brand-green-100 rounded-md transition-transform duration-150 -translate-y-1 active:-translate-y-0.5 cursor-pointer border-[1.5px] border-[#66912D] w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
