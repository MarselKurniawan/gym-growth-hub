import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, ArrowRight, Sparkles, Star } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontak" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem]"
        >
          {/* Dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(160,25%,8%)] via-[hsl(155,20%,12%)] to-[hsl(145,30%,6%)]" />

          {/* Green glow accents */}
          <div className="absolute top-[-100px] right-[-80px] w-[400px] h-[400px] rounded-full bg-primary/15 blur-[100px]" />
          <div className="absolute bottom-[-80px] left-[-60px] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute top-[40%] left-[50%] w-[200px] h-[200px] rounded-full bg-primary/8 blur-[60px]" />

          {/* Geometric shapes */}
          <div className="absolute top-[-50px] right-[-50px] w-[240px] h-[240px] border-[30px] border-primary/[0.08] rounded-full" />
          <div className="absolute bottom-[-40px] left-[-40px] w-[200px] h-[200px] border-[25px] border-primary/[0.06] rounded-full" />
          <div className="absolute top-[15%] right-[8%] w-20 h-20 border-[2px] border-primary/[0.12] rounded-2xl rotate-45" />
          <div className="absolute bottom-[25%] left-[5%] w-14 h-14 border-[2px] border-primary/[0.1] rounded-full" />
          <div className="absolute top-[60%] right-[20%] w-8 h-8 border-[2px] border-primary/[0.08] rounded-lg rotate-12" />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(145 80% 42% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(145 80% 42% / 0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Content wrapper */}
          <div className="relative z-10 px-6 py-16 md:px-16 md:py-24 lg:px-24">
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.15 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-primary/15 backdrop-blur-md rounded-full px-5 py-2 border border-primary/25">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-bold tracking-wider uppercase">
                  Konsultasi Gratis
                </span>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="text-center max-w-3xl mx-auto mb-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Siap Membuat Gym
                <br />
                <span className="relative inline-block mt-1">
                  Anda{" "}
                  <span className="relative text-primary">
                    Profitable
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 200 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 8C40 2 80 2 100 6C120 10 160 4 198 7"
                        stroke="hsl(145 80% 42% / 0.5)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  ?
                </span>
              </h2>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="text-white/60 text-base md:text-lg text-center max-w-lg mx-auto mb-10 leading-relaxed"
            >
              Konsultasi awal <span className="text-primary font-extrabold">100% GRATIS</span> —
              hubungi kami sekarang dan mulai transformasi bisnis gym Anda.
            </motion.p>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}
              className="flex justify-center mb-14"
            >
              <a
                href="https://wa.me/6283898082061"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-extrabold text-lg hover:scale-[1.03] transition-all duration-300 shadow-[0_20px_60px_-15px_hsl(145_80%_42%_/_0.4)]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-[hsl(155,70%,45%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <Phone className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Hubungi via WhatsApp</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-3 mb-10"
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
              <Star className="w-3 h-3 text-primary/40 fill-primary/40" />
              <Star className="w-4 h-4 text-primary/60 fill-primary/60" />
              <Star className="w-3 h-3 text-primary/40 fill-primary/40" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
            </motion.div>

            {/* Contact cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-3xl mx-auto"
            >
              {[
                { icon: Phone, main: "0838 9808 2061", sub: "WhatsApp / Telepon" },
                { icon: Mail, main: "tonifittop2222@gmail.com", sub: "Email" },
                { icon: MapPin, main: "MTH Square Block A4 A", sub: "Jakarta Timur" },
              ].map((c, i) => (
                <motion.div
                  key={c.sub}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.65 + i * 0.1 }}
                  className="group bg-white/[0.04] hover:bg-primary/[0.08] backdrop-blur-md border border-white/[0.08] hover:border-primary/25 rounded-2xl p-6 text-center transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/15 group-hover:bg-primary/25 flex items-center justify-center mx-auto mb-4 transition-colors">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-bold text-white text-sm block break-all leading-snug">
                    {c.main}
                  </span>
                  <span className="text-xs text-white/40 mt-2 block font-medium">{c.sub}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
