import React from "react";

export default function About() {
  return (
    <main>
      <div className="relative bg-brand-navy">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-40"
            src="http://static.photos/fashion/1200x630/35"
            alt="About Life at DAUST"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">About Us</h1>
          <p className="mt-6 text-xl text-brand-cream max-w-3xl">
            Life at DAUST blends campus culture, fashion, and community together.
          </p>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <p className="text-gray-700 text-lg" data-aos="fade-up">
          Our collections celebrate academic excellence, creativity, and unity. We make
          apparel that DAUST students and alumni are proud to wear.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8" data-aos="fade-up">
          {[
            { title: "Quality", text: "Premium fabrics, reinforced seams, long-lasting color." },
            { title: "Design", text: "Campus-inspired styles, versatile fits, seasonless palettes." },
            { title: "Community", text: "A portion of sales supports DAUST events and initiatives." },
          ].map((b) => (
            <div key={b.title} className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-brand-navy">{b.title}</h3>
              <p className="text-gray-600 mt-2">{b.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}