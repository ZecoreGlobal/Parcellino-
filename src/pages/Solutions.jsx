import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Globe, Zap, Leaf, ChevronDown, X, CheckCircle2, Calendar } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';
import Magnetic from '../components/Magnetic';
import CTASection from '../components/CTASection';

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const tradeLeaders = ["HYDRUX", "DIRTS", "VELOCITI", "ORBITA", "KRONOS"];
  
  const solutions = [
    {
      id: "01",
      title: "E-Commerce Fulfillment",
      desc: "Seamlessly scale your D2C brand with high-volume, precision-driven order processing. From pick & pack to last-mile — we architect speed.",
      details: {
        insight: "Our warehouse automation reduces pick-error rates to less than 0.01%, ensuring your customers receive exactly what they ordered, every time.",
        features: ["Real-time Inventory Sync", "Same-day Dispatch (14:00 cutoff)", "Custom Brand Packaging", "Fragile Item Specialists"]
      }
    },
    {
      id: "02",
      title: "Luxury Goods Handling",
      desc: "White-glove treatment with enhanced security, premium unboxing experiences, and meticulous care for your most valuable inventory.",
      details: {
        insight: "Luxury requires a different standard of care. We treat every parcel as a masterpiece, with dedicated white-glove inspection zones.",
        features: ["Enhanced Security Vaults", "Climate Controlled Storage", "Premium Tissue & Wax Seal handling", "Serial Number Tracking"]
      }
    },
    {
      id: "03",
      title: "Medical & High-Value",
      desc: "Temperature-controlled environments and strict compliance protocols for sensitive inventories that demand zero-tolerance accuracy.",
      details: {
        insight: "Precision is non-negotiable in medical logistics. Our facility meets the highest Swiss standards for pharmaceutical storage.",
        features: ["GDP Compliant Handling", "Cold Chain Logistics", "Batch & Expiry Management", "Sterile Environment Options"]
      }
    },
    {
      id: "04",
      title: "Returns Management",
      desc: "Automated quality checks and rapid restocking to protect your bottom line. Turn returns into retained revenue and renewed trust.",
      details: {
        insight: "Returns are the second point of customer contact. We process returns in under 24 hours to ensure rapid restocking or liquidation.",
        features: ["Photo-Verified Inspections", "Quality Grading System", "Rapid Customer Refunds", "Regional Consolidation"]
      }
    },
    {
      id: "05",
      title: "Customs Clearance",
      desc: "Frictionless cross-border shipping with fully managed Swiss and EU customs handling. We eliminate the complexity so you can focus on growth.",
      details: {
        insight: "Cross-border trade shouldn't be a bottleneck. Our in-house customs experts ensure 100% compliance with EU and Swiss regulations.",
        features: ["IOSS & OSS Management", "HS Code Classification", "Duty & Tax Calculation", "Frictionless EU-Swiss corridor"]
      }
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white border-b border-swiss-dark/5">
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-swiss-red font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block"
          >
            Solutions Architecture
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-swiss-dark leading-tight mb-6 max-w-3xl"
          >
            Tailored Logistics for<br />
            Global Ambition.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-swiss-dark/60 max-w-xl leading-relaxed"
          >
            Swiss-engineered precision for industries that demand perfection.
          </motion.p>
        </div>
      </section>

      {/* Trade Leaders Section */}
      <section className="py-12 bg-swiss-light-grey border-b border-swiss-dark/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-bold text-swiss-dark/40 uppercase tracking-widest mb-8 text-center md:text-left">
            Powering Global Trade Leaders
          </p>
          <div className="relative flex overflow-hidden">
            <motion.div 
              animate={{ x: [0, -1035] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex whitespace-nowrap gap-20 items-center opacity-40 grayscale pr-20"
            >
              {[...tradeLeaders, ...tradeLeaders, ...tradeLeaders].map((leader, i) => (
                <span key={i} className="text-xl md:text-2xl font-black tracking-tighter">
                  {leader}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedSolution(item)}
                className="p-10 border border-swiss-dark/5 bg-swiss-light-grey/50 group hover:bg-white hover:shadow-2xl hover:shadow-swiss-dark/10 transition-all duration-500 rounded-sm cursor-pointer"
              >
                <span className="text-4xl font-bold text-swiss-red/10 group-hover:text-swiss-red/20 transition-colors block mb-6">
                  {item.id}
                </span>
                <h3 className="text-2xl font-bold text-swiss-dark mb-4">{item.title}</h3>
                <p className="text-swiss-dark/60 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSolution(item);
                  }}
                  className="flex items-center gap-2 text-[10px] font-bold text-swiss-red uppercase tracking-widest group-hover:gap-4 transition-all"
                >
                  Explore this solution <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolution(null)}
              className="absolute inset-0 bg-swiss-dark/90" // Dark background
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white p-8 md:p-12 rounded-sm shadow-2xl overflow-hidden z-10"
            >
              <button 
                onClick={() => setSelectedSolution(null)}
                className="absolute top-6 right-6 text-swiss-dark/40 hover:text-swiss-red transition-colors"
              >
                <X size={24} />
              </button>
              
              <span className="text-swiss-red font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
                Deep Architecture — {selectedSolution.id}
              </span>
              <h2 className="text-4xl font-bold text-swiss-dark mb-8">{selectedSolution.title}</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-swiss-dark/40 uppercase tracking-widest mb-4">Expert Insight</h4>
                  <p className="text-swiss-dark/70 italic leading-relaxed">
                    "{selectedSolution.details.insight}"
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold text-swiss-dark/40 uppercase tracking-widest mb-6">Core Capabilities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedSolution.details.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-swiss-red flex-shrink-0" />
                        <span className="text-sm text-swiss-dark/80 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-swiss-dark/5 flex flex-col md:flex-row gap-6 items-center justify-between">
                <p className="text-xs text-swiss-dark/40">Ready to discuss this architecture for your brand?</p>
                <Magnetic>
                  <a 
                    href="https://calendly.com/parcellino-swiss" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-swiss-red text-white px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-swiss-dark transition-colors inline-block"
                  >
                    Schedule Technical Brief
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* The Parcellino Advantage */}
      <section className="py-24 bg-swiss-dark text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-swiss-red font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
                Solutions Architecture
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">The Parcellino Advantage</h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-swiss-red flex-shrink-0 flex items-center justify-center rounded-sm">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Swiss Precision</h4>
                    <p className="text-white/50 text-sm">99.9% fulfillment accuracy across all sectors.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-swiss-red flex-shrink-0 flex items-center justify-center rounded-sm">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Global Reach</h4>
                    <p className="text-white/50 text-sm">Direct lanes to Switzerland, EU, and beyond.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-sm">
              <Leaf className="text-swiss-red mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-6">Eco-Friendly / Swiss Made</h3>
              <p className="text-white/60 mb-8 leading-relaxed italic">
                "Sustainable Packaging & Carbon-Balanced Logistics"
              </p>
              <p className="text-sm text-white/40 leading-relaxed mb-8">
                We engineer customized, eco-friendly unboxing experiences that align with your brand values while mitigating environmental impact through optimized shipping routes and climate-neutral partners.
              </p>
              <div className="h-px bg-white/10 mb-8" />
              <button 
                onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-swiss-red font-bold uppercase tracking-widest text-[10px] flex items-center gap-3 hover:gap-5 transition-all"
              >
                Request Strategy <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-swiss-light-grey">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-swiss-red font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block text-center">
            Common Inquiries
          </span>
          <h2 className="text-4xl font-bold text-swiss-dark mb-16 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                q: "What is your typical turnaround for e-commerce integration?",
                a: "Most major platforms (Shopify, WooCommerce, Amazon) can be integrated within 24-48 hours. Our technical team provides end-to-end support for custom API setups."
              },
              {
                q: "Do you handle cross-border customs documentation?",
                a: "Yes. We manage all Swiss and EU customs handling, ensuring your shipments move across borders without friction or unexpected delays."
              },
              {
                q: "Can you manage luxury goods with high security requirements?",
                a: "Absolutely. We have dedicated secure zones for high-value inventory and provide white-glove unboxing experiences tailored for luxury brands."
              },
              {
                q: "How does your returns management process work?",
                a: "Our automated returns portal allows customers to initiate returns easily. Once received, we perform rapid quality checks and restock or process according to your brand's specific protocols."
              }
            ].map((faq, i) => (
              <motion.details
                key={i}
                className="group border border-swiss-dark/5 bg-white rounded-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-swiss-dark">{faq.q}</span>
                  <span className="text-swiss-red group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-swiss-dark/60 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Solutions;
