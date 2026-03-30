import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import CurvedLoop from '../components/CurvedLoop';
import TrueFocus from '../components/TrueFocus';

const Hero = ({ onBook }: { onBook: () => void }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Wellness Ritual Sanctuary"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-atelier-bg/30 via-transparent to-atelier-bg/95"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-[110px] font-serif mb-12 leading-[0.95] tracking-tight text-[#3D2B1F]"
        >
          I build websites that <br /> turn visitors into clients.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 mt-4"
        >
          <button
            onClick={onBook}
            className="btn"
          >
            Explore Rituals
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedIn = () => {
  const text = 'VOGUE        TimeOut        ELLE        BAZAAR        Wallpaper*        AD        ';
  return (
    <div className="bg-atelier-bg border-y border-atelier-accent/10 overflow-hidden opacity-30 hover:opacity-100 transition-opacity duration-500">
      <CurvedLoop 
        marqueeText={text}
        speed={1.5} 
        curveAmount={300}
      />
    </div>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Hero onBook={() => navigate('/book')} />
      <FeaturedIn />

      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            We believe wellness is the ultimate form of self-expression.
          </h2>
          <p className="text-lg text-atelier-text/60 font-sans max-w-2xl mx-auto leading-relaxed">
            Our studio is designed to be a canvas for your personal growth. Through curated movement, sound, and visual artistry, we help you sculpt a life of balance and beauty.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-[#5C3D2E] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 w-full flex justify-center">
            <TrueFocus 
              sentence="Ready to begin?" 
              manualMode={false} 
              blurAmount={5} 
              borderColor="rgba(245, 240, 232, 0.8)" 
              glowColor="rgba(245, 240, 232, 0.4)" 
              className="text-4xl md:text-6xl font-serif"
            />
          </div>
          <button
            onClick={() => navigate('/book')}
            className="btn"
          >
            Book Your First Ritual
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
