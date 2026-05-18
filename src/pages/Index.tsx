import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Shield, Zap, Puzzle, Server, Globe, Code2,
  ArrowRight, Github, CreditCard, RefreshCw, Webhook,
  Terminal, Sparkles, Users, Download, Star, ChevronRight,
  Lock, BarChart3, ArrowDown
} from "lucide-react";
import logo from "@/assets/logo.png";
import SEO from "@/components/SEO";

const indexJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Anirban Pay",
    url: "https://anirban-everlasting-pay.lovable.app",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Anirban Pay",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web, Linux",
    description:
      "Open-source, self-hosted, plugin-powered payment automation platform.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stats = [
  { label: "Open Source", value: "100%", icon: Github },
  { label: "Uptime Goal", value: "24/7", icon: Zap },
  { label: "Gateways", value: "15+", icon: Globe },
  { label: "Community", value: "Growing", icon: Users },
];

const features = [
  { icon: Puzzle, title: "Plugin Architecture", desc: "WordPress-like extensibility. Build anything.", color: "primary" },
  { icon: Server, title: "Self-Hosted", desc: "Your data stays on your server. Always.", color: "secondary" },
  { icon: Shield, title: "Enterprise Security", desc: "2FA, encrypted core, and granular access control.", color: "accent" },
  { icon: Globe, title: "Multi-Gateway", desc: "bKash, Nagad, Rocket, Binance — connect any provider.", color: "primary" },
  { icon: Zap, title: "SMS Automation", desc: "Real-time verification via companion app.", color: "accent" },
  { icon: Code2, title: "REST API", desc: "Developer-first with full documentation.", color: "secondary" },
  { icon: Lock, title: "Tolerance System", desc: "Accept payments within flexible range.", color: "primary" },
  { icon: BarChart3, title: "Analytics", desc: "Real-time stats and reporting dashboard.", color: "accent" },
];

const howItWorks = [
  { step: "01", title: "Deploy", desc: "Install on your server with one command. Full control from day one." },
  { step: "02", title: "Configure", desc: "Add your payment gateways through the plugin system. bKash, Nagad, and more." },
  { step: "03", title: "Integrate", desc: "Use our REST API to create checkouts, verify payments, and handle webhooks." },
  { step: "04", title: "Automate", desc: "SMS verification, cronjob checks, push notifications — all built in." },
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
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <Layout>
      <SEO
        title="Anirban Pay – The Eternal Payment Gateway"
        description="Open-source, self-hosted payment automation. Plugin-powered, developer-friendly, forever free. Accept payments and own your data."
        path="/"
        jsonLd={indexJsonLd}
      />
      {/* ====== MINIMAL CENTERED HERO ====== */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center overflow-hidden pt-20 pb-16">
        {/* Ambient glow */}
        <div className="ambient-shape ambient-indigo w-[700px] h-[700px] top-[-15%] left-1/2 -translate-x-1/2 animate-float-slow opacity-60" />
        <div className="ambient-shape ambient-amber w-[420px] h-[420px] bottom-[-10%] right-[5%] animate-float opacity-50" />
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />

        {/* Floating glass pills — visual ambience, not text-heavy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hidden lg:flex absolute top-[22%] left-[6%] liquid-glass rounded-2xl px-4 py-3 items-center gap-3 animate-float-slow"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest">bKash</div>
            <div className="text-sm font-bold text-foreground">৳1,200 <span className="text-[10px] text-accent ml-1">✓</span></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="hidden lg:flex absolute top-[32%] right-[7%] liquid-glass rounded-2xl px-4 py-3 items-center gap-3 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Nagad</div>
            <div className="text-sm font-bold text-foreground">৳500 <span className="text-[10px] text-accent ml-1">✓</span></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden lg:flex absolute bottom-[22%] left-[10%] liquid-glass rounded-full px-4 py-2 items-center gap-2 animate-float"
        >
          <Zap size={12} className="text-accent" />
          <span className="text-xs font-medium text-foreground">98.6% uptime</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="hidden lg:flex absolute bottom-[28%] right-[12%] liquid-glass rounded-full px-4 py-2 items-center gap-2 animate-float-slow"
          style={{ animationDelay: "2s" }}
        >
          <Github size={12} className="text-primary" />
          <span className="text-xs font-medium text-foreground">100% open source</span>
        </motion.div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-4 relative z-10"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8">
              <span className="tag tag-primary"><Sparkles size={11} /> Open source · forever free</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-foreground">The payment gateway </span>
              <span className="gradient-text italic font-display">that never dies.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10"
            >
              Self-hosted. Plugin-powered. Yours forever.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                to="/docs"
                className="liquid-button group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-primary-foreground overflow-hidden"
              >
                <span className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
                <span className="relative z-10 flex items-center gap-2">Start in 60 seconds <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
              </Link>
              <a
                href="https://github.com/anirbanpay/anirbanpay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                <Github size={16} /> View on GitHub
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={18} className="text-muted-foreground/40" />
        </motion.div>
      </section>

      {/* ====== GATEWAY MARQUEE ====== */}
      <section className="py-10 border-y border-border/15 overflow-hidden">
        <div className="flex items-center animate-marquee" style={{ width: "fit-content" }}>
          {marqueeItems.map((item, i) => (
            <span key={i} className="mx-8 text-sm font-medium text-muted-foreground/40 whitespace-nowrap uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ====== HORIZONTAL SCROLL FEATURES ====== */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/40" />
              <span className="tag tag-primary"><Sparkles size={11} /> Features</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/40" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-balance">
              Built for <span className="gradient-text">serious automation</span>
            </h2>
          </motion.div>

          {/* Horizontal snap-scroll cards */}
          <div className="snap-scroll-x gap-4 pb-4 -mx-4 px-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="w-[280px] md:w-[320px] bento-card group"
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
                <h3 className="text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== STAGGERED TIMELINE: HOW IT WORKS ====== */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="tag tag-accent mb-4 inline-flex"><Zap size={11} /> How It Works</span>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              From zero to <span className="gradient-text-amber">payments</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Gradient line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block" style={{ background: "var(--gradient-primary)" }} />

            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex items-center gap-6 mb-8 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="liquid-glass p-6 inline-block">
                    <span className="text-xs font-bold text-accent tracking-widest">{item.step}</span>
                    <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-10 h-10 rounded-full liquid-pill items-center justify-center shrink-0 z-10">
                  <span className="text-xs font-bold text-primary">{item.step}</span>
                </div>
                <div className="flex-1 hidden md:block" />
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
              transition={{ duration: 0.7 }}
            >
              <span className="tag tag-primary mb-4 inline-flex"><Terminal size={11} /> Developer First</span>
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
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-2xl bg-primary/3 blur-2xl pointer-events-none" />
              <div className="code-window relative">
                <div className="code-window-bar">
                  <div className="code-window-dot bg-accent/60" />
                  <div className="code-window-dot bg-primary/50" />
                  <div className="code-window-dot bg-secondary/50" />
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
            <span className="tag tag-accent mb-4 inline-flex"><Puzzle size={11} /> Ecosystem</span>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              A thriving <span className="gradient-text-amber">plugin marketplace</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4">
              Build plugins, sell them on our store, and keep <strong className="text-foreground">70%</strong> of every sale.
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
                <div className="w-12 h-12 rounded-2xl bg-accent/8 flex items-center justify-center mx-auto mb-4">
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-border/50 text-foreground hover:bg-muted/30 transition-all"
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
            className="relative overflow-hidden rounded-2xl liquid-glass"
          >
            <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
            <div className="absolute inset-0 grid-pattern opacity-[0.06]" />

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