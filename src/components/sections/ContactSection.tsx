import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Clock, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    business: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_jm3dngg', // Replace with your EmailJS Service ID
      'service_jm3dngg', // Replace with your EmailJS Template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        business: formData.business,
      },
      'fRcEpWKk5u8KmRKoM' // Replace with your EmailJS Public Key
    ).then(
      () => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '', business: '' });
      },
      (error) => {
        console.error(error);
        alert('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative">
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden z-0">
        <div className="absolute w-full h-full bg-indigo-900/10 bg-[url('data:image/svg+xml;base64,...')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Your Business Online</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your online presence? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">Get Your Free Mockup</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="+44 123 456 7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-gray-300 mb-2">Business Name</label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your Business"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Tell us about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="What are your goals for this project? Do you have an existing website?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Submit Request
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Box */}
          <div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email Us</h4>
                    <a href="mailto:ibraheemshariff@hotmail.co.uk" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                      ibraheemshariff@hotmail.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Call Us</h4>
                    <a href="tel:+447482097135" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                      +44 7482 097 135
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <Clock className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Response Time</h4>
                    <p className="text-gray-300">
                      We respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-10 border-t border-gray-800">
                <h4 className="text-white font-medium mb-4">Our Process</h4>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <span className="text-gray-300">Submit your inquiry</span>
                  </li>
                  <li className="flex">
                    <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <span className="text-gray-300">Initial consultation call</span>
                  </li>
                  <li className="flex">
                    <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <span className="text-gray-300">Receive your free mockup</span>
                  </li>
                  <li className="flex">
                    <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <span className="text-gray-300">Project kickoff</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;