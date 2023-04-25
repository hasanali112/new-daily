import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  NewspaperIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  return (
    <nav className="bg-black flex  justify-between px-12 py-6 sm:max-w-ful">
      <Link to="/" className="inline-flex items-center">
        <NewspaperIcon className="h-6 w-6 text-white" />
        <span className="text-white tracking-wide font-extrabold">
          News Hub
        </span>
      </Link>

      <ul className="text-white hidden lg:flex font-bold space-x-10 pr-20">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-blue-400" : "default")}
        >
          Home
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "text-blue-400" : "default")}
        >
          News
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-blue-400" : "defult")}
        >
          About
        </NavLink>
      </ul>

      {/* {for phone collapseable menubar} */}
      <div className="lg:hidden">
        <button title="open menu" onClick={() => setisMenuOpen(true)}>
          <Bars3BottomRightIcon className="w-5 text-white" />
        </button>
        {isMenuOpen && (
          <div className="absolute  top-0  left-0 w-full z-10">
            <div className="p-5 bg-black border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
                    <NewspaperIcon className="h-6 w-6 text-white" />
                    <span className=" text-white ml-2 text-xl font-bold tracking-wide uppercase">
                      New Hub
                    </span>
                  </Link>
                </div>
                <div>
                  <button
                    title="close menu"
                    onClick={() => setisMenuOpen(false)}
                  >
                    <XMarkIcon className="w-5 text-white" />
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4 text-white">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "text-blue-400" : "default"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/news"
                      className={({ isActive }) =>
                        isActive ? "text-blue-400" : "default"
                      }
                    >
                      News
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "text-blue-400" : "defult"
                      }
                    >
                      About
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
