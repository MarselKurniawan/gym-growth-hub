import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontak" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Mulai Sekarang</span>
          <h2 className="text-4xl md:text-6xl mt-3 mb-6 text-foreground">
            SIAP MEMBUAT GYM ANDA{" "}
            <span className="text-primary">PROFITABLE?</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body mb-10 max-w-xl mx-auto">
            Jangan tunggu sampai bisnis Anda makin rugi. Konsultasi awal <strong className="text-foreground">100% GRATIS</strong> — 
            hubungi kami sekarang dan mulai transformasi gym Anda.
          </p>

          <a
            href="https://wa.me/6283898082061"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold text-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            <Phone className="w-6 h-6" />
            Hubungi Kami via WhatsApp
          </a>

          {/* Contact info */}
          <div className="grid sm:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground">0838 9808 2061</span>
              <span className="text-sm text-muted-foreground">WhatsApp / Telepon</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground text-sm">tonifittop2222@gmail.com</span>
              <span className="text-sm text-muted-foreground">Email</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground text-sm text-center">MTH Square Block A4 A, Lt. UG</span>
              <span className="text-sm text-muted-foreground">Jakarta Timur</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
