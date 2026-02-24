import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, TrendingDown, Users, FileWarning } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Operasional Berantakan",
    desc: "SOP tidak jelas, karyawan bingung, member komplain — semuanya jadi kacau tanpa sistem yang benar.",
  },
  {
    icon: FileWarning,
    title: "Sertifikasi Tidak Lengkap",
    desc: "Trainer tanpa sertifikasi resmi? Risiko besar — dari tuntutan hukum hingga kehilangan kepercayaan member.",
  },
  {
    icon: TrendingDown,
    title: "Balik Modal Terlalu Lama",
    desc: "Target BEP 5 tahun? Dengan strategi yang tepat, kami bisa percepat menjadi 2-3 tahun saja.",
  },
  {
    icon: Users,
    title: "SDM Tidak Terkelola",
    desc: "Rekrutmen asal-asalan, training seadanya — hasilnya? Turnover tinggi dan performa rendah.",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tentang" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Masalah yang Anda Hadapi</span>
          <h2 className="text-4xl md:text-5xl mt-3 mb-4 text-foreground">
            PUNYA GYM TAPI{" "}
            <span className="text-primary">PUSING</span> NGATURNYA?
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Kalau salah satu dari ini terasa familiar, berarti sudah saatnya Anda butuh partner yang tepat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display mb-2 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
