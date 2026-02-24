import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Clock, DollarSign, BarChart3 } from "lucide-react";

const ROISection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Hasil Nyata</span>
          <h2 className="text-4xl md:text-5xl mt-3 mb-4">
            BALIK MODAL <span className="text-highlight">LEBIH CEPAT</span>
          </h2>
          <p className="text-hero-dark-foreground/60 text-lg font-body">
            Dengan sistem manajemen yang tepat, proyeksi keuangan yang akurat, dan operasional yang efisien — 
            target BEP Anda bisa dipercepat secara signifikan.
          </p>
        </motion.div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="surface-dark rounded-2xl p-8 border border-hero-dark-foreground/10"
          >
            <div className="text-hero-dark-foreground/40 text-sm font-semibold uppercase tracking-wider mb-4">Tanpa FIT TOP</div>
            <div className="text-6xl font-display text-hero-dark-foreground/30 mb-2">5+ TAHUN</div>
            <p className="text-hero-dark-foreground/40 font-body">BEP dengan manajemen seadanya</p>
            <div className="mt-6 space-y-3">
              {["Operasional tidak efisien", "Marketing trial & error", "SDM tidak terlatih", "Tidak ada proyeksi keuangan"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-hero-dark-foreground/30 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-hero-dark-foreground/20" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="rounded-2xl p-8 border-2 border-primary bg-primary/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
              RECOMMENDED
            </div>
            <div className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Dengan FIT TOP</div>
            <div className="text-6xl font-display text-primary mb-2">2-3 TAHUN</div>
            <p className="text-hero-dark-foreground/70 font-body">BEP dengan full management system</p>
            <div className="mt-6 space-y-3">
              {["Sistem operasional terstruktur", "Marketing & presale teruji", "SDM tersertifikasi profesional", "Financial forecast & EBITDA jelas"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-hero-dark-foreground/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Financial highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: TrendingUp, title: "Projection", desc: "Proyeksi bisnis yang realistis" },
            { icon: DollarSign, title: "Profit & Loss", desc: "Laporan P&L yang transparan" },
            { icon: BarChart3, title: "EBITDA", desc: "Analisis profitabilitas detail" },
            { icon: Clock, title: "Break Even Point", desc: "Target BEP yang terukur" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center surface-dark rounded-xl p-5 border border-hero-dark-foreground/10"
            >
              <item.icon className="w-6 h-6 text-highlight mx-auto mb-2" />
              <div className="font-display text-lg">{item.title}</div>
              <p className="text-xs text-hero-dark-foreground/50 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROISection;
