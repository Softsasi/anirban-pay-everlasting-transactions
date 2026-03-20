import { useRef } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import {
  Shield, Zap, Puzzle, Server, Globe, Code2, Smartphone, Palette,
  BarChart3, Lock, RefreshCw, Bell, Sparkles, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Puzzle, title: "Plugin System", desc: "WordPress-like architecture. Install, activate, and manage plugins from the admin panel. Build your own plugins with our developer SDK.", color: "primary" },
  { icon: Palette, title: "Theme Support", desc: "Custom themes for checkout pages, invoices, and the entire UI.", color: "secondary" },
  { icon: Server, title: "100% Self-Hosted", desc: "Run on your own server. No third-party data sharing. Full sovereignty over your financial data.", color: "accent" },
  { icon: Globe, title: "Multi-Gateway", desc: "bKash, Nagad, Rocket, Aamarpay, ShurjoPay, Binance, and many more via community-built plugins.", color: "primary" },
  { icon: Zap, title: "SMS Automation", desc: "Real-time SMS-to-API verification using the companion Android app.", color: "accent" },
  { icon: Shield, title: "Two-Factor Auth", desc: "Protect your admin panel with 2FA for enhanced security.", color: "secondary" },
  { icon: Code2, title: "RESTful APIs", desc: "Checkout, verify, refund — all through simple, well-documented endpoints with sandbox testing environment.", color: "primary" },
  { icon: RefreshCw, title: "Auto Verification", desc: "Cronjob-based pending payment verification. Zero manual work.", color: "secondary" },
  { icon: Bell, title: "Push Notifications", desc: "Real-time admin alerts for transactions and invoice activities.", color: "accent" },
  { icon: BarChart3, title: "Analytics & Reports", desc: "Transaction statistics, gateway performance, and detailed reports.", color: "primary" },
  { icon: Lock, title: "Tolerance System", desc: "Accept payments within a flexible range automatically.", color: "secondary" },
  { icon: Smartphone, title: "Mobile App", desc: "Official companion app for SMS-based transaction verification.", color: "accent" },
];

const Features = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <section className="relative section-padding overflow-hidden">
        <div className="ambient-shape ambient-indigo w-[400px] h-[400px] top-[10%] right-[-5%]" />
        <div className="ambient-shape ambient-blue w-[300px] h-[300px] bottom-[10%] left-[-5%]" />
        <div className="absolute inset-0 dot-pattern opacity-[0.06]" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <span className="tag tag-primary mb-4 inline-flex"><Sparkles size={11} /> Capabilities</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 text-balance">
              Everything you need to
              <br />
              <span className="gradient-text">automate payments</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              A modular, extensible platform built for developers and businesses.
            </p>
          </motion.div>

          {/* Horizontal snap-scroll */}
          <div ref={scrollRef} className="snap-scroll-x gap-4 pb-4 -mx-4 px-4 mb-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="w-[300px] md:w-[340px] bento-card group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
                  f.color === "primary" ? "bg-primary/8 group-hover:bg-primary/15"
                  : f.color === "secondary" ? "bg-secondary/8 group-hover:bg-secondary/15"
                  : "bg-accent/8 group-hover:bg-accent/15"
                }`}>
                  <f.icon size={20} className={
                    f.color === "primary" ? "text-primary"
                    : f.color === "secondary" ? "text-secondary"
                    : "text-accent"
                  } />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground/50 mb-12">← Scroll to explore all features →</p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View documentation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;