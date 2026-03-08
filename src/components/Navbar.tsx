import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "Docs", to: "/docs" },
  { label: "Plugins", to: "/plugins" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/50 bg-background/70 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-18 items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            src={logo}
            alt="Anirban Pay"
            className="h-10 w-10"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="flex flex-col">
            <span className="text-base font-bold gradient-text leading-tight">Anirban Pay</span>
            <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">অনির্বাণ পে</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-0.5 rounded-full border border-border/40 bg-muted/30 backdrop-blur-xl px-1.5 py-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.to
                    ? "bg-primary/10 text-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/anirbanpay/anirbanpay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300"
          >
            <Github size={16} /> GitHub
          </a>
          <Link
            to="/docs"
            className="relative px-5 py-2 text-sm font-semibold rounded-full text-primary-foreground overflow-hidden group"
          >
            <span className="absolute inset-0 rounded-full" style={{ background: "var(--gradient-primary)" }} />
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "var(--gradient-accent)" }} />
            <span className="relative z-10">Get Started</span>
          </Link>
        </div>

        <button
          className="lg:hidden text-foreground p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border/30 bg-background/95 backdrop-blur-2xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === link.to
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-4 pt-4 border-t border-border/30">
                <a
                  href="https://github.com/anirbanpay/anirbanpay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2.5 text-sm font-medium rounded-xl border border-border/60 text-muted-foreground"
                >
                  GitHub
                </a>
                <Link
                  to="/docs"
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center px-4 py-2.5 text-sm font-semibold rounded-xl text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
