import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const ClassesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'sculpt-flow',
      title: "Sculpt & Flow",
      description: "A dynamic fusion of pilates and yoga designed to lengthen and strengthen your core. Perfect for those seeking to build lean muscle while maintaining flexibility.",
      duration: "60 min",
      level: "All Levels",
      price: 45,
      image: "https://images.unsplash.com/photo-1518611012118-29617b0ccd0a?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'breathwork',
      title: "Breathwork Ritual",
      description: "Immersive guided meditation and pranayama to restore balance to your nervous system. Includes aromatherapy and sound healing elements.",
      duration: "45 min",
      level: "Beginner",
      price: 35,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'artistic-movement',
      title: "Artistic Movement",
      description: "Contemporary dance-inspired sequences that celebrate the expressive power of the body. Build confidence, coordination, and creative self-expression.",
      duration: "75 min",
      level: "Intermediate",
      price: 55,
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'private-session',
      title: "Private Session",
      description: "A one-on-one bespoke session tailored to your unique goals. Our expert practitioners design a personalized wellness journey just for you.",
      duration: "90 min",
      level: "Personalized",
      price: 120,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'sound-bath',
      title: "Crystal Sound Bath",
      description: "Lie back and let waves of crystalline sound wash over you. Tibetan singing bowls, crystal harps, and tuning forks guide you into deep relaxation.",
      duration: "60 min",
      level: "All Levels",
      price: 40,
      image: "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'morning-ritual',
      title: "Morning Ritual",
      description: "Start your day with intention. A sunrise blend of gentle movement, breathwork, and mindfulness to set the tone for your day.",
      duration: "45 min",
      level: "All Levels",
      price: 30,
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-28 pb-32 bg-atelier-bg">
      {/* Header */}
      <div className="text-center px-6 mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-[#8B7355] mb-4 block"
        >
          Movement · Breath · Sound
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-[#3D2B1F]"
        >
          Our Disciplines
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-[#C9B99A] mx-auto mt-6"
        />
      </div>

      {/* Classes Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden mb-6 bg-[#E8E0D4]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B7355] border border-[#C9B99A]/30 px-3 py-1">{service.duration}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B7355] border border-[#C9B99A]/30 px-3 py-1">{service.level}</span>
            </div>
            <h3 className="text-2xl font-serif mb-2 text-[#3D2B1F]">{service.title}</h3>
            <p className="text-sm text-[#8B7355] leading-relaxed mb-4">{service.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-serif text-[#5C3D2E]">${service.price} <span className="text-xs text-[#8B7355]">/ session</span></span>
              <button
                onClick={() => navigate(`/book?class=${service.id}`)}
                className="btn"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Schedule CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-24 px-6"
      >
        <p className="text-[#8B7355] text-sm mb-6 tracking-wide">Can't find the right time?</p>
        <button
          onClick={() => navigate('/contact')}
          className="btn"
        >
          Request a Private Session
        </button>
      </motion.div>
    </div>
  );
};

export default ClassesPage;
