import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontak" className="py-20 md:py-28 section-soft">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Mulai Sekarang</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-5 text-foreground">
            Siap Membuat Gym Anda Profitable?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Konsultasi awal <span className="text-foreground font-semibold">100% GRATIS</span> — hubungi kami sekarang.
          </p>

          <a
            href="https://wa.me/6283898082061"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            <Phone className="w-5 h-5" />
            Hubungi via WhatsApp
          </a>

          <div className="grid sm:grid-cols-3 gap-6 mt-14">
            {[
              { icon: Phone, main: "0838 9808 2061", sub: "WhatsApp / Telepon" },
              { icon: Mail, main: "tonifittop2222@gmail.com", sub: "Email" },
              { icon: MapPin, main: "MTH Square Block A4 A", sub: "Jakarta Timur" },
            ].map((c) => (
              <div key={c.sub} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <c.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold text-foreground text-sm">{c.main}</span>
                <span className="text-xs text-muted-foreground">{c.sub}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
