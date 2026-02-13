// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Hero({
  title,
  subtitle,
  cta,        // string for the button label (optional)
  to = "/",   // route for the CTA (optional)
  image,      // background image url
  align = "left", // "left" | "center"
}) {
  const alignMap = {
    left: "items-start text-left",
    center: "items-center text-center",
  };

  return (
    <section className="relative bg-brand-navy">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        {image && (
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
            decoding="async"
          />
        )}
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className={`flex flex-col gap-6 ${alignMap[align]}`}>
          {title && (
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-navy hover:text-brand-orange transition-colors">
              {title}
            </h1>
          )}

          {subtitle && (
            <p className="text-lg sm:text-xl text-brand-navy hover:text-brand-orange transition-colors max-w-3xl">
              {subtitle}
            </p>
          )}

          {cta && (
            <div className={align === "center" ? "mx-auto" : ""}>
              <Link
                to={to}
                className="inline-block bg-brand-orange hover:bg-orange-600 text-white font-medium rounded-md px-8 py-3 transition-colors"
              >
                {cta}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}