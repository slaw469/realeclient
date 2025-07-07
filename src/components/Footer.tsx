import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'buying',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="buying">I'm interested in buying a home</option>
                <option value="selling">I'm interested in selling a home</option>
                <option value="both">I'm interested in both buying and selling</option>
                <option value="investment">I'm interested in investment properties</option>
              </select>
              
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                SEND US A MESSAGE
              </button>
            </form>
          </div>

          {/* Company Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">The Perry Group</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>123 Main Street, Salt Lake City, UT 84101</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>(801) 555-0123</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>connor@theperrygroup.com</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a>
                <a href="#listings" className="text-gray-400 hover:text-purple-400 transition-colors">Listings</a>
                <a href="#buying" className="text-gray-400 hover:text-purple-400 transition-colors">Buying</a>
                <a href="#selling" className="text-gray-400 hover:text-purple-400 transition-colors">Selling</a>
                <a href="#financing" className="text-gray-400 hover:text-purple-400 transition-colors">Financing</a>
                <a href="#value" className="text-gray-400 hover:text-purple-400 transition-colors">Home Value</a>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">Who We Are</a>
                <a href="#connect" className="text-gray-400 hover:text-purple-400 transition-colors">Connect</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Brokerage Info */}
            <div className="text-sm text-gray-400">
              <p className="mb-2">The Perry Group</p>
              <p className="mb-2">Licensed in Utah</p>
              <p>Utah Division of Real Estate | Equal Housing Opportunity</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 The Perry Group. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#admin" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Admin Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;