import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Premium gym interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-dark/95 via-hero-dark/80 to-hero-dark/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-primary text-sm font-semibold tracking-wide">
              ONE STOP FITNESS MANAGEMENT
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6 text-hero-dark-foreground"
          >
            GYM ANDA{" "}
            <span className="text-primary">BERANTAKAN?</span>
            <br />
            KAMI YANG{" "}
            <span className="text-highlight">BERESKAN.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-hero-dark-foreground/80 max-w-xl mb-8 font-body leading-relaxed"
          >
            Dari sertifikasi karyawan, manajemen operasional, hingga strategi balik modal lebih cepat — 
            semua kami tangani. <strong className="text-hero-dark-foreground">Satu pintu, tanpa ribet.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/6283898082061"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Konsultasi GRATIS Sekarang
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 border-2 border-hero-dark-foreground/30 text-hero-dark-foreground px-8 py-4 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all"
            >
              Lihat Layanan Kami
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-3 gap-6 mt-16 max-w-lg"
          >
            {[
              { num: "20+", label: "Tahun Pengalaman" },
              { num: "50+", label: "Gym Dikelola" },
              { num: "2-3", label: "Tahun Balik Modal" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-display text-primary">{stat.num}</div>
                <div className="text-sm text-hero-dark-foreground/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
