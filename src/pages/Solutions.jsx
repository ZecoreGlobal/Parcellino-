import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, MapPin, Zap, Leaf, ChevronDown, X, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/hero_bg.webp';
import Magnetic from '../components/Magnetic';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';

const Solutions = () => {
  const { t, tRich } = useLanguage();
  const [selectedSolution, setSelectedSolution] = useState(null);
  
  const solutions = [
    {
      id: "01",
      title: t("E-Com Management"),
      desc: t("We manually handle and process your Shopify, WooCommerce, and Amazon orders with Swiss precision. Perfect for emerging brands looking for error-free execution and personal care without complex setups."),
      details: {
        insight: t("We process orders with absolute white-glove manual precision, ensuring 100% accuracy and customized attention for emerging brands."),
        features: [t("Shopify & WooCommerce Integration"), t("Manual Quality Audit"), t("Personalized Client Dashboard"), t("Zero-Setup Complexities")]
      }
    },
    {
      id: "02",
      title: t("Sustainable Packaging"),
      desc: t("The future of eco-conscious delivery. 100% biodegradable materials engineered for structural integrity and premium unboxing experiences."),
      details: {
        insight: t("Deliver unforgettable premium unboxing moments with high-grade, sustainable materials certified for maximum shipping protection."),
        features: [t("100% Biodegradable Boxes"), t("Carbon-Balanced Operations"), t("Eco-Certified Fillers"), t("Premium Custom Branding")]
      }
    },
    {
      id: "03",
      title: t("Rapid Fulfillment"),
      desc: t("Order-to-shipping in 60 minutes. Meticulous picking flows engineered for maximum efficiency."),
      details: {
        insight: t("Our swift picking processes move with synchronized precision, minimizing transit delays and expediting shipping times."),
        features: [t("60-Minute Picking Window"), t("Express Dispatch Services"), t("High-Priority Scheduling"), t("Zero Pick-Error Tolerance")]
      }
    },
    {
      id: "04",
      title: t("Returns Management"),
      desc: t("Automated verification and instant restocking for peak efficiency."),
      details: {
        insight: t("Ensure immediate product validation and rapid restocking to maintain inventory liquidity and customer satisfaction."),
        features: [t("Instant Return Restocking"), t("Verification & Inspection"), t("Condition Grading Audit"), t("Swift Customer Status Updates")]
      }
    },
    {
      id: "05",
      title: t("Swiss Warehousing"),
      desc: t("Meticulous storage in our single, highly secure Swiss facility. Optimized storage space custom-tailored for early-stage brands."),
      details: {
        insight: t("Your inventory is protected within our single state-of-the-art secure Swiss facility with optimized shelving and strict climate control."),
        features: [t("Single Secure Swiss Facility"), t("High-Security Protocols"), t("Custom Tailored Shelving"), t("Climate-Controlled Space")]
      }
    }
  ];

  return (
    <div className="pt-20 bg-[#F9F9F9] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#F9F9F9] border-b border-swiss-dark/5 transition-colors">
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-cover bg-center transition-opacity"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-swiss-red font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block"
          >
            {t('Solutions Architecture')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-swiss-dark leading-tight mb-6 max-w-3xl transition-colors"
          >
            {t('Tailored Logistics for')}<br />
            {t('Swiss Ambition')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-swiss-dark/70 max-w-2xl leading-relaxed transition-colors italic font-bold"
          >
            {t('We deliver more than products. We provide trust, efficiency and growth.')}
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-[#F9F9F9] transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedSolution(item)}
                className="p-6 sm:p-10 border border-swiss-dark/5 bg-swiss-grey group hover:bg-white hover:shadow-2xl hover:shadow-swiss-dark/10 transition-all duration-500 rounded-sm cursor-pointer"
              >
                <span className="text-4xl font-bold text-swiss-red/10 group-hover:text-swiss-red/20 transition-colors block mb-6">
                  {item.id}
                </span>
                <h3 className="text-2xl font-bold text-swiss-dark mb-4 transition-colors">{item.title}</h3>
                <p className="text-swiss-dark/60 text-sm leading-relaxed mb-8 transition-colors">
                  {item.desc}
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSolution(item);
                  }}
                  className="flex items-center gap-2 text-[10px] font-bold text-swiss-red uppercase tracking-widest group-hover:gap-4 transition-all"
                >
                  {t('Explore this solution')} <ArrowRight size={14} />
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
              className="absolute inset-0 bg-swiss-dark/90"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white p-8 md:p-12 rounded-sm shadow-2xl overflow-hidden z-10 transition-colors"
            >
              <button 
                onClick={() => setSelectedSolution(null)}
                className="absolute top-6 right-6 text-swiss-dark/40 hover:text-swiss-red transition-colors"
              >
                <X size={24} />
              </button>
              
              <span className="text-swiss-red font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
                {t('Deep Architecture — ')}{selectedSolution.id}
              </span>
              <h2 className="text-4xl font-bold text-swiss-dark mb-8 transition-colors">{selectedSolution.title}</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-swiss-dark/40 uppercase tracking-widest mb-4">{t('Expert Insight')}</h4>
                  <p className="text-swiss-dark/70 italic leading-relaxed transition-colors">
                    "{selectedSolution.details.insight}"
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold text-swiss-dark/40 uppercase tracking-widest mb-6">{t('Core Capabilities')}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedSolution.details.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-swiss-red flex-shrink-0" />
                        <span className="text-sm text-swiss-dark/80 font-medium transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-swiss-dark/5 flex flex-col md:flex-row gap-6 items-center justify-between transition-colors">
                <p className="text-xs text-swiss-dark/40">{t('Ready to discuss this architecture for your brand?')}</p>
                <Magnetic>
                  <a 
                    href="https://wa.me/4368120806840" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-swiss-red text-white px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-swiss-dark transition-colors inline-block"
                  >
                    {t('Start Fulfillment')}
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* The parcellino Advantage */}
      <section className="py-24 bg-[#F9F9F9] text-swiss-dark border-t border-swiss-dark/5 overflow-hidden relative transition-colors">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-swiss-red font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
                {t('Solutions Architecture')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-swiss-dark">{tRich('The Parcellino Advantage')}</h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-swiss-red flex-shrink-0 flex items-center justify-center rounded-sm text-white">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-swiss-dark">{t('Swiss Precision')}</h4>
                    <p className="text-swiss-dark/60 text-sm">{t('99.9% fulfillment accuracy across all sectors.')}</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-swiss-red flex-shrink-0 flex items-center justify-center rounded-sm text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-swiss-dark">{t('Swiss-wide Coverage')}</h4>
                    <p className="text-swiss-dark/60 text-sm">{t('Direct lanes to all 26 cantons.')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-swiss-grey border border-swiss-dark/5 p-12 rounded-sm shadow-sm hover:bg-white hover:shadow-2xl hover:shadow-swiss-dark/5 transition-all duration-500">
              <Leaf className="text-swiss-red mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-6 text-swiss-dark">{t('Eco-Friendly / Swiss Made')}</h3>
              <p className="text-swiss-dark/70 mb-8 leading-relaxed italic">
                {t('"Sustainable Packaging & Carbon-Balanced Logistics"')}
              </p>
              <p className="text-sm text-swiss-dark/50 leading-relaxed mb-8">
                {t('We engineer customized, eco-friendly unboxing experiences that align with your brand values while mitigating environmental impact through optimized shipping routes and climate-neutral partners.')}
              </p>
              <div className="h-px bg-swiss-dark/5 mb-8" />
              <button 
                onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-swiss-red font-bold uppercase tracking-widest text-[10px] flex items-center gap-3 hover:gap-5 transition-all"
              >
                {t('Start Fulfillment')} <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-swiss-light-grey transition-colors">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-swiss-red font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block text-center">
            {t('Common Inquiries')}
          </span>
          <h2 className="text-4xl font-bold text-swiss-dark mb-16 text-center transition-colors">{t('Frequently Asked Questions')}</h2>
          
          <div className="space-y-4">
            {[
              {
                q: t("What is your typical turnaround for e-commerce integration?"),
                a: t("Most major platforms (Shopify, WooCommerce, Amazon) can be integrated within 24-48 hours. Our technical team provides end-to-end support for custom API setups.")
              },
              {
                q: t("Do you deliver to alpine and remote Swiss regions?"),
                a: t("Yes. We deliver to every single valley and mountain village across all 26 cantons with our specialized Swiss logistics partners, guaranteeing on-time arrival.")
              },
              {
                q: t("Are your packaging materials eco-friendly?"),
                a: t("Yes. We use 100% biodegradable, climate-neutral materials engineered specifically for safe, premium, and sustainable unboxing experiences across Switzerland.")
              },
              {
                q: t("How does your returns management process work?"),
                a: t("Our automated returns portal allows customers to initiate returns easily. Once received, we perform rapid quality checks and restock or process according to your brand's specific protocols.")
              }
            ].map((faq, i) => (
              <motion.details
                key={i}
                className="group border border-swiss-dark/5 bg-white rounded-sm overflow-hidden transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-swiss-dark transition-colors">{faq.q}</span>
                  <span className="text-swiss-red group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-swiss-dark/60 text-sm leading-relaxed transition-colors">
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
