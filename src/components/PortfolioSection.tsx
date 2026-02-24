import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portfolio from "@/assets/portfolio.jpg";

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Portofolio</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4 text-foreground">
            Terbukti di Seluruh Indonesia
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Jabodetabek, Jawa, Bali, Sulawesi, Kalimantan, dan Sumatera.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <img src={portfolio} alt="Portofolio FIT TOP" className="w-full rounded-2xl border border-border shadow-sm" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 max-w-4xl mx-auto"
        >
          {[
            { city: "Jakarta", gyms: ["4FIT Cengkareng", "Palm Fitness", "NTIATOS"] },
            { city: "Bekasi", gyms: ["REVO TOWN Bekasi", "Gym Bekasi Pekayon"] },
            { city: "Bandung", gyms: ["Indeep Gym", "Extira Gym", "Maximl Fitness"] },
            { city: "Bali", gyms: ["Prezo Gym Nusa Dua", "Prezo Gym Ubud", "Banjar Ubud"] },
            { city: "Depok & Cinere", gyms: ["WILLI Cinere", "Voga Cinere", "NNORA Fitness"] },
            { city: "Lainnya", gyms: ["Globalo Fitness", "ADA Sport Club", "One Life Smart Gym"] },
          ].map((loc) => (
            <div
              key={loc.city}
              className="bg-secondary/50 rounded-xl p-4 border border-border"
            >
              <h4 className="font-bold text-sm text-foreground mb-2">{loc.city}</h4>
              <ul className="space-y-1">
                {loc.gyms.map((gym) => (
                  <li key={gym} className="text-xs text-muted-foreground">• {gym}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
