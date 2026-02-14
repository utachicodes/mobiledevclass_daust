import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, User, Search, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import logo from "../assets/logo.png";
import { NAV_LINKS } from "../data/navigation.js";

export default function Navbar() {
  const { count } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  const navClasses = ({ isActive }) =>
    `px-4 py-2 text-sm font-bold tracking-tight transition-all duration-300 ${isActive ? "text-brand-orange" : "text-gray-900 hover:text-brand-orange"
    }`;

  return (
    <nav className="glass-morphism h-20 sticky top-0 z-[100] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 interactive-scale">
              <img src={logo} alt="Life at DAUST" className="h-10 w-auto" />
              <span className="font-extrabold text-xl text-brand-navy tracking-tighter">Life at DAUST</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group dropdown">
                  <button className="flex items-center gap-1 text-gray-900 hover:text-brand-orange transition-colors duration-300 px-4 py-2 text-sm font-bold tracking-tight uppercase tracking-widest text-[10px]">
                    {link.name} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="dropdown-menu absolute hidden pt-2 w-56 -left-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-1 duration-200">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink key={link.name} to={link.path} className={navClasses}>
                  <span className="uppercase tracking-widest text-[10px]">{link.name}</span>
                </NavLink>
              )
            )}
          </div>

          {/* Right side icons */}
          <div className="hidden lg:flex items-center gap-2">
            <button className="p-2 text-gray-900 hover:text-brand-orange transition-colors interactive-scale" aria-label="Search">
              <Search size={20} strokeWidth={2.5} />
            </button>
            <button className="p-2 text-gray-900 hover:text-brand-orange transition-colors interactive-scale" aria-label="Account">
              <User size={20} strokeWidth={2.5} />
            </button>
            <Link
              to="/cart"
              className="relative p-2 text-gray-900 hover:text-brand-orange transition-colors interactive-scale"
              aria-label="Cart"
            >
              <ShoppingBag size={20} strokeWidth={2.5} />
              {count > 0 && (
                <span className="absolute top-1 right-1 bg-brand-orange text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm">
                  {count}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile right items */}
          <div className="lg:hidden flex items-center gap-4">
            <Link to="/cart" className="relative text-gray-900 interactive-scale" aria-label="Cart">
              <ShoppingBag size={22} strokeWidth={2.5} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="text-gray-900 p-1"
              aria-label="Open menu"
            >
              <Menu size={28} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[150] transition-opacity duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Side Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-[85%] max-w-sm bg-white z-[200] shadow-2xl transition-transform duration-500 linear-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
          <span className="font-extrabold text-lg text-brand-navy uppercase tracking-tighter">Menu</span>
          <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-900 interactive-scale">
            <X size={24} strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="space-y-4">
              {link.dropdown ? (
                <>
                  <div className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
                    {link.name}
                  </div>
                  <div className="space-y-4 pl-4 border-l-2 border-gray-50">
                    {link.dropdown.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        className="block text-xl font-bold text-gray-900 hover:text-brand-orange transition-colors"
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className="block text-2xl font-black text-gray-900 uppercase tracking-tighter hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>

        <div className="p-8 border-t border-gray-100 bg-gray-50 space-y-4">
          <button className="w-full h-14 bg-brand-navy text-white font-bold rounded-xl flex items-center justify-center gap-3 interactive-scale">
            <User size={20} />
            My Account
          </button>
          <div className="flex gap-4">
            <div className="flex-1 h-14 glass-morphism rounded-xl flex items-center justify-center text-gray-500 text-sm">
              Language: EN
            </div>
            <div className="flex-1 h-14 glass-morphism rounded-xl flex items-center justify-center text-gray-500 text-sm">
              Currency: USD
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}