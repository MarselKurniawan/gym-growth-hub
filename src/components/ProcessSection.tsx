import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Konsultasi", desc: "Diskusi awal GRATIS — kami pahami kebutuhan dan tantangan bisnis Anda." },
  { num: "02", title: "MOU & Konsep", desc: "Penandatanganan kesepakatan dan persiapan konsep gym yang optimal." },
  { num: "03", title: "Layout & Konstruksi", desc: "Desain interior, fit out, dan pembangunan fasilitas gym sesuai standar." },
  { num: "04", title: "Rekrutmen & Training", desc: "Rekrutmen SDM berkualitas + training dan sertifikasi profesional." },
  { num: "05", title: "Soft Opening", desc: "Presale, marketing, dan uji coba operasional sebelum grand opening." },
  { num: "06", title: "Grand Opening", desc: "Launching resmi dengan strategi yang sudah teruji — siap profit!" },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proses" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Tahap Kerjasama</span>
          <h2 className="text-4xl md:text-5xl mt-3 mb-4 text-foreground">
            PROSESNYA <span className="text-primary">SIMPEL</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Dari konsultasi sampai grand opening — kami dampingi setiap langkahnya.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="text-5xl font-display text-primary/15 absolute top-4 right-4 group-hover:text-primary/30 transition-colors">
                {step.num}
              </div>
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-4">
                {parseInt(step.num)}
              </div>
              <h3 className="text-xl font-display mb-2 text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
