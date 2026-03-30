import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Clock, Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <div className="pt-28 pb-32 bg-atelier-bg">
      {/* Header */}
      <div className="text-center px-6 mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-[#8B7355] mb-4 block"
        >
          Get in Touch
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-[#3D2B1F]"
        >
          Visit the Sanctuary
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-[#C9B99A] mx-auto mt-6"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#5C3D2E] flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-[#F5F0E8]" />
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-widest text-[#8B7355] mb-2">Location</h4>
                <p className="text-lg font-serif text-[#3D2B1F]">124 Artistry Lane, <br />Chelsea, New York 10011</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#5C3D2E] flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-[#F5F0E8]" />
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-widest text-[#8B7355] mb-2">Hours</h4>
                <p className="text-sm text-[#3D2B1F]">Mon — Fri: 06:00 - 21:00</p>
                <p className="text-sm text-[#3D2B1F]">Sat — Sun: 08:00 - 18:00</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#5C3D2E] flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-[#F5F0E8]" />
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-widest text-[#8B7355] mb-2">Email</h4>
                <p className="text-sm text-[#3D2B1F]">hello@avea-wellness.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#5C3D2E] flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-[#F5F0E8]" />
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-widest text-[#8B7355] mb-2">Phone</h4>
                <p className="text-sm text-[#3D2B1F]">+1 (212) 555-0198</p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-12 aspect-video bg-[#E8E0D4] overflow-hidden border border-[#C9B99A]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3!2d-74.0!3d40.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzI0LjAiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1"
              className="w-full h-full border-0 grayscale opacity-70"
              allowFullScreen
              loading="lazy"
              title="Avéa Location"
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white p-8 md:p-12 shadow-sm border border-[#C9B99A]/10"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Send size={24} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-serif text-[#3D2B1F] mb-2">Message Sent</h3>
              <p className="text-sm text-[#8B7355]">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-2 block">First Name</label>
                  <input 
                    id="firstName"
                    type="text" 
                    value={formState.firstName}
                    onChange={(e) => setFormState(p => ({ ...p, firstName: e.target.value }))}
                    required
                    className="w-full bg-atelier-bg border border-[#C9B99A]/10 p-3 text-sm focus:outline-none focus:border-[#8B7355] transition-colors" 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-2 block">Last Name</label>
                  <input 
                    id="lastName"
                    type="text" 
                    value={formState.lastName}
                    onChange={(e) => setFormState(p => ({ ...p, lastName: e.target.value }))}
                    required
                    className="w-full bg-atelier-bg border border-[#C9B99A]/10 p-3 text-sm focus:outline-none focus:border-[#8B7355] transition-colors" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contactEmail" className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-2 block">Email Address</label>
                <input 
                  id="contactEmail"
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState(p => ({ ...p, email: e.target.value }))}
                  required
                  className="w-full bg-atelier-bg border border-[#C9B99A]/10 p-3 text-sm focus:outline-none focus:border-[#8B7355] transition-colors" 
                />
              </div>
              <div>
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-2 block">Message</label>
                <textarea 
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState(p => ({ ...p, message: e.target.value }))}
                  required
                  className="w-full bg-atelier-bg border border-[#C9B99A]/10 p-3 text-sm focus:outline-none focus:border-[#8B7355] transition-colors min-h-[120px] resize-none" 
                />
              </div>
              <button 
                type="submit"
                className="btn w-full gap-2"
              >
                <Send size={14} /> Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
