import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontak" className="py-20 md:py-28 relative overflow-hidden">
      {/* Bold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,75%,48%)] via-[hsl(0,70%,38%)] to-[hsl(0,60%,25%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,0,0,0.2)_0%,_transparent_60%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white/90 text-sm font-semibold tracking-wide">Mulai Sekarang</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight"
          >
            Siap Membuat Gym Anda{" "}
            <span className="relative inline-block">
              Profitable?
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed"
          >
            Konsultasi awal <span className="text-white font-bold">100% GRATIS</span> — hubungi kami sekarang.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/6283898082061"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-white text-[hsl(0,75%,42%)] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-2xl shadow-black/20"
            >
              <Phone className="w-5 h-5" />
              Hubungi via WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto"
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
              transition={{ delay: 0.6 + i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-5 text-center hover:bg-white/15 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-3">
                <c.icon className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-white text-sm block break-all">{c.main}</span>
              <span className="text-xs text-white/60 mt-1 block">{c.sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
