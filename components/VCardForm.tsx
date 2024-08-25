"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import VCardDisplay from "./VCardDisplay";

interface ContactData {
  name: string;
  phone: string;
  email: string;
  company: string;
  title: string;
}

export default function VCardForm() {
  const [contact, setContact] = useState<ContactData | null>(null);
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    phone: "",
    email: "",
    company: "",
    title: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContact(formData);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800 p-6 rounded-lg">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-white">
          Enter Contact Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full p-2 bg-lime-400 text-gray-900 rounded font-bold hover:bg-lime-500 transition-colors"
          >
            Generate vCard
          </button>
        </form>
      </div>
      {contact && (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">
            Generated vCard
          </h2>
          <VCardDisplay contact={contact} />
        </div>
      )}
    </div>
  );
}
