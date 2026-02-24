import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="FIT TOP" className="h-8 w-auto" />
            <div>
              <div className="font-bold text-sm text-foreground">FIT TOP Management</div>
              <div className="text-xs text-muted-foreground">PT. Dua Serumpun Sukses</div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FIT TOP Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
