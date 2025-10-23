import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import LogOut from "../functions/LogOut";

const Navbar = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="bg-[#00c0de] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="">
              <Link
                to="/"
                className="text-2xl font-bold flex items-center space-x-2"
              >
                <span>Vortex</span>Bid
              </Link>
            </div>

            {/* Middle section with links */}
            <div className="hidden md:flex space-x-6 items-center">
              <Link
                to="/"
                className="hover:text-gray-950 text-base font-medium"
              >
                Home
              </Link>
              {user && (
                <Link
                  to="/dashboard"
                  className="hover:text-gray-950 text-base font-medium"
                >
                  Dashboard
                </Link>
              )}
              {!user && (
                <Link
                  to="/login"
                  className="hover:text-gray-950 text-base font-medium"
                >
                  Login
                </Link>
              )}

              {!user && (
                <Link
                  to="/signup"
                  className="hover:text-gray-950 text-base font-medium"
                >
                  Signup
                </Link>
              )}

              {user && (
                <Link
                  onClick={() => {
                    LogOut();
                    setUser(null);
                  }}
                  className="hover:text-gray-950 text-base font-medium"
                >
                  LogOut
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#000435] p-2 rounded-md text-white hover:bg-yellow-500 focus:outline-none w-8"
              >
                <span className="sr-only">Open main menu</span>
                <FontAwesomeIcon size="lg" icon={!isOpen ? faBars : faXmark} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "max-h-50" : "max-h-0"
          } md:hidden absolute w-full overflow-hidden transition-max-height duration-500`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#000435]">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-yellow-500"
            >
              Home
            </Link>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-yellow-500"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-yellow-500"
            >
              Signup
            </Link>
            <Link
              to="/auctions"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-yellow-500"
            >
              To Auctions
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
