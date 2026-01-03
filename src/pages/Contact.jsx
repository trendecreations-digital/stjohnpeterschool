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
                        <p><strong>📞 Phone:</strong> +91 8778837765, 8760130057, 0452-2673095</p>
                        <p><strong>✉️ Email:</strong> johnpetermatric@gmail.com</p>
                    </div>

                    {/* Google Map Embed */}
                    <div className="rounded-xl overflow-hidden shadow-lg border">
                        <iframe
                            title="St John Peter Matriculation School Location"
                            src="https://share.google/z8Ex2bMbS7znllmpl"
                            width="100%"
                            height="450"
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
