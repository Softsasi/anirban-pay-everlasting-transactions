import { Link } from "react-router-dom";
import { Github, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="relative border-t border-border/20 liquid-glass-nav mt-8">
    <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
    <div className="container mx-auto px-4 py-20 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-5 group">
            <img src={logo} alt="Anirban Pay" className="h-10 w-10" />
            <div>
              <span className="text-lg font-bold gradient-text block leading-tight">Anirban Pay</span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase">যা কখনো নেভে না</span>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
            The eternal flame of payment automation. Self-hosted, open-source, plugin-powered — and forever free.
          </p>
          <a
            href="https://github.com/anirbanpay/anirbanpay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-border transition-all"
          >
            <Github size={14} /> Star on GitHub
          </a>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-5">Product</h4>
          <div className="flex flex-col gap-3">
            {[
              { to: "/features", label: "Features" },
              { to: "/pricing", label: "Pricing" },
              { to: "/plugins", label: "Plugin Store" },
              { to: "/docs", label: "Documentation" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">{l.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-5">Community</h4>
          <div className="flex flex-col gap-3">
            <a href="https://github.com/anirbanpay" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">GitHub</a>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Blog</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">About Us</Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-5">Legal</h4>
          <div className="flex flex-col gap-3">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
          Built with <Heart size={12} className="text-accent" /> by{" "}
          <a href="https://softsasi.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Softsasi</a> &{" "}
          <a href="https://builderhall.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Builder Hall</a>
        </p>
        <p className="text-xs text-muted-foreground">
          Forked from <a href="https://piprapay.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PipraPay</a> · © {new Date().getFullYear()} Anirban Pay
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
