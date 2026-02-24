import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2, GraduationCap, BarChart3, Users,
  Monitor, Megaphone, Dumbbell, DollarSign,
} from "lucide-react";

const services = [
  { icon: Building2, title: "Fit Out & Interior", desc: "Desain dan pembangunan gym dari nol sampai siap beroperasi." },
  { icon: GraduationCap, title: "Sertifikasi & Training", desc: "Semua karyawan dan trainer tersertifikasi resmi." },
  { icon: BarChart3, title: "Financial Forecast", desc: "Proyeksi keuangan, P&L, EBITDA — strategi balik modal cepat." },
  { icon: Monitor, title: "Software & HR System", desc: "Dashboard, membership, dan report terintegrasi." },
  { icon: Megaphone, title: "Marketing & Sales", desc: "Strategi pemasaran yang terbukti meningkatkan revenue." },
  { icon: Users, title: "Manajemen SDM", desc: "Rekrutmen, training, dan evaluasi performa berkala." },
  { icon: Dumbbell, title: "Program Kelas", desc: "Yoga, Boxing, Zumba, HIIT — program kelas lengkap." },
  { icon: DollarSign, title: "Konsultasi Investasi", desc: "Pilihan investasi variatif dengan return maksimal." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="layanan" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Layanan Satu Pintu</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4 text-foreground">
            Semuanya Kami Tangani
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Tidak perlu cari vendor sana-sini. Dari desain interior sampai strategi keuangan — semua di satu tempat.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl p-5 border border-border hover:shadow-md hover:border-primary/30 transition-all bg-background"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-1 text-foreground">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
