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
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,80%,52%)] via-[hsl(0,75%,45%)] to-[hsl(0,60%,28%)]" />

          {/* Decorative geometric shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.08]">
            <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] border-[60px] border-white rounded-full" />
          </div>
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] opacity-[0.06]">
            <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] border-[50px] border-white rounded-full" />
          </div>
          <div className="absolute top-[40%] left-[15%] w-20 h-20 border-4 border-white/10 rounded-2xl rotate-45" />
          <div className="absolute top-[20%] right-[20%] w-14 h-14 border-4 border-white/10 rounded-full" />
          <div className="absolute bottom-[25%] right-[12%] w-10 h-10 border-4 border-white/[0.07] rounded-lg rotate-12" />

          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.06] blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-black/10 blur-[80px] rounded-full" />

          {/* Content wrapper */}
          <div className="relative z-10 px-6 py-16 md:px-16 md:py-24 lg:px-24">
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.15 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-5 py-2 border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-white/95 text-sm font-bold tracking-wider uppercase">
                  Konsultasi Gratis
                </span>
                <Sparkles className="w-4 h-4 text-yellow-300" />
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
                  <span className="relative">
                    Profitable
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 200 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 8C40 2 80 2 100 6C120 10 160 4 198 7"
                        stroke="rgba(255,255,255,0.5)"
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
              className="text-white/75 text-base md:text-lg text-center max-w-lg mx-auto mb-10 leading-relaxed"
            >
              Konsultasi awal <span className="text-white font-extrabold">100% GRATIS</span> —
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
                className="group relative inline-flex items-center justify-center gap-3 bg-white text-[hsl(0,75%,42%)] px-10 py-5 rounded-2xl font-extrabold text-lg hover:scale-[1.03] transition-all duration-300 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white to-red-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Phone className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Hubungi via WhatsApp</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </motion.div>

            {/* Divider with stars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-3 mb-10"
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30" />
              <Star className="w-3 h-3 text-white/40 fill-white/40" />
              <Star className="w-4 h-4 text-yellow-300/60 fill-yellow-300/60" />
              <Star className="w-3 h-3 text-white/40 fill-white/40" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30" />
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
                  className="group bg-white/[0.08] hover:bg-white/[0.15] backdrop-blur-md border border-white/[0.12] hover:border-white/25 rounded-2xl p-6 text-center transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/15 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                    <c.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-white text-sm block break-all leading-snug">
                    {c.main}
                  </span>
                  <span className="text-xs text-white/50 mt-2 block font-medium">{c.sub}</span>
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
