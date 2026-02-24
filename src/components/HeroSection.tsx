import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block bg-primary/10 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="text-primary text-sm font-semibold">One Stop Fitness Management</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground"
            >
              Gym Anda{" "}
              <span className="text-primary">Berantakan?</span>
              <br />
              Kami yang Bereskan.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Dari sertifikasi karyawan, manajemen operasional, hingga strategi balik modal lebih cepat — 
              semua kami tangani. <span className="text-foreground font-semibold">Satu pintu, tanpa ribet.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="https://wa.me/6283898082061"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                <Phone className="w-5 h-5" />
                Konsultasi GRATIS
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-secondary transition-all"
              >
                Lihat Layanan
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-10 mt-12"
            >
              {[
                { num: "20+", label: "Tahun Pengalaman" },
                { num: "50+", label: "Gym Dikelola" },
                { num: "2-3 Thn", label: "Balik Modal" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-extrabold text-foreground">{stat.num}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            <img
              src={heroImg}
              alt="Premium gym interior"
              className="w-full rounded-2xl object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl px-5 py-3 font-bold text-sm shadow-lg">
              Full Management Gym
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
