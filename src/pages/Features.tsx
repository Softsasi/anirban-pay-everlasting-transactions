import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import {
  Shield, Zap, Puzzle, Server, Globe, Code2, Smartphone, Palette,
  BarChart3, Lock, RefreshCw, Bell
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const features = [
  { icon: Puzzle, title: "Plugin System", desc: "WordPress-like architecture. Install, activate, and manage plugins from the admin panel." },
  { icon: Palette, title: "Theme Support", desc: "Custom themes for checkout pages, invoices, and the entire UI." },
  { icon: Server, title: "100% Self-Hosted", desc: "Run on your own server. No third-party data sharing. Full sovereignty." },
  { icon: Globe, title: "Multi-Gateway Support", desc: "bKash, Nagad, Rocket, Aamarpay, ShurjoPay, Binance, and many more." },
  { icon: Zap, title: "SMS Automation", desc: "Real-time SMS-to-API verification using the companion Android app." },
  { icon: Shield, title: "Two-Factor Auth", desc: "Protect your admin panel with 2FA plugin for enhanced security." },
  { icon: Code2, title: "RESTful APIs", desc: "Checkout, verify, refund — all through simple, well-documented endpoints." },
  { icon: RefreshCw, title: "Auto Verification", desc: "Cronjob-based pending payment verification. No manual work." },
  { icon: Bell, title: "Push Notifications", desc: "Real-time admin alerts for transactions and invoice activities." },
  { icon: BarChart3, title: "Analytics & Reports", desc: "Transaction statistics, gateway performance, and detailed reports." },
  { icon: Lock, title: "Tolerance System", desc: "Accept payments within a flexible range automatically." },
  { icon: Smartphone, title: "Mobile App", desc: "Official companion app for SMS-based transaction verification." },
];

const Features = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Features</span> that empower
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to run a complete payment automation platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card p-6 glow-hover group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Features;
