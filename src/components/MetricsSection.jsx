import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';
import { useLanguage } from '../context/LanguageContext';

const MetricsSection = () => {
  const { t } = useLanguage();
  const metrics = [
    { value: "24/7", isNumeric: false, label: t("MISSION-CRITICAL SUPPORT") },
    { value: "99.9", suffix: "%", isNumeric: true, label: t("ORDER ACCURACY RATE"), color: "text-swiss-red" },
    { value: "Swiss-wide", isNumeric: false, label: t("STRATEGIC REACH") }
  ];


  return (
    <section className="py-24 border-b border-swiss-dark/5 dark:border-white/5 bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-24">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <h3 className={`text-5xl md:text-6xl font-bold mb-4 transition-colors ${metric.color || 'text-swiss-dark dark:text-white'}`}>
                {metric.isNumeric ? (
                  <Counter value={metric.value} decimals={1} suffix={metric.suffix} />
                ) : (
                  metric.value
                )}
              </h3>
              <p className="text-[10px] font-bold text-swiss-dark/40 dark:text-white/40 uppercase tracking-[0.2em]">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
