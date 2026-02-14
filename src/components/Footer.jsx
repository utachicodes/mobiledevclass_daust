import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Life at DAUST" className="h-9 w-9" />
              <h3 className="text-lg font-bold">LIFE AT DAUST</h3>
            </div>
            <p className="text-white/80 text-sm">
              Apparel & essentials inspired by campus life and community.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white/70 hover:text-brand-orange"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-white/70 hover:text-brand-orange"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-white/70 hover:text-brand-orange"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-white/70 hover:text-brand-orange">All Products</Link></li>
              <li><Link to="/collections/summer" className="text-white/70 hover:text-brand-orange">New Arrivals</Link></li>
              <li><Link to="/collections/limited" className="text-white/70 hover:text-brand-orange">Best Sellers</Link></li>
              <li><a href="#" className="text-white/70 hover:text-brand-orange">Sale</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/70 hover:text-brand-orange">About Us</Link></li>
              <li><a href="#" className="text-white/70 hover:text-brand-orange">Sustainability</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-orange">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-orange">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-white/70 hover:text-brand-orange">Contact Us</Link></li>
              <li><a href="#" className="text-white/70 hover:text-brand-orange">FAQs</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-orange">Shipping & Returns</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-orange">Size Guide</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">&copy; 2025 Life at DAUST. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-white/70 hover:text-brand-orange text-sm">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-brand-orange text-sm">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-brand-orange text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}