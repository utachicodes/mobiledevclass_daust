import React from "react";

export default function Contact() {
  return (
    <main>
      <div className="relative bg-brand-navy">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-40"
            src="http://static.photos/fashion/1200x630/31"
            alt="Contact banner"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-6 text-xl text-brand-cream max-w-3xl">
            We’re here to help — reach out with questions, returns, or collaborations.
          </p>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We’ll get back to you soon.");
            }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-brand-navy">First name</label>
                <input className="mt-1 w-full border rounded-md px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-navy">Last name</label>
                <input className="mt-1 w-full border rounded-md px-3 py-2" required />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-brand-navy">Email</label>
              <input type="email" className="mt-1 w-full border rounded-md px-3 py-2" required />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-brand-navy">Message</label>
              <textarea rows="5" className="mt-1 w-full border rounded-md px-3 py-2" required />
            </div>
            <button className="mt-6 bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded">
              Send
            </button>
          </form>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-brand-navy">Customer Support</h3>
            <p className="text-gray-600 mt-2">
              Email: support@lifeatdaust.com<br />
              Phone: +221 (33) 123-4567
            </p>
            <h3 className="text-lg font-semibold text-brand-navy mt-6">Campus Office</h3>
            <p className="text-gray-600 mt-2">
              DAUST Campus, Ngaparou<br />
              Dakar, Senegal
            </p>
            <h3 className="text-lg font-semibold text-brand-navy mt-6">Hours</h3>
            <p className="text-gray-600 mt-2">Mon–Fri: 9:00–18:00</p>
          </div>
        </div>
      </section>
    </main>
  );
}