import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';
import Counter from './Counter';
import Magnetic from './Magnetic';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToBorders = () => {
    const bordersSection = document.getElementById('borders-section');
    if (bordersSection) {
      bordersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-40 pb-20 md:pt-32 md:pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white z-0" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <span className="text-swiss-red font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-4 block">
            THE SWISS LOGISTICS EDGE
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-swiss-dark leading-[1.1] mb-6">
            PARCELLINO:<br />
            <span className="text-swiss-red">PRECISION</span><br />
            FULFILLMENT.
          </h1>
          <p className="text-base sm:text-lg text-swiss-dark/60 max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
            From the heart of Switzerland to the hands of your global customers. 
            1-second logistics, 5-language integration, and the Swiss standard of reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Magnetic>
              <button 
                onClick={() => navigate('/solutions')}
                className="bg-swiss-red text-white px-8 py-4 font-bold flex items-center gap-3 hover:bg-swiss-red/90 transition-all group w-full sm:w-auto justify-center"
              >
                See our solutions
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </button>
            </Magnetic>
            <Magnetic>
              <button 
                onClick={scrollToBorders}
                className="bg-swiss-grey text-swiss-dark px-8 py-4 font-bold hover:bg-swiss-dark/5 transition-all w-full sm:w-auto justify-center"
              >
                View Network
              </button>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Floating Performance Card */}
          <div className="bg-white p-8 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-swiss-dark/5 relative z-10">
            <div className="flex items-center justify-between mb-10">
              <div className="w-10 h-10 bg-swiss-red flex items-center justify-center rounded-sm text-white">
                <Activity size={20} />
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-swiss-dark/40 block">SYSTEM STATUS</span>
                <span className="text-xs font-bold text-green-500 uppercase tracking-wider">OPTIMIZED</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-5xl font-bold text-swiss-dark tracking-tighter mb-1">
                <Counter value="0.92" decimals={2} suffix="s" />
              </h3>
              <p className="text-[10px] font-bold text-swiss-dark/40 uppercase tracking-widest">PROCESS VELOCITY</p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-swiss-dark/5 pt-8">
              <div>
                <span className="text-[9px] font-bold text-swiss-dark/40 uppercase tracking-widest block mb-1">ACCURACY</span>
                <span className="text-xl font-bold text-swiss-dark">
                  <Counter value="99.99" decimals={2} suffix="%" />
                </span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-swiss-dark/40 uppercase tracking-widest block mb-1">LATENCY</span>
                <span className="text-xl font-bold text-swiss-dark">
                  <Counter value="14" suffix="ms" />
                </span>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-swiss-red/10 z-0" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-swiss-red/5 z-0" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-bold text-swiss-dark/40 uppercase tracking-[0.2em]">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-swiss-red to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
