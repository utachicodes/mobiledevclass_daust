// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";

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
    <section className="relative min-h-[70vh] flex items-center bg-brand-navy overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {image && (
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover opacity-60 scale-105"
            decoding="async"
          />
        )}
        {/* Advanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className={`flex flex-col gap-8 ${alignMap[align]}`}>
          {title && (
            <h1 className="text-[var(--text-5xl)] font-black tracking-tighter text-white max-w-4xl leading-[1.1]">
              {title}
            </h1>
          )}

          {subtitle && (
            <p className="text-[var(--text-xl)] text-brand-cream/80 max-w-2xl font-medium leading-relaxed">
              {subtitle}
            </p>
          )}

          {cta && (
            <div className={align === "center" ? "mx-auto" : ""}>
              <Link to={to}>
                <Button variant="primary" size="lg" className="rounded-full shadow-2xl hover:scale-105">
                  {cta}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Decorative pulse */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] animate-pulse" />
    </section>
  );
}