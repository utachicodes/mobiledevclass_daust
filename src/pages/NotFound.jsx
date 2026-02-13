import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-5xl font-extrabold text-brand-navy">404</h1>
      <p className="mt-4 text-gray-600">The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="mt-8 inline-block bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded"
      >
        Go Home
      </Link>
    </main>
  );
}