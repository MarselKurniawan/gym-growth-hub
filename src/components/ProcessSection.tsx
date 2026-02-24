import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Konsultasi", desc: "Diskusi awal GRATIS — kami pahami kebutuhan bisnis Anda." },
  { num: "02", title: "MOU & Konsep", desc: "Kesepakatan dan persiapan konsep gym yang optimal." },
  { num: "03", title: "Layout & Konstruksi", desc: "Desain interior dan pembangunan fasilitas gym." },
  { num: "04", title: "Rekrutmen & Training", desc: "Rekrutmen SDM + training dan sertifikasi profesional." },
  { num: "05", title: "Soft Opening", desc: "Presale, marketing, dan uji coba operasional." },
  { num: "06", title: "Grand Opening", desc: "Launching resmi — siap profit!" },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proses" className="py-20 md:py-28 section-soft">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Tahap Kerjasama</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4 text-foreground">
            Prosesnya Simpel
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Dari konsultasi sampai grand opening — kami dampingi setiap langkahnya.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="bg-background rounded-xl p-5 border border-border hover:shadow-md transition-all relative"
            >
              <span className="text-4xl font-extrabold text-primary/10 absolute top-3 right-4">{step.num}</span>
              <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mb-3">
                {parseInt(step.num)}
              </div>
              <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
