import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Shield, Zap, Puzzle, Server, Globe, Code2,
  ArrowRight, Github, CreditCard, RefreshCw, Webhook,
  Terminal, Sparkles, Users, Download, Star, ChevronRight,
  Lock, BarChart3
} from "lucide-react";
import logo from "@/assets/logo.png";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const stats = [
  { label: "Open Source", value: "100%", icon: Github },
  { label: "Uptime Goal", value: "24/7", icon: Zap },
  { label: "Gateways", value: "15+", icon: Globe },
  { label: "Community", value: "Growing", icon: Users },
];

const bentoFeatures = [
  { icon: Puzzle, title: "Plugin Architecture", desc: "WordPress-like extensibility. Build anything.", size: "lg", color: "primary" },
  { icon: Server, title: "Self-Hosted", desc: "Your data stays on your server. Always.", size: "sm", color: "secondary" },
  { icon: Shield, title: "Enterprise Security", desc: "2FA, encrypted core, and granular access control.", size: "sm", color: "accent" },
  { icon: Globe, title: "Multi-Gateway", desc: "bKash, Nagad, Rocket, Binance — connect any payment provider via plugins.", size: "lg", color: "primary" },
  { icon: Zap, title: "SMS Automation", desc: "Real-time verification via companion app.", size: "sm", color: "accent" },
  { icon: Code2, title: "REST API", desc: "Developer-first with full documentation.", size: "sm", color: "secondary" },
  { icon: Lock, title: "Tolerance System", desc: "Accept payments within flexible range.", size: "sm", color: "primary" },
  { icon: BarChart3, title: "Analytics", desc: "Real-time stats and reporting dashboard.", size: "sm", color: "accent" },
];

const codeSnippet = `// Initialize checkout
const response = await fetch(
  'https://your-domain.com/api/checkout/redirect',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'MHS-PIPRAPAY-API-KEY': api_key
    },
    body: JSON.stringify({
      full_name: 'Customer Name',
      amount: '500',
      currency: 'BDT',
      return_url: 'https://yoursite.com/thanks',
      webhook_url: 'https://yoursite.com/webhook'
    })
  }
);

const { pp_id, pp_url } = await response.json();
// Redirect user to pp_url`;

const marqueeItems = [
  "bKash", "Nagad", "Rocket", "Binance", "Aamarpay", "ShurjoPay",
  "WHMCS", "WooCommerce", "WordPress", "Blesta",
  "bKash", "Nagad", "Rocket", "Binance", "Aamarpay", "ShurjoPay",
  "WHMCS", "WooCommerce", "WordPress", "Blesta",
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <Layout>
      {/* ====== HERO ====== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated orbs */}
        <div className="orb orb-cyan w-[500px] h-[500px] top-[10%] left-[5%] animate-float-slow" />
        <div className="orb orb-purple w-[600px] h-[600px] top-[20%] right-[-10%] animate-float" />
        <div className="orb orb-magenta w-[400px] h-[400px] bottom-[5%] left-[30%] animate-float-slow" style={{ animationDelay: "2s" }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Orbiting circles decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden lg:block pointer-events-none">
          <div className="absolute inset-0 rounded-full border border-border/10 animate-spin-slow" />
          <div className="absolute inset-8 rounded-full border border-border/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
          <div className="absolute inset-16 rounded-full border border-border/10 animate-spin-slow" style={{ animationDuration: "30s" }} />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-4 relative z-10"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-5xl mx-auto"
          >
            {/* Logo + Badge Row */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 mb-10 justify-center">
              <motion.img
                src={logo}
                alt="Anirban Pay"
                className="h-16 w-16 lg:h-20 lg:w-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <span className="tag tag-primary">
                  <Sparkles size={12} /> Open Source
                </span>
                <span className="tag tag-secondary">
                  Forked from PipraPay
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={fadeUp} className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-2 text-balance">
                <span className="block text-foreground">Payment Gateway</span>
                <span className="block gradient-text">That Never Dies</span>
              </h1>
              <p className="text-lg text-muted-foreground mt-2 font-display">
                অনির্বাণ — <em className="text-foreground/70">The Eternal Flame</em>
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.p variants={fadeUp} className="text-center text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-8 leading-relaxed">
              Self-hosted, plugin-powered payment automation. Accept payments through any gateway,
              automate workflows, and maintain complete control — <strong className="text-foreground">forever free</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                to="/docs"
                className="liquid-button group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-primary-foreground overflow-hidden"
              >
                <span className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "var(--gradient-accent)" }} />
                <span className="relative z-10 flex items-center gap-2">Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
              </Link>
              <a
                href="https://github.com/anirbanpay/anirbanpay"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-pill inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-foreground hover:border-primary/20 transition-all duration-300"
              >
                <Github size={18} /> View Source
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 lg:gap-10 mt-16">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl liquid-pill flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <s.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ====== GATEWAY MARQUEE ====== */}
      <section className="py-12 border-y border-border/20 overflow-hidden">
        <div className="flex items-center animate-marquee" style={{ width: "fit-content" }}>
          {marqueeItems.map((item, i) => (
            <span key={i} className="mx-8 text-sm font-medium text-muted-foreground/50 whitespace-nowrap uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ====== BENTO FEATURES ====== */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/50" />
              <span className="tag tag-primary"><Sparkles size={12} /> Features</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/50" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-balance">
              Built for <span className="gradient-text">serious automation</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {bentoFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`bento-card group ${f.size === "lg" ? "lg:col-span-2" : ""}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
                  f.color === "primary" ? "bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)]"
                  : f.color === "secondary" ? "bg-secondary/10 group-hover:bg-secondary/20"
                  : "bg-accent/10 group-hover:bg-accent/20"
                }`}>
                  <f.icon size={20} className={
                    f.color === "primary" ? "text-primary"
                    : f.color === "secondary" ? "text-secondary"
                    : "text-accent"
                  } />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CODE TERMINAL ====== */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="tag tag-primary mb-4 inline-flex"><Terminal size={12} /> Developer First</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Integrate in <span className="gradient-text">minutes</span>,
                not days
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Clean RESTful APIs for checkout, payment verification, refunds, and real-time webhooks.
                Simple header-based authentication. Comprehensive sandbox for testing.
              </p>
              <div className="space-y-4">
                {[
                  { icon: CreditCard, text: "Redirect Checkout API", path: "/api/checkout/redirect" },
                  { icon: RefreshCw, text: "Verify & Refund APIs", path: "/api/verify-payment" },
                  { icon: Webhook, text: "Real-time Webhooks", path: "Instant notifications" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4 group">
                    <div className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-all">
                      <item.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{item.text}</div>
                      <code className="text-xs text-muted-foreground font-mono">{item.path}</code>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/docs"
                className="inline-flex items-center gap-2 mt-8 text-primary font-medium text-sm hover:gap-3 transition-all"
              >
                Explore full documentation <ChevronRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl pointer-events-none" />
              <div className="code-window relative">
                <div className="code-window-bar">
                  <div className="code-window-dot bg-accent/60" />
                  <div className="code-window-dot bg-secondary/60" />
                  <div className="code-window-dot bg-primary/60" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">checkout.js</span>
                </div>
                <pre className="p-6 overflow-x-auto text-[13px] font-mono leading-relaxed text-muted-foreground">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== PLUGIN ECOSYSTEM ====== */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="tag tag-accent mb-4 inline-flex"><Puzzle size={12} /> Ecosystem</span>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              A thriving <span className="gradient-text-purple">plugin marketplace</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4">
              Build plugins, sell them on our store, and keep <strong className="text-foreground">70%</strong> of every sale.
              We handle reviews, hosting, and distribution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Download, title: "Install & Go", desc: "One-click plugin installation from the admin panel." },
              { icon: Star, title: "Quality Reviewed", desc: "Every plugin passes security review before listing." },
              { icon: Users, title: "70/30 Revenue Split", desc: "Developers earn 70%. We cover maintenance and infra." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bento-card text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/plugins"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-border/60 text-foreground hover:bg-muted/30 transition-all"
            >
              Browse Plugin Store <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            {/* Background */}
            <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="orb w-[400px] h-[400px] top-[-100px] right-[-100px] bg-primary-foreground/5 blur-[80px]" />

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-primary-foreground mb-5 text-balance"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to ignite your payments?
              </motion.h2>
              <p className="text-primary-foreground/70 max-w-lg mx-auto mb-10 text-lg">
                Deploy on your server in minutes. Join the open-source payment revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/docs"
                  className="px-8 py-4 rounded-full font-semibold bg-primary-foreground text-primary hover:opacity-90 transition-opacity"
                >
                  Read the Docs
                </Link>
                <Link
                  to="/plugins"
                  className="px-8 py-4 rounded-full font-semibold border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                >
                  Explore Plugins
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
