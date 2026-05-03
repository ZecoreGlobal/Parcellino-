import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';

const MetricsSection = () => {
  const metrics = [
    { value: "24/7", isNumeric: false, label: "MISSION-CRITICAL SUPPORT" },
    { value: "99.9", suffix: "%", isNumeric: true, label: "ORDER ACCURACY RATE", color: "text-swiss-red" },
    { value: "Global", isNumeric: false, label: "STRATEGIC REACH" }
  ];

  const partners = ["HYDRUX", "DIRTS", "VELOCITI", "ORBITA", "KRONOS"];

  return (
    <section className="py-24 border-b border-swiss-dark/5 bg-white">
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
              <h3 className={`text-5xl md:text-6xl font-bold mb-4 ${metric.color || 'text-swiss-dark'}`}>
                {metric.isNumeric ? (
                  <Counter value={metric.value} decimals={1} suffix={metric.suffix} />
                ) : (
                  metric.value
                )}
              </h3>
              <p className="text-[10px] font-bold text-swiss-dark/40 uppercase tracking-[0.2em]">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <span key={partner} className="text-2xl font-black tracking-tighter cursor-default">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
