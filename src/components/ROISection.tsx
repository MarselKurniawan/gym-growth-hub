import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const ROISection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Hasil Nyata</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4 text-foreground">
            Balik Modal Lebih Cepat
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Dengan sistem manajemen yang tepat, target BEP Anda bisa dipercepat secara signifikan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="rounded-xl p-7 border border-border bg-secondary/50"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Tanpa FIT TOP</div>
            <div className="text-4xl font-extrabold text-muted-foreground/50 mb-1">5+ Tahun</div>
            <p className="text-sm text-muted-foreground mb-5">Balik modal dengan manajemen seadanya</p>
            <div className="space-y-2.5">
              {["Operasional tidak efisien", "Marketing trial & error", "SDM tidak terlatih", "Tidak ada proyeksi keuangan"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* With */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="rounded-xl p-7 border-2 border-primary bg-primary/5 relative"
          >
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
              Recommended
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Dengan FIT TOP</div>
            <div className="text-4xl font-extrabold text-foreground mb-1">3 Tahun</div>
            <p className="text-sm text-muted-foreground mb-5">Balik modal dengan full management</p>
            <div className="space-y-2.5">
              {["Sistem operasional terstruktur", "Marketing & presale teruji", "SDM tersertifikasi profesional", "Financial forecast & EBITDA jelas"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
