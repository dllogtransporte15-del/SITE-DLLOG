import React from "react";
import { motion } from "motion/react";

const partners = [
  { name: "Rodo Chagas", logo: "/partners/rodo-chagas.png" },
  { name: "MMJV", logo: "/partners/mmjv.png" },
  { name: "Sementes", logo: "/partners/sementes.png" },
  { name: "G3 Agro", logo: "/partners/g3-agro.png" },
  { name: "Bioma Trading", logo: "/partners/bioma-trading.png" },
  { name: "Novo Parceiro 1", logo: "/partners/extra_1.png" },
  { name: "Grao Expresso", logo: "/partners/extra_2.png" },
  { name: "Pif Paf", logo: "/partners/extra_3.png" },
  { name: "Avivar", logo: "/partners/extra_4.png" },
];

// Combine logos to create a long enough strip for infinite scrolling
const scrollPartners = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

const Partners: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="py-12 bg-white border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-2">Nossa Rede</h2>
          <h3 className="text-2xl font-extrabold text-brand-secondary">
            Empresas que <span className="text-brand-primary">Confiam</span> em Nós
          </h3>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-10 after:bg-gradient-to-l after:from-white after:to-transparent">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          className="flex flex-nowrap w-fit"
        >
          {scrollPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-5 md:px-8 shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
