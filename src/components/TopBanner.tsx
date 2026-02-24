import { useState } from "react";
import { X } from "lucide-react";

const TopBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="sticky top-0 z-[60] bg-primary text-primary-foreground text-center text-xs md:text-sm py-2 px-4 relative">
      <span>
        Percepat balik modal gym Anda jadi <strong>3 tahun</strong> — Konsultasi gratis sekarang!{" "}
        <a
          href="https://wa.me/6283898082061"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:opacity-80"
        >
          Hubungi Kami
        </a>
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TopBanner;
