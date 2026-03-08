import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <img src={logo} alt="Anirban Pay" className="h-8 w-8" />
            <span className="text-lg font-bold gradient-text">Anirban Pay</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The eternal flame of payment automation. Self-hosted, open-source, and forever free.
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            অনির্বাণ — যা কখনো নেভে না।
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-foreground">Product</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link>
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            <Link to="/plugins" className="text-sm text-muted-foreground hover:text-primary transition-colors">Plugin Store</Link>
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentation</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-foreground">Community</h4>
          <div className="flex flex-col gap-2.5">
            <a href="https://github.com/anirbanpay" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub</a>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-foreground">Legal</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Anirban Pay. Forked from <a href="https://piprapay.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PipraPay</a>. Built by{" "}
          <a href="https://softsasi.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Softsasi</a> &{" "}
          <a href="https://builderhall.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Builder Hall</a>.
        </p>
        <p className="text-xs text-muted-foreground">Open Source · Forever Free</p>
      </div>
    </div>
  </footer>
);

export default Footer;
