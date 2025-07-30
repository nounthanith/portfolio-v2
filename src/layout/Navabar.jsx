import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShinyText from "../ui/ShinyText";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(window.location.pathname === "/");
  }, []);

  const navItems = [
    { name: "Home", path: "#hero", isInternal: true },
    { name: "About", path: "#about", isInternal: true },
    { name: "Contact", path: "/contact", isInternal: false },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleInternalLink = (path) => {
    setMobileMenuOpen(false);

    if (isHomePage) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = `/${path}`;
    }
  };

  return (
    <nav className="backdrop-blur-md text-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/#hero"
              className="flex items-center"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <ShinyText
                text="NuonThanith"
                disabled={false}
                speed={2}
                className="text-2xl font-bold hover:text-indigo-300 transition-colors duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) =>
              item.isInternal ? (
                <button
                  key={item.name}
                  onClick={() => handleInternalLink(item.path)}
                  className="px-3 py-2 text-sm font-medium hover:text-indigo-300 transition-colors duration-300"
                >
                  <ShinyText
                    text={item.name}
                    disabled={false}
                    speed={2}
                    className="text-lg hover:text-indigo-300 transition-colors duration-300 hover:underline"
                  />
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-3 py-2 text-sm font-medium hover:text-indigo-300 transition-colors duration-300"
                >
                  <ShinyText
                    text={item.name}
                    disabled={false}
                    speed={2}
                    className="text-lg hover:text-indigo-300 transition-colors duration-300 hover:underline"
                  />
                </Link>
              )
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md">
          {navItems.map((item) =>
            item.isInternal ? (
              <button
                key={item.name}
                onClick={() => handleInternalLink(item.path)}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:text-indigo-300 transition-colors duration-300"
              >
                <ShinyText text={item.name} disabled={false} speed={1.5} />
              </button>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 text-base font-medium hover:text-indigo-300 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShinyText text={item.name} disabled={false} speed={1.5} />
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
