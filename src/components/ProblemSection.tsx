import { motion, useInView } from "framer-motion";
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
    <section id="tentang" className="py-20 md:py-28 section-soft">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Masalah Umum Pemilik Gym</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4 text-foreground">
            Punya Gym Tapi Pusing Ngaturnya?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Kalau salah satu masalah ini terasa familiar, berarti sudah saatnya Anda butuh partner yang tepat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-xl p-6 border border-border hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-1.5 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
