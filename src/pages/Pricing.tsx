import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Self-Hosted",
    price: "Free",
    period: "forever",
    desc: "Full-featured, deploy on your own server.",
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
    annual: "৳800/year (save 33%)",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Tailored solutions for large organizations.",
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
  },
];

const Pricing = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">transparent pricing</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Core platform is free forever. Choose cloud hosting for a hassle-free experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "gradient-border"
                  : "glass-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1">
                  <Sparkles size={12} /> Popular
                </div>
              )}
              <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              {plan.annual && (
                <p className="text-xs text-primary mb-2">{plan.annual}</p>
              )}
              <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={plan.href}
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Plugin Revenue */}
    <section className="section-padding bg-card/30">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">
            Earn from your <span className="gradient-text">plugins</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Developers can create and sell plugins on the Anirban Pay Plugin Store.
            You keep <strong className="text-foreground">70%</strong> of every sale.
            We retain 30% to cover platform maintenance, security reviews, and infrastructure.
          </p>
          <Link
            to="/plugins"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Visit Plugin Store
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
