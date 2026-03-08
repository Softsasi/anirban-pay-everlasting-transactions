import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Shield, Zap, Puzzle, Server, Globe, Code2,
  ArrowRight, Github, CreditCard, RefreshCw, Webhook, FileCode2
} from "lucide-react";
import logo from "@/assets/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const features = [
  { icon: Puzzle, title: "Plugin Architecture", desc: "WordPress-like plugin system. Build, extend, and customize everything." },
  { icon: Server, title: "Self-Hosted", desc: "Your server, your data. Complete privacy and zero third-party dependency." },
  { icon: Shield, title: "Secure by Design", desc: "2FA, encrypted core, and enterprise-grade security out of the box." },
  { icon: Globe, title: "Multi-Gateway", desc: "bKash, Nagad, Rocket, Binance, and more via community plugins." },
  { icon: Zap, title: "Real-Time Automation", desc: "SMS-to-API verification, webhooks, and automated transaction processing." },
  { icon: Code2, title: "Developer First", desc: "RESTful APIs, webhook events, and full documentation for developers." },
];

const apiEndpoints = [
  { icon: CreditCard, name: "Redirect Checkout", method: "POST", path: "/api/checkout/redirect" },
  { icon: RefreshCw, name: "Verify Payment", method: "POST", path: "/api/verify-payment" },
  { icon: RefreshCw, name: "Refund Payment", method: "POST", path: "/api/refund-payment" },
  { icon: Webhook, name: "Webhook Events", method: "POST", path: "Your webhook URL" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden section-padding">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div custom={0} variants={fadeUp} className="flex justify-center mb-8">
            <img src={logo} alt="Anirban Pay" className="h-24 w-24 animate-float" />
          </motion.div>

          <motion.div custom={1} variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-xs font-medium text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Officially forked from PipraPay · Open Source
          </motion.div>

          <motion.h1 custom={2} variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="gradient-text">অনির্বাণ পে</span>
            <br />
            <span className="text-foreground">The Eternal Payment Gateway</span>
          </motion.h1>

          <motion.p custom={3} variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Self-hosted, plugin-powered payment automation that never sleeps.
            Accept payments, automate workflows, and own your data — forever free.
          </motion.p>

          <motion.div custom={4} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/docs"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity"
            >
              Get Started <ArrowRight size={18} />
            </Link>
            <a
              href="https://github.com/anirbanpay/anirbanpay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold border border-border text-foreground hover:bg-muted transition-colors"
            >
              <Github size={18} /> View on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to <span className="gradient-text">automate payments</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A modular, extensible platform built for developers and businesses alike.
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

    {/* API Preview */}
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="gradient-text">REST APIs</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Simple, secure endpoints for checkout, verification, refunds, and webhooks.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {apiEndpoints.map((ep, i) => (
            <motion.div
              key={ep.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card p-5 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <ep.icon size={18} className="text-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm">{ep.name}</h4>
                <code className="text-xs text-muted-foreground font-mono">{ep.path}</code>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-semibold">
                {ep.method}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
          >
            <FileCode2 size={16} /> Explore full API documentation
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl p-10 md:p-16 text-center"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to ignite your payments?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
              Join the open-source movement. Deploy Anirban Pay on your server in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/docs"
                className="px-8 py-3.5 rounded-xl font-semibold bg-primary-foreground text-primary hover:opacity-90 transition-opacity"
              >
                Read the Docs
              </Link>
              <Link
                to="/plugins"
                className="px-8 py-3.5 rounded-xl font-semibold border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                Browse Plugins
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
