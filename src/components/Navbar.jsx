import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag, User, Search, ChevronDown } from "react-feather";
import { useCart } from "../context/CartContext.jsx";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { count } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navClasses =
    "px-3 py-2 rounded-md text-sm font-medium hover:text-brand-orange transition";

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Life at DAUST" className="h-8 w-auto" />
              <span className="font-bold text-lg text-brand-navy">Life at DAUST</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <NavLink to="/shop" className={navClasses}>
              Shop
            </NavLink>

            {/* Collections dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-brand-orange transition">
                Collections <ChevronDown size={16} />
              </button>
              <div className="absolute hidden group-hover:block mt-2 w-48 bg-white rounded shadow-lg">
                <Link
                  to="/collections/summer"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Summer Collection
                </Link>
                <Link
                  to="/collections/winter"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Winter Essentials
                </Link>
                <Link
                  to="/collections/limited"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Limited Edition
                </Link>
              </div>
            </div>

            <NavLink to="/about" className={navClasses}>
              About
            </NavLink>
            <NavLink to="/contact" className={navClasses}>
              Contact
            </NavLink>
          </div>

          {/* Right side icons */}
          <div className="hidden sm:flex sm:items-center gap-4">
            <button className="text-gray-600 hover:text-brand-orange">
              <Search size={20} />
            </button>
            <button className="text-gray-600 hover:text-brand-orange">
              <User size={20} />
            </button>
            <Link to="/cart" className="relative text-gray-600 hover:text-brand-orange">
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-600 hover:text-brand-orange"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <div className="space-y-1 px-4 pt-2 pb-3">
            <NavLink to="/shop" className={navClasses} onClick={() => setMobileOpen(false)}>
              Shop
            </NavLink>
            <NavLink
              to="/collections/summer"
              className={navClasses}
              onClick={() => setMobileOpen(false)}
            >
              Summer Collection
            </NavLink>
            <NavLink
              to="/collections/winter"
              className={navClasses}
              onClick={() => setMobileOpen(false)}
            >
              Winter Essentials
            </NavLink>
            <NavLink
              to="/collections/limited"
              className={navClasses}
              onClick={() => setMobileOpen(false)}
            >
              Limited Edition
            </NavLink>
            <NavLink to="/about" className={navClasses} onClick={() => setMobileOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className={navClasses} onClick={() => setMobileOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}