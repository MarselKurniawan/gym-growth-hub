import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";
import TopBanner from "@/components/TopBanner";

const navLinks = ["Tentang", "Layanan", "Keunggulan", "Proses", "Kontak"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBanner visible={bannerVisible} onClose={() => setBannerVisible(false)} />
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`transition-all duration-300 ${
            scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-background"
          }`}
        >
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <img src={logo} alt="FIT TOP" className="h-10 w-auto" />

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </button>
              ))}
              <a
                href="https://wa.me/6283898082061"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Konsultasi Gratis
              </a>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-background border-t border-border px-4 py-4 space-y-3"
            >
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="block w-full text-left text-foreground font-medium py-2"
                >
                  {link}
                </button>
              ))}
              <a
                href="https://wa.me/6283898082061"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold text-sm justify-center"
              >
                <Phone className="w-4 h-4" />
                Konsultasi Gratis
              </a>
            </motion.div>
          )}
        </motion.nav>
      </div>
      {/* Spacer to push content below fixed header */}
      <div className={bannerVisible ? "h-[100px] md:h-[104px]" : "h-[56px] md:h-[64px]"} />
    </>
  );
};

export default Navbar;
