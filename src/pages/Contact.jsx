import React, { useState } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";
import Button from "../components/ui/Button";

function ContactForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setSuccess(true);
    setForm({ firstName: "", lastName: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700">
          <CheckCircle size={20} />
          <span className="text-sm font-medium">Thanks! We'll get back to you soon.</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-brand-navy">First name</label>
          <input
            className={`mt-1 w-full border rounded-md px-3 py-2 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy">Last name</label>
          <input
            className={`mt-1 w-full border rounded-md px-3 py-2 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-brand-navy">Email</label>
        <input
          type="email"
          className={`mt-1 w-full border rounded-md px-3 py-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-brand-navy">Message</label>
        <textarea
          rows="5"
          className={`mt-1 w-full border rounded-md px-3 py-2 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        loading={loading}
        className="mt-6"
      >
        Send Message
      </Button>
    </form>
  );
}

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
          <ContactForm />

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