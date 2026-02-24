import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, HandCoins, Handshake, Eye, Target } from "lucide-react";
import consultationImg from "@/assets/consultation.jpg";

const reasons = [
  { icon: Clock, title: "20+ Tahun Pengalaman", desc: "Bukan pemula — kami sudah terbukti di industri fitness." },
  { icon: HandCoins, title: "Konsultasi GRATIS", desc: "Konsultasi awal tanpa biaya. Kami bantu tentukan konsep terbaik." },
  { icon: Eye, title: "Pendampingan Langsung", desc: "Shadow management — kami tidak cuma kasih teori, tapi turun langsung." },
  { icon: Target, title: "BEP Lebih Cepat", desc: "Target 5 tahun? Dengan sistem kami, 2-3 tahun sudah bisa balik modal." },
  { icon: Shield, title: "Sertifikasi Lengkap", desc: "Semua trainer & staff mendapat sertifikasi resmi yang diakui." },
  { icon: Handshake, title: "Kerjasama Fleksibel", desc: "Bentuk kerjasama yang bisa disesuaikan dengan kebutuhan Anda." },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={consultationImg}
              alt="Konsultasi gym profesional"
              className="rounded-2xl w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl px-6 py-4 font-display text-2xl">
              GRATIS KONSULTASI
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">Mengapa Pilih Kami</span>
              <h2 className="text-4xl md:text-5xl mt-3 mb-8 text-foreground">
                PARTNER YANG <span className="text-primary">TERBUKTI</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <r.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{r.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
