import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layers, Recycle, Zap, RefreshCcw, ArrowRight } from 'lucide-react';

const BentoGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-swiss-light-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-swiss-dark/40 font-bold tracking-[0.2em] text-[10px] uppercase mb-2 block">
            ENGINEERED EXCELLENCE
          </span>
          <h2 className="text-4xl font-bold text-swiss-dark">
            BENTO BOX OF PRECISION.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
          {/* Large Item 1: E-Com Integration */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate('/solutions')}
            className="md:col-span-2 bg-swiss-grey p-6 md:p-10 flex flex-col justify-between group transition-all border border-swiss-dark/5 cursor-pointer hover:bg-white min-h-[300px]"
          >
            <div>
              <Layers className="text-swiss-red mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">E-Com Integration</h3>
              <p className="text-swiss-dark/60 max-w-sm leading-relaxed mb-6">
                One-click Shopify/Woo/Amazon sync. Our API is built for high-frequency trading standards, ensuring your stock levels are never out of sync.
              </p>
              <button className="flex items-center gap-2 text-[10px] font-bold text-swiss-red uppercase tracking-widest group-hover:gap-4 transition-all">
                Explore Tech <ArrowRight size={14} />
              </button>
            </div>
            <div className="flex gap-4 text-[10px] font-bold text-swiss-dark/40 uppercase tracking-widest mt-4">
              <span>REST API</span>
              <span>WEBHOOKS</span>
              <span>CLOUD SYNC</span>
            </div>
          </motion.div>

          {/* Large Item 2: Sustainable Packaging (Dark) */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate('/solutions')}
            className="bg-swiss-dark p-6 md:p-10 text-white relative overflow-hidden group border border-white/5 cursor-pointer min-h-[300px]"
          >
            <div className="relative z-10 h-full flex flex-col">
              <Recycle className="text-swiss-red mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">Sustainable Packaging</h3>
              <p className="text-white/60 leading-relaxed mb-8">
                The future of eco-conscious delivery. 100% biodegradable materials engineered for structural integrity and premium unboxing experiences.
              </p>
              <button className="flex items-center gap-2 text-[10px] font-bold text-swiss-red uppercase tracking-widest group-hover:gap-4 transition-all mt-auto">
                View Eco-Policy <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* Small Item 1: Rapid Fulfillment */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate('/solutions')}
            className="bg-swiss-grey p-6 md:p-10 border border-swiss-dark/5 cursor-pointer hover:bg-white flex flex-col justify-between group min-h-[250px]"
          >
            <div>
              <Zap className="text-swiss-red mb-6" size={28} />
              <h3 className="text-xl font-bold mb-3">Rapid Fulfillment</h3>
              <p className="text-sm text-swiss-dark/60 leading-relaxed">
                Order-to-shipping in 60 minutes. Picking flows that mimic Swiss timepieces.
              </p>
            </div>
            <ArrowRight size={16} className="text-swiss-red opacity-0 group-hover:opacity-100 transition-all self-end" />
          </motion.div>

          {/* Small Item 2: Returns Management */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate('/solutions')}
            className="bg-swiss-grey p-6 md:p-10 border border-swiss-dark/5 cursor-pointer hover:bg-white flex flex-col justify-between group min-h-[250px]"
          >
            <div>
              <RefreshCcw className="text-swiss-red mb-6" size={28} />
              <h3 className="text-xl font-bold mb-3">Returns Management</h3>
              <p className="text-sm text-swiss-dark/60 leading-relaxed">
                Automated verification and instant restocking for peak efficiency.
              </p>
            </div>
            <ArrowRight size={16} className="text-swiss-red opacity-0 group-hover:opacity-100 transition-all self-end" />
          </motion.div>

          {/* NEW Small Item 3: Image Box (Bottom Right) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative overflow-hidden group border border-swiss-dark/5 min-h-[200px]"
          >
            <img 
              src="/src/assets/logistics_docs.png" 
              alt="Logistics Documents" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
            />
          </motion.div>
          
          {/* Decorative Placeholder for Grid balance if needed, or just let it flow */}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
