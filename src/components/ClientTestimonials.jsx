import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const testimonials = [
  {
    brand: "HYDRUX.",
    brandSub: "essence",
    text: "We have been working with Parcellino in IT/logistics for our brand Hydrux for some time now... The cooperation is efficient, reliable, and absolutely professional.",
    author: "Josip Kulis",
    role: "Founder"
  },
  {
    brand: "dirts",
    text: "Parcellino takes over our fulfillment and we at dirts benefit from the fast processing... Parcellino is the perfect partner.",
    author: "Philipp Riederle",
    role: "Founder"
  },
  {
    brand: "AIR LOUNGE®",
    brandSub: "FASHION. LIFESTYLE. TRAVEL.",
    text: "By outsourcing our warehouse and fulfillment, we benefited on our core competencies while being sure this part is handled professionally.",
    author: "Sandro Küttel",
    role: "Founder"
  }
];

const highlightParcellino = (text) => {
  if (!text) return text;
  const parts = text.split(/(parcellino)/i);
  return parts.map((part, index) => 
    part.toLowerCase() === 'parcellino' 
      ? <span key={index} className="text-swiss-red lowercase not-italic font-semibold">parcellino</span> 
      : part
  );
};

const ClientTestimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-swiss-light-grey/50 dark:bg-[#0F0F0F] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-swiss-red font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
            {t('Client Success')}
          </span>
          <h2 className="text-4xl font-bold text-swiss-dark dark:text-white transition-colors">{t('Trusted by Industry Leaders')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-[#141414] p-8 md:p-10 rounded-3xl shadow-sm dark:shadow-none border border-swiss-dark/5 dark:border-white/5 flex flex-col items-center text-center group hover:shadow-xl dark:hover:bg-[#1A1A1A] hover:shadow-swiss-dark/5 transition-all duration-500"
            >
              <div className="mb-8 h-12 flex flex-col items-center justify-center">
                <span className={`font-black tracking-tighter text-2xl transition-colors ${item.brand === 'HYDRUX.' ? 'text-[#E5C9A7]' : 'text-swiss-dark dark:text-white'}`}>
                  {item.brand}
                </span>
                {item.brandSub && (
                  <span className="text-[8px] font-bold text-swiss-dark/30 dark:text-white/30 uppercase tracking-widest -mt-1">
                    {item.brandSub}
                  </span>
                )}
              </div>

              <div className="relative mb-8">
                <Quote size={24} className="text-swiss-red/10 dark:text-swiss-red/5 absolute -top-4 -left-6" />
                <p className="text-swiss-dark/70 dark:text-white/70 text-sm leading-relaxed italic relative z-10 transition-colors">
                  "{highlightParcellino(t(item.text))}"
                </p>
              </div>

              <div className="mt-auto">
                <h4 className="font-bold text-swiss-dark dark:text-white text-base transition-colors">{item.author}</h4>
                <p className="text-[10px] font-bold text-swiss-dark/40 dark:text-white/40 uppercase tracking-widest mt-1">
                  {t(item.role)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
