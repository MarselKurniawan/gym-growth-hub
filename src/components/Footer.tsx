import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-hero-dark-foreground/10 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="FIT TOP" className="h-10 w-auto" />
            <div>
              <div className="font-display text-lg text-hero-dark-foreground">FIT TOP MANAGEMENT</div>
              <div className="text-xs text-hero-dark-foreground/40">PT. Dua Serumpun Sukses</div>
            </div>
          </div>
          <p className="text-sm text-hero-dark-foreground/40">
            © {new Date().getFullYear()} FIT TOP Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
