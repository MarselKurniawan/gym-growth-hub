import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portfolio from "@/assets/portfolio.jpg";

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Portofolio</span>
          <h2 className="text-4xl md:text-5xl mt-3 mb-4">
            SUDAH <span className="text-primary">TERBUKTI</span> DI SELURUH INDONESIA
          </h2>
          <p className="text-hero-dark-foreground/60 text-lg font-body">
            Jabodetabek, Jawa, Bali, Sulawesi, Kalimantan, dan Sumatera — kami sudah ada di sana.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <img
            src={portfolio}
            alt="Portofolio FIT TOP Management"
            className="w-full rounded-2xl border border-hero-dark-foreground/10"
          />
        </motion.div>

        {/* Partner names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-10 max-w-4xl mx-auto"
        >
          {[
            "NTIATOS Bandung",
            "REVO TOWN Bekasi",
            "Nusa Dua Bali",
            "Ubud Bali",
            "NNORA FITNESS",
            "WILLI Cinere",
            "4FIT Cengkareng",
            "PALM FITNESS",
            "GLOBALO Fitness",
            "ADA Sport Club",
          ].map((name) => (
            <span
              key={name}
              className="text-xs font-semibold tracking-wider text-hero-dark-foreground/40 border border-hero-dark-foreground/10 rounded-full px-4 py-1.5"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
