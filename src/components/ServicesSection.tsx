import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  GraduationCap,
  BarChart3,
  Users,
  Monitor,
  Megaphone,
  Dumbbell,
  DollarSign,
} from "lucide-react";

const services = [
  { icon: Building2, title: "Fit Out & Interior", desc: "Desain dan pembangunan gym dari nol sampai siap beroperasi." },
  { icon: GraduationCap, title: "Sertifikasi & Training SDM", desc: "Semua karyawan dan trainer tersertifikasi resmi, siap kerja profesional." },
  { icon: BarChart3, title: "Financial Forecast & BEP", desc: "Proyeksi keuangan, P&L, EBITDA — strategi balik modal lebih cepat." },
  { icon: Monitor, title: "Software & HR System", desc: "Sistem digital lengkap dari dashboard, membership, sampai report terintegrasi." },
  { icon: Megaphone, title: "Marketing & Sales", desc: "Strategi pemasaran dan presale yang sudah terbukti meningkatkan revenue." },
  { icon: Users, title: "Manajemen SDM", desc: "Rekrutmen, training, dan evaluasi performa karyawan secara berkala." },
  { icon: Dumbbell, title: "Program Kelas & Fitness", desc: "Yoga, Boxing, Zumba, HIIT — program kelas lengkap dan berkualitas." },
  { icon: DollarSign, title: "Konsultasi Bisnis & Investasi", desc: "Pilihan investasi variatif dengan return yang lebih maksimal." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="layanan" className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Layanan Satu Pintu</span>
          <h2 className="text-4xl md:text-5xl mt-3 mb-4">
            SEMUANYA KAMI <span className="text-primary">TANGANI</span>
          </h2>
          <p className="text-hero-dark-foreground/60 text-lg font-body">
            Tidak perlu cari vendor sana-sini. Dari desain interior sampai strategi keuangan — semua ada di satu tempat.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="surface-dark rounded-xl p-6 border border-hero-dark-foreground/10 hover:border-primary/50 transition-all group"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-display mb-2">{s.title}</h3>
              <p className="text-sm text-hero-dark-foreground/50 font-body leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
