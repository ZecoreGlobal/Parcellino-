import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  English: {},
  Deutsch: {
    "Home": "Startseite",
    "Solutions": "Lösungen",
    "Start Your E-com Now": "Jetzt E-Com starten",
    "Select Language": "Sprache auswählen",
    "Contact Architecture": "Kontakt Architektur",
    
    // Hero
    "THE SWISS LOGISTICS EDGE": "DER SCHWEIZER LOGISTIK-VORSPRUNG",
    "PARCELLINO": "PARCELLINO",
    "PRECISION": "PRÄZISION",
    "FULFILLMENT": "FULFILLMENT",
    "From the heart of Switzerland to every corner of the nation. 1-second logistics, multi-language integration, and the Swiss standard of reliability.": "Vom Herzen der Schweiz in jeden Winkel des Landes. 1-Sekunden-Logistik, mehrsprachige Integration und der Schweizer Standard für Zuverlässigkeit.",
    "See our solutions": "Unsere Lösungen ansehen",
    "View Network": "Netzwerk anzeigen",
    "System Status": "Systemstatus",
    "26 Cantons": "26 Kantone",
    "100% NATIONWIDE COVERAGE": "100% SCHWEIZWEITE ABDECKUNG",
    "Seamless local fulfillment from Zurich to Geneva.": "Nahtloses lokales Fulfillment von Zürich bis Genf.",
    "Scroll to explore": "Zum Erkunden scrollen",

    // BordersSection
    "Swiss coverage is": "Schweizer Abdeckung ist",
    "absolute": "absolut",
    "Our infrastructure is optimized exclusively for the Swiss landscape. From Geneva to Zurich, Lugano to Basel, we provide flawless fulfillment tailored perfectly to Switzerland's unique multi-language cantons.": "Unsere Infrastruktur ist exklusiv für die Schweizer Landschaft optimiert. Von Genf bis Zürich, von Lugano bis Basel bieten wir ein makelloses Fulfillment, das perfekt auf die einzigartigen mehrsprachigen Kantone der Schweiz zugeschnitten ist.",
    "SWISS MULTI-LANGUAGE ARCHITECTURE": "SCHWEIZER MEHRSPRACHIGE ARCHITEKTUR",

    // BentoGrid
    "ENGINEERED EXCELLENCE": "KONSTRUIERTE EXZELLENZ",
    "BENTO BOX OF PRECISION": "BENTO-BOX DER PRÄZISION",
    "E-Com Integration": "E-Com Integration",
    "One-click Shopify/Woo/Amazon sync. Our API is built for high-frequency trading standards, ensuring your stock levels are never out of sync.": "Ein-Klick Shopify/Woo/Amazon-Synchronisation. Unsere API wurde für Hochfrequenzhandelsstandards entwickelt, um sicherzustellen, dass Ihre Lagerbestände nie asynchron sind.",
    "Explore Tech": "Technik entdecken",
    "Sustainable Packaging": "Nachhaltige Verpackung",
    "The future of eco-conscious delivery. 100% biodegradable materials engineered for structural integrity and premium unboxing experiences.": "Die Zukunft der umweltbewussten Lieferung. 100% biologisch abbaubare Materialien, entwickelt für strukturelle Integrität und erstklassige Unboxing-Erlebnisse.",
    "View Eco-Policy": "Öko-Richtlinie ansehen",
    "Rapid Fulfillment": "Schnelles Fulfillment",
    "Order-to-shipping in 60 minutes. Picking flows that mimic Swiss timepieces.": "Von der Bestellung bis zum Versand in 60 Minuten. Kommissionierabläufe, die Schweizer Uhren imitieren.",
    "Returns Management": "Retourenmanagement",
    "Automated verification and instant restocking for peak efficiency.": "Automatisierte Überprüfung und sofortige Wiedereinlagerung für höchste Effizienz.",

    // MetricsSection
    "MISSION-CRITICAL SUPPORT": "MISSION-CRITICAL SUPPORT",
    "ORDER ACCURACY RATE": "BESTELLGENAUIGKEIT",
    "STRATEGIC REACH": "STRATEGISCHE REICHWEITE",

    // Solutions Page
    "Solutions Architecture": "Lösungsarchitektur",
    "Tailored Logistics for": "Maßgeschneiderte Logistik für",
    "Swiss Ambition.": "Schweizer Ambitionen.",
    "Swiss-engineered precision for industries that demand perfection.": "Schweizer Präzision für Branchen, die Perfektion fordern.",
    "Powering Swiss Trade Leaders": "Antrieb für Schweizer Handelsführer",
    "E-Commerce Fulfillment": "E-Commerce Fulfillment",
    "Seamlessly scale your D2C brand with high-volume, precision-driven order processing. From pick & pack to last-mile — we architect speed.": "Skalieren Sie Ihre D2C-Marke nahtlos mit hochvolumiger, präzisionsgesteuerter Bestellabwicklung. Von Pick & Pack bis zur letzten Meile - wir entwerfen Geschwindigkeit.",
    "Explore this solution": "Diese Lösung erkunden",
    "Luxury Goods Handling": "Umgang mit Luxusgütern",
    "White-glove treatment with enhanced security, premium unboxing experiences, and meticulous care for your most valuable inventory.": "White-Glove-Behandlung mit erhöhter Sicherheit, erstklassigen Unboxing-Erlebnissen und akribischer Sorgfalt für Ihr wertvollstes Inventar.",
    "Medical & High-Value": "Medizin & Hoher Wert",
    "Temperature-controlled environments and strict compliance protocols for sensitive inventories that demand zero-tolerance accuracy.": "Temperaturkontrollierte Umgebungen und strenge Compliance-Protokolle für sensible Bestände, die eine Null-Toleranz-Genauigkeit erfordern.",
    "Returns Management (Desc)": "Automatisierte Qualitätsprüfungen und schnelle Wiedereinlagerung zum Schutz Ihres Gewinns. Verwandeln Sie Retouren in einbehaltene Einnahmen und erneuertes Vertrauen.",
    "Swiss Cantonal Logistics": "Schweizer Kantonslogistik",
    "Flawless delivery across all 26 cantons with optimized route networks and localized language handling. We cover Switzerland perfectly so you can focus on local growth.": "Reibungslose Lieferung in alle 26 Kantone mit optimierten Routennetzwerken und lokalisierter Sprachregelung. Wir decken die Schweiz perfekt ab, damit Sie sich auf lokales Wachstum konzentrieren können.",
    "Deep Architecture — ": "Tiefe Architektur — ",
    "Expert Insight": "Experteneinblick",
    "Core Capabilities": "Kernkompetenzen",
    "Ready to discuss this architecture for your brand?": "Sind Sie bereit, diese Architektur für Ihre Marke zu besprechen?",
    "Schedule Technical Brief": "Technisches Briefing planen",
    "The Parcellino Advantage": "Der Parcellino-Vorteil",
    "Swiss Precision": "Schweizer Präzision",
    "99.9% fulfillment accuracy across all sectors.": "99,9% Fulfillment-Genauigkeit über alle Sektoren hinweg.",
    "Swiss-wide Coverage": "Schweizweite Abdeckung",
    "Direct lanes to all 26 cantons.": "Direkte Linien in alle 26 Kantone.",
    "Eco-Friendly / Swiss Made": "Umweltfreundlich / Swiss Made",
    "\"Sustainable Packaging & Carbon-Balanced Logistics\"": "\"Nachhaltige Verpackung & klimaneutrale Logistik\"",
    "We engineer customized, eco-friendly unboxing experiences that align with your brand values while mitigating environmental impact through optimized shipping routes and climate-neutral partners.": "Wir entwickeln maßgeschneiderte, umweltfreundliche Unboxing-Erlebnisse, die mit Ihren Markenwerten übereinstimmen und gleichzeitig die Umweltauswirkungen durch optimierte Versandrouten und klimaneutrale Partner mindern.",
    "Request Strategy": "Strategie anfordern",
    "Common Inquiries": "Häufige Anfragen",
    "Frequently Asked Questions": "Häufig gestellte Fragen",
    "What is your typical turnaround for e-commerce integration?": "Wie ist Ihre typische Bearbeitungszeit für E-Commerce-Integrationen?",
    "Most major platforms (Shopify, WooCommerce, Amazon) can be integrated within 24-48 hours. Our technical team provides end-to-end support for custom API setups.": "Die meisten großen Plattformen (Shopify, WooCommerce, Amazon) können innerhalb von 24-48 Stunden integriert werden. Unser technisches Team bietet End-to-End-Support für benutzerdefinierte API-Setups.",
    "Do you deliver to alpine and remote Swiss regions?": "Liefern Sie auch in alpine und abgelegene Schweizer Regionen?",
    "Yes. We deliver to every single valley and mountain village across all 26 cantons with our specialized Swiss logistics partners, guaranteeing on-time arrival.": "Ja. Wir liefern in jedes einzelne Tal und Bergdorf in allen 26 Kantonen mit unseren spezialisierten Schweizer Logistikpartnern und garantieren eine pünktliche Ankunft.",
    "Are your packaging materials eco-friendly?": "Sind Ihre Verpackungsmaterialien umweltfreundlich?",
    "Yes. We use 100% biodegradable, climate-neutral materials engineered specifically for safe, premium, and sustainable unboxing experiences across Switzerland.": "Ja. Wir verwenden zu 100% biologisch abbaubare, klimaneutrale Materialien, die speziell für sichere, erstklassige und nachhaltige Unboxing-Erlebnisse in der gesamten Schweiz entwickelt wurden.",
    "How does your returns management process work?": "Wie funktioniert Ihr Retourenmanagement-Prozess?",
    "Our automated returns portal allows customers to initiate returns easily. Once received, we perform rapid quality checks and restock or process according to your brand's specific protocols.": "Unser automatisiertes Retourenportal ermöglicht es Kunden, Retouren einfach zu veranlassen. Sobald sie eingegangen sind, führen wir schnelle Qualitätsprüfungen durch und lagern sie gemäß den spezifischen Protokollen Ihrer Marke ein oder verarbeiten sie weiter.",

    // Testimonials
    "SWISS LEADERSHIP": "SCHWEIZER FÜHRUNG",
    "Logistics is the": "Die Logistik ist der",
    "heartbeat": "Herzschlag",
    "of your brand. We make sure it never skips a beat.": "Ihrer Marke. Wir sorgen dafür, dass er nie aussetzt.",
    "Founder & CEO": "Gründerin & CEO",
    "VOICES OF PARTNERSHIP": "STIMMEN DER PARTNERSCHAFT",
    "THEY TRUST PARCELLINO.": "SIE VERTRAUEN PARCELLINO.",
    "Since migrating to Parcellino, our order-to-door time in DACH dropped by 40%. Their fulfillment precision is nothing short of Swiss.": "Seit der Umstellung auf Parcellino hat sich unsere Order-to-Door-Zeit in der DACH-Region um 40% verkürzt. Ihre Fulfillment-Präzision ist einfach schweizerisch.",
    "Operations Director, Velox Wear": "Operations Director, Velox Wear",
    "We needed a partner who treats luxury goods with respect. Parcellino’s white-glove service transformed our customer unboxing experience.": "Wir brauchten einen Partner, der Luxusgüter mit Respekt behandelt. Der White-Glove-Service von Parcellino hat das Unboxing-Erlebnis unserer Kunden verändert.",
    "Founder, Lumina Swiss": "Gründer, Lumina Swiss",
    
    // CTA Section
    "Ready to Scale Your Logistics?": "Bereit, Ihre Logistik zu skalieren?",
    "Connect with our solutions architects for a tailored technical brief and Swiss scaling strategy.": "Kontaktieren Sie unsere Lösungsarchitekten für ein maßgeschneidertes technisches Briefing und eine Schweizer Skalierungsstrategie.",
    "Book a Strategy Call": "Strategiegespräch buchen",
    "Speak to an Expert Now": "Jetzt mit einem Experten sprechen",
    "SCALABILITY": "SKALIERBARKEIT",
    "READY TO UPGRADE": "BEREIT FÜR EIN UPGRADE",
    "YOUR ARCHITECTURE?": "IHRER ARCHITEKTUR?",
    "Join leading D2C brands leveraging Swiss precision for nationwide growth.": "Schließen Sie sich führenden D2C-Marken an, die Schweizer Präzision für nationales Wachstum nutzen.",
    "Initiate Integration": "Integration starten",
    "Or contact our engineering team": "Oder kontaktieren Sie unser Technik-Team",

    // Footer
    "Switzerland's premier fulfillment architecture. Precision, speed, and neutrality for local commerce.": "Die führende Fulfillment-Architektur der Schweiz. Präzision, Geschwindigkeit und Neutralität für den lokalen Handel.",
    "Zürich, Switzerland": "Zürich, Schweiz",
    "Operations": "Betrieb",
    "E-Com Sync": "E-Com Sync",
    "Luxury Handing": "Luxus Handling",
    "Returns AI": "Retouren-KI",
    "Customs API": "Zoll-API",
    "Architecture": "Architektur",
    "Network Map": "Netzwerkkarte",
    "Security": "Sicherheit",
    "Data Privacy": "Datenschutz",
    "Sustainability": "Nachhaltigkeit",
    "Contact": "Kontakt",
    "Partner Portal": "Partner-Portal",
    "Support": "Support",
    "© 2026 Parcellino Swiss. Engineered in Zurich.": "© 2026 Parcellino Swiss. Entwickelt in Zürich.",
    "Terms": "Bedingungen",
    "Privacy": "Datenschutz",

    // Solutions Details text
    "Our warehouse automation reduces pick-error rates to less than 0.01%, ensuring your customers receive exactly what they ordered, every time.": "Unsere Lagerautomatisierung reduziert die Fehlerquote beim Kommissionieren auf weniger als 0,01% und stellt sicher, dass Ihre Kunden jedes Mal genau das erhalten, was sie bestellt haben.",
    "Real-time Inventory Sync": "Echtzeit-Bestandssynchronisation",
    "Same-day Dispatch (14:00 cutoff)": "Versand am selben Tag (14:00 Uhr Cutoff)",
    "Custom Brand Packaging": "Individuelle Markenverpackung",
    "Fragile Item Specialists": "Spezialisten für zerbrechliche Artikel",
    "Luxury requires a different standard of care. We treat every parcel as a masterpiece, with dedicated white-glove inspection zones.": "Luxus erfordert einen anderen Sorgfaltsstandard. Wir behandeln jedes Paket als Meisterwerk, mit speziellen White-Glove-Inspektionszonen.",
    "Enhanced Security Vaults": "Erweiterte Sicherheitstresore",
    "Climate Controlled Storage": "Klimatisierte Lagerung",
    "Premium Tissue & Wax Seal handling": "Umgang mit Premium-Seidenpapier & Wachssiegeln",
    "Serial Number Tracking": "Seriennummern-Tracking",
    "Precision is non-negotiable in medical logistics. Our facility meets the highest Swiss standards for pharmaceutical storage.": "Präzision ist in der Medizinlogistik nicht verhandelbar. Unsere Anlage erfüllt die höchsten Schweizer Standards für die pharmazeutische Lagerung.",
    "GDP Compliant Handling": "GDP-konformes Handling",
    "Cold Chain Logistics": "Kühlkettenlogistik",
    "Batch & Expiry Management": "Chargen- & Verfallsmanagement",
    "Sterile Environment Options": "Optionen für sterile Umgebungen",
    "Returns are the second point of customer contact. We process returns in under 24 hours to ensure rapid restocking or liquidation.": "Retouren sind der zweite Kundenkontaktpunkt. Wir bearbeiten Retouren in weniger als 24 Stunden, um eine schnelle Wiedereinlagerung oder Liquidation sicherzustellen.",
    "Photo-Verified Inspections": "Fotoverifizierte Inspektionen",
    "Quality Grading System": "Qualitätseinstufungssystem",
    "Rapid Customer Refunds": "Schnelle Kundenrückerstattungen",
    "Regional Consolidation": "Regionale Konsolidierung",
    "Cross-border trade shouldn't be a bottleneck. Our in-house customs experts ensure 100% compliance with EU and Swiss regulations.": "Grenzüberschreitender Handel sollte kein Engpass sein. Unsere internen Zollexperten gewährleisten 100%ige Konformität mit EU- und Schweizer Vorschriften.",
    "IOSS & OSS Management": "IOSS & OSS Management",
    "HS Code Classification": "HS-Code-Klassifizierung",
    "Duty & Tax Calculation": "Zoll- & Steuerberechnung",
    "Frictionless EU-Swiss corridor": "Reibungsloser EU-Schweiz-Korridor"
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('Deutsch');

  useEffect(() => {
    const savedLang = localStorage.getItem('parcellino-lang');
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  const setLanguage = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('parcellino-lang', lang);
  };

  const t = (text) => {
    if (currentLang === 'English') return text;
    return translations[currentLang]?.[text] || text;
  };

  const tRich = (text) => {
    const translated = t(text);
    if (typeof translated !== 'string') return translated;
    const parts = translated.split(/(parcellino)/i);
    if (parts.length === 1) return translated;
    return parts.map((part, index) => 
      part.toLowerCase() === 'parcellino' 
        ? <span key={index} className="text-swiss-red lowercase">parcellino</span> 
        : part
    );
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t, tRich }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
