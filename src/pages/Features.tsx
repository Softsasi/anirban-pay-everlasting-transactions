import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import {
  Shield, Zap, Puzzle, Server, Globe, Code2, Smartphone, Palette,
  BarChart3, Lock, RefreshCw, Bell, Sparkles, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Puzzle, title: "Plugin System", desc: "WordPress-like architecture. Install, activate, and manage plugins from the admin panel. Build your own plugins with our developer SDK.", color: "primary", size: "lg" },
  { icon: Palette, title: "Theme Support", desc: "Custom themes for checkout pages, invoices, and the entire UI.", color: "secondary", size: "sm" },
  { icon: Server, title: "100% Self-Hosted", desc: "Run on your own server. No third-party data sharing. Full sovereignty over your financial data.", color: "accent", size: "sm" },
  { icon: Globe, title: "Multi-Gateway", desc: "bKash, Nagad, Rocket, Aamarpay, ShurjoPay, Binance, and many more via community-built plugins.", color: "primary", size: "lg" },
  { icon: Zap, title: "SMS Automation", desc: "Real-time SMS-to-API verification using the companion Android app.", color: "accent", size: "sm" },
  { icon: Shield, title: "Two-Factor Auth", desc: "Protect your admin panel with 2FA for enhanced security.", color: "secondary", size: "sm" },
  { icon: Code2, title: "RESTful APIs", desc: "Checkout, verify, refund — all through simple, well-documented endpoints with sandbox testing environment.", color: "primary", size: "lg" },
  { icon: RefreshCw, title: "Auto Verification", desc: "Cronjob-based pending payment verification. Zero manual work.", color: "secondary", size: "sm" },
  { icon: Bell, title: "Push Notifications", desc: "Real-time admin alerts for transactions and invoice activities.", color: "accent", size: "sm" },
  { icon: BarChart3, title: "Analytics & Reports", desc: "Transaction statistics, gateway performance, and detailed reports.", color: "primary", size: "sm" },
  { icon: Lock, title: "Tolerance System", desc: "Accept payments within a flexible range automatically.", color: "secondary", size: "sm" },
  { icon: Smartphone, title: "Mobile App", desc: "Official companion app for SMS-based transaction verification.", color: "accent", size: "sm" },
];

const Features = () => (
  <Layout>
    {/* Hero */}
    <section className="relative section-padding overflow-hidden">
      <div className="orb orb-cyan w-[400px] h-[400px] top-[10%] right-[-5%]" />
      <div className="orb orb-purple w-[300px] h-[300px] bottom-[10%] left-[-5%]" />
      <div className="absolute inset-0 dot-pattern opacity-15" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="tag tag-primary mb-4 inline-flex"><Sparkles size={12} /> Capabilities</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 text-balance">
            Everything you need to
            <br />
            <span className="gradient-text">automate payments</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            A modular, extensible platform built for developers and businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`bento-card group ${f.size === "lg" ? "lg:col-span-2" : ""}`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
                f.color === "primary" ? "bg-primary/10 group-hover:bg-primary/20"
                : f.color === "secondary" ? "bg-secondary/10 group-hover:bg-secondary/20"
                : "bg-accent/10 group-hover:bg-accent/20"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
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

export default Features;
