import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Newsletter from "../components/Newsletter.jsx";
import { COLLECTIONS } from "../data/collections.js";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero
        title="Life at DAUST"
        subtitle="Explore our collections, inspired by campus life and community spirit."
        cta="Shop Now"
        image="http://static.photos/fashion/1200x630/42"
        to="/shop"
      />

      {/* Featured collections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-[var(--text-4xl)] font-black text-brand-navy leading-tight mb-4 tracking-tighter">
              Featured Collections
            </h2>
            <p className="text-gray-500 text-lg">
              Carefully curated pieces that define the modern student experience at DAUST.
            </p>
          </div>
          <Link to="/shop" className="text-brand-orange font-bold uppercase tracking-widest text-sm hover:underline flex items-center gap-2 group">
            All Products
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLLECTIONS.map((c, idx) => (
            <Link
              to={`/collections/${c.slug}`}
              key={c.slug}
              className="group relative rounded-2xl overflow-hidden premium-shadow bg-white"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-black tracking-tight mb-1 group-hover:text-brand-orange transition-colors">
                  {c.title}
                </h3>
                <p className="text-white/70 text-sm font-medium uppercase tracking-widest">
                  Explore styles
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Newsletter />
    </main>
  );
}