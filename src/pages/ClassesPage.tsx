import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';

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
    <div className="pt-24 md:pt-28 pb-20 md:pb-32 bg-atelier-bg overflow-x-hidden">
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
          className="text-4xl md:text-7xl font-serif text-[#3D2B1F]"
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

      {/* Classes Carousel */}
      <div className="w-full">
         <Carousel 
            items={services} 
            baseWidth={380} 
            loop={true} 
            autoplay={false}
         />
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
