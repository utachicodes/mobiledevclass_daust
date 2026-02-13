import React from "react";

export default function Newsletter() {
  return (
    <div className="bg-brand-cream mt-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-brand-navy sm:text-4xl">
              <span className="block">Stay updated</span>
              <span className="block text-brand-orange">
                Subscribe to our newsletter
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Get the latest news, exclusive offers, and style tips delivered
              straight to your inbox.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-brand-orange focus:border-brand-orange sm:max-w-xs border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}