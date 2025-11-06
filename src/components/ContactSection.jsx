import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageContent = `
Name: ${formData.name}
Email: ${formData.email}

💬 Message:
${formData.message}
    `;

    console.log("Sending contact form:", {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      formatted: messageContent,
    });

    emailjs
      .send(
        "service_yhjh0yt", // 🔹 your EmailJS service ID
        "template_e42qj4k", // 🔹 your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: messageContent,
        },
        "C2I28fYoOv0B9BlV1" // 🔹 your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success(" Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error(` Failed to send: ${error.text || "Please try again."}`);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section
      className="py-24 px-4 relative bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Get In <span className="text-[#6859ba]">Touch</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-[#6859ba]/10">
                  <Mail className="h-6 w-6 text-[#6859ba]" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    Email
                  </h4>
                  <a
                    href="mailto:emmanueladesemoye@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#6859ba] transition-colors"
                  >
                    emmanueladesemoye@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-[#6859ba]/10">
                  <Phone className="h-6 w-6 text-[#6859ba]" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    Phone
                  </h4>
                  <a
                    href="tel:+2348027415876"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#6859ba] transition-colors"
                  >
                    +234 802 741 5878
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-[#6859ba]/10">
                  <MapPin className="h-6 w-6 text-[#6859ba]" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    Location
                  </h4>
                  <span className="text-gray-600 dark:text-gray-300">
                    Ikoyi, Lagos, Nigeria
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-gray-800 dark:text-white">
                Connect With Me
              </h4>
              <div className="flex space-x-4 justify-center text-gray-600 dark:text-gray-300">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="hover:text-[#6859ba]" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter className="hover:text-[#6859ba]" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Instagram className="hover:text-[#6859ba]" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitch className="hover:text-[#6859ba]" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6859ba]"
                  placeholder="Ernesto Cruz..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6859ba]"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6859ba] resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#6859ba] hover:opacity-80 hover:scale-105 active:scale-95 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
