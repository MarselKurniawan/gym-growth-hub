import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, HandCoins, Handshake, Eye, Target } from "lucide-react";
import consultationImg from "@/assets/consultation.jpg";

const reasons = [
  { icon: Clock, title: "20+ Tahun Pengalaman", desc: "Sudah terbukti di industri fitness Indonesia." },
  { icon: HandCoins, title: "Konsultasi GRATIS", desc: "Konsultasi awal tanpa biaya apapun." },
  { icon: Eye, title: "Pendampingan Langsung", desc: "Kami turun langsung, bukan cuma kasih teori." },
  { icon: Target, title: "BEP Lebih Cepat", desc: "Dari 5 tahun bisa jadi 2-3 tahun saja." },
  { icon: Shield, title: "Sertifikasi Lengkap", desc: "Trainer & staff mendapat sertifikasi resmi." },
  { icon: Handshake, title: "Kerjasama Fleksibel", desc: "Disesuaikan dengan kebutuhan Anda." },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="keunggulan" className="py-20 md:py-28 section-soft">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <img
              src={consultationImg}
              alt="Konsultasi gym"
              className="rounded-2xl w-full object-cover aspect-square shadow-lg"
            />
          </motion.div>

          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">Mengapa Pilih Kami</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-8 text-foreground">
                Partner yang Terbukti
              </h2>
            </motion.div>

            <div className="space-y-4">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex gap-3 items-start"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <r.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{r.title}</h4>
                    <p className="text-xs text-muted-foreground">{r.desc}</p>
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
