import { useState } from "react";
import { LoadingOnScreen } from "../LoadingOnScreen";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_6br8jks";
  const TEMPLATE_ID = "template_fdf3kq9";
  const PUBLIC_KEY = "tMI1yc-BBQfpphqS6";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! Something went wrong. Please try again.")
      );
  };

  return (
    <section id="contact" className="py-20">
      <LoadingOnScreen>
        <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>

        <div className="max-w-xl mx-auto p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur shadow-lg">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="p-3 rounded-lg bg-white/10 border border-white/10 focus:border-blue-500 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="p-3 rounded-lg bg-white/10 border border-white/10 focus:border-blue-500 outline-none"
              required
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="p-3 rounded-lg bg-white/10 border border-white/10 focus:border-blue-500 outline-none"
              required
            />

            <button
              type="submit"
              className="py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </LoadingOnScreen>
    </section>
  );
};
