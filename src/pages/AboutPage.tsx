import React from 'react';
import { motion } from 'motion/react';
import DomeGallery from '../components/DomeGallery';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <section className="py-12 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:w-1/2 text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-[#3D2B1F]"
            >
              At Avéa, we believe wellness is not a routine — it is a refined way of living.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-[#5C3D2E]/80 leading-relaxed font-sans"
            >
              <p>Born from the idea that true balance comes from intentional rituals, Avéa is a space where modern life slows down and self-care becomes meaningful. Every element is thoughtfully curated to create an experience that feels both elevated and deeply personal.</p>
              <p>From calming textures to sensory details, we design moments that help you reconnect with yourself — physically, mentally, and emotionally.</p>
              <p className="font-semibold text-[#3D2B1F] pt-4 text-xl italic font-serif">
                This is not just wellness.<br/>
                This is your space to reset, restore, and realign.
              </p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:w-1/2 w-full h-[400px] md:h-[600px] relative rounded-3xl overflow-hidden"
          >
            <DomeGallery 
              overlayBlurColor="#F5F0E8"
              minRadius={450}
              maxRadius={900}
              fit={1.1}
              grayscale={false}
              autoRotateSpeed={0.08}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
