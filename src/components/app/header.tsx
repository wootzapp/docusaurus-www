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
      className={`sticky top-0 z-[1000] backdrop-blur transition-all duration-300 ${
        isScrolled
          ? "bg-brand-base/95 border-b border-brand-border/80"
          : "bg-brand-base/80 border-b border-brand-border/40"
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
          {headerData.map((item) => (
            <a
              className="font-matter text-nav font-bold text-brand-text-muted transition hover:text-brand-text-primary hover:no-underline"
              key={item.label}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:inline-block">
          <a href="https://calendar.app.google.com/UCdRbHAHJYTwUEgF6" className="rounded-full border border-brand-border/60 bg-brand-accent-100 px-4 py-2 text-btn font-matter font-semibold text-brand-base transition hover:-translate-y-0.5 hover:shadow-md hover:text-brand-surface hover:no-underline">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-brand-text-primary focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <MdMenu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 z-50 h-screen bg-brand-base/95 backdrop-blur">
          <div className="container-custom py-6 flex flex-col">
            {/* Navigation Links */}
            <div className="flex flex-col mb-8">
              {headerData.map((item) => (
                <a
                  className="flex items-center justify-between border-b border-brand-border/60 py-4 text-body font-matter font-bold text-brand-text-primary"
                  key={item.label}
                  href={item.href}
                >
                  <span>{item.label}</span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 11L6.5 6L1.5 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <div className="mt-4">
              <a href="https://calendar.app.google.com/UCdRbHAHJYTwUEgF6" className="w-full block text-center rounded-full border border-brand-border/60 bg-brand-accent-100 py-3 text-btn font-matter font-semibold text-brand-base hover:text-brand-surface hover:no-underline">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
