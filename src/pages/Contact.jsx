import React, { useState } from "react";
import ContactForm from "../components/ContactForm.jsx";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
        } else {
            setErrors(validationErrors);
            setSubmitted(false);
        }
    };

    return (
        <section className="min-h-screen bg-school-secondary py-12 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
                {/* Contact Info & Map */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-red-800 mb-2">
                        Get in Touch
                    </h2>
                    <p className="text-gray-800 leading-relaxed">
                        We’d love to hear from you! Whether you have questions about
                        admissions, academics, or events — feel free to reach out. Our team
                        will respond promptly.
                    </p>

                    <div className="space-y-3 text-gray-800">
                        <p><strong>📍 Address:</strong> Jeevanagar 2nd St, Rathinapuram, Madurai, Tamil Nadu 625011</p>
                        <p><strong>📞 Phone:</strong> +91 12345 67890</p>
                        <p><strong>✉️ Email:</strong> info@school.edu.in</p>
                    </div>

                    {/* Google Map Embed */}
                    <div className="rounded-xl overflow-hidden shadow-lg border">
                        <iframe
                            title="St John Peter Matriculation School Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8148985446184!2d78.1033146154696!3d9.901936883870022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf8604cc8e67%3A0x6cda2629a67e6dde!2sSt.John%20Peter%20Matriculation%20School!5e0!3m2!1sen!2sin!4v1704378600000!5m2!1sen!2sin"
                            className="w-full h-[450px]"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                {/* Contact Form */}
                <ContactForm/>
            </div>
        </section>
    );
}
