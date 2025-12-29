import React, { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
    e.preventDefault();

    const phoneNumber = "916384945201";

    const message = `
Hello 👋
New contact form submission:

👤 Name: ${form.name}
📧 Email: ${form.email}
📞 Phone: ${form.phone}
📝 Message: ${form.message}
    `;

    const whatsappUrl =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    // Optional UI feedback
    setSubmitted(true);

    // Reset form
    setForm({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
}


    return (
        <div className="max-w-xl mx-auto bg-red-800 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200 p-8 md:p-10 my-10">
            <h2 className="text-3xl font-semibold text-center text-school-secondary mb-2">
                Contact Us
            </h2>
            <p className="text-center text-gray-50 mb-6">
                We’d love to hear from you! Fill out the form below and our team will
                reach out soon.
            </p>

            {submitted ? (
                <div className="text-green-700 bg-green-50 border border-green-300 rounded-lg p-4 text-center font-medium">
                    ✅ Thank you for contacting us! We’ll get back to you shortly.
                </div>
            ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label
                            className="block text-sm font-semibold text-school-secondary mb-1"
                            htmlFor="name"
                        >
                            Full Name <span className="text-school-secondary">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-school-secondary focus:border-school-secondary outline-none transition"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            className="block text-sm font-semibold text-school-secondary mb-1"
                            htmlFor="email"
                        >
                            Email Address <span className="text-school-secondary">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-school-secondary focus:border-school-secondary outline-none transition"
                            placeholder="example@gmail.com"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label
                            className="block text-sm font-semibold text-school-secondary mb-1"
                            htmlFor="phone"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-school-secondary focus:border-school-secondary outline-none transition"
                            placeholder="+91 98765 43210"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            className="block text-sm font-semibold text-school-secondary mb-1"
                            htmlFor="message"
                        >
                            Message <span className="text-school-secondary">*</span>
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            value={form.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-school-secondary focus:border-school-secondary outline-none transition resize-none"
                            rows={4}
                            placeholder="Write your message..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-school-secondary hover:bg-white text-red-800 font-semibold px-8 py-2.5 rounded-lg shadow-md transition-all hover:shadow-lg active:scale-95"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
