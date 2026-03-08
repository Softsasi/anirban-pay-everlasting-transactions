import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Check, Sparkles, ArrowRight, Puzzle } from "lucide-react";

const plans = [
  {
    name: "Self-Hosted",
    price: "Free",
    period: "forever",
    desc: "Full-featured. Deploy on your own server.",
    features: [
      "Unlimited transactions",
      "All core features",
      "Plugin & theme system",
      "REST API access",
      "Community support",
      "Full data ownership",
    ],
    cta: "Get Started",
    href: "/docs",
    highlighted: false,
    color: "primary",
  },
  {
    name: "Cloud Hosted",
    price: "৳100",
    period: "/month",
    desc: "We host and manage everything for you.",
    features: [
      "Everything in Self-Hosted",
      "Managed hosting & SSL",
      "Automatic updates",
      "Daily backups",
      "Priority support",
      "99.9% uptime SLA",
    ],
    cta: "Coming Soon",
    href: "#",
    highlighted: true,
    annual: "৳800/year — save 33%",
    color: "accent",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Tailored for large organizations.",
    features: [
      "Everything in Cloud",
      "Custom integrations",
      "Dedicated support team",
      "SLA guarantees",
      "White-label options",
      "On-premise deployment",
    ],
    cta: "Contact Us",
    href: "/about",
    highlighted: false,
    color: "secondary",
  },
];

const Pricing = () => (
  <Layout>
    <section className="relative section-padding overflow-hidden">
      <div className="orb orb-cyan w-[400px] h-[400px] top-[5%] left-[10%]" />
      <div className="orb orb-purple w-[400px] h-[400px] bottom-[10%] right-[5%]" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="tag tag-primary mb-4 inline-flex"><Sparkles size={12} /> Pricing</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 text-balance">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Core platform is free forever. Choose cloud for a hassle-free experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.highlighted ? "gradient-border-card" : "glass-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  <Sparkles size={11} /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-base font-semibold mb-3 text-muted-foreground uppercase tracking-wide">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground text-sm">{plan.period}</span>}
                </div>
                {plan.annual && (
                  <p className="text-xs text-primary mt-2 font-medium">{plan.annual}</p>
                )}
                <p className="text-sm text-muted-foreground mt-3">{plan.desc}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.href}
                className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "text-primary-foreground hover:opacity-90"
                    : "border border-border/60 text-foreground hover:bg-muted/30 hover:border-border"
                }`}
                style={plan.highlighted ? { background: "var(--gradient-primary)" } : {}}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Plugin Revenue */}
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 text-center max-w-3xl mx-auto"
        >
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Puzzle size={24} className="text-accent" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-balance">
            Earn from your <span className="gradient-text-purple">plugins</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
            Create and sell plugins on the Anirban Pay Plugin Store.
            You keep <strong className="text-foreground">70%</strong> of every sale.
            We retain 30% for platform maintenance, security reviews, and infrastructure.
          </p>
          <Link
            to="/plugins"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-accent/30 text-accent hover:bg-accent/5 transition-all"
          >
            Visit Plugin Store <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
