import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import saminaImg from '../assets/samina.png';

const Testimonial = () => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group max-w-md mx-auto lg:max-w-none"
        >
          <div className="absolute -top-4 -left-4 w-full h-full border border-swiss-red/20 z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
          <div className="relative z-10 aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img src={saminaImg} alt="Samina Rehman" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <div className="text-center lg:text-left">
          <span className="text-swiss-red font-bold tracking-[0.2em] text-[10px] uppercase mb-8 block">
            SWISS LEADERSHIP
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium text-swiss-dark leading-[1.2] mb-12 italic"
          >
            "Logistics is the <span className="text-swiss-red font-bold not-italic">heartbeat</span> of your brand. We make sure it never skips a beat."
          </motion.h2>
          
          <div>
            <p className="text-xl font-bold text-swiss-dark">Samina Rehman</p>
            <p className="text-sm text-swiss-dark/40 uppercase tracking-widest font-medium mb-6">Founder & CEO</p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="mailto:Sr@parcellino-swiss.ch" 
                className="flex items-center gap-3 px-6 py-3 bg-white border border-swiss-dark/5 text-swiss-dark hover:border-swiss-red hover:text-swiss-red transition-all group rounded-sm"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">Sr@parcellino-swiss.ch</span>
              </a>
              <a 
                href="tel:+4368120806840" 
                className="flex items-center gap-3 px-6 py-3 bg-white border border-swiss-dark/5 text-swiss-dark hover:border-swiss-red hover:text-swiss-red transition-all group rounded-sm"
              >
                <Phone size={16} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">+43 681 20806840</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
