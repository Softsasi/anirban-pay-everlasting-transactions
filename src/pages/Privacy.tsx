import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Shield } from "lucide-react";

const sections = [
  { title: "1. Introduction", content: "Anirban Pay (\"we\", \"our\", \"us\") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use our platform." },
  { title: "2. Information We Collect", content: "Since Anirban Pay is a self-hosted platform, we do not collect or store your data on our servers. All transaction data, API keys, and customer information remain on your own hosting infrastructure.\n\nFor cloud-hosted users, we collect only the information necessary to provide the hosting service, including account credentials and billing information." },
  { title: "3. Data Security", content: "We implement industry-standard security measures including encrypted core files, HTTPS enforcement, and support for two-factor authentication to protect your installation." },
  { title: "4. Third-Party Services", content: "Anirban Pay integrates with third-party payment gateways (bKash, Nagad, etc.). Each gateway has its own privacy policy. We encourage you to review their policies independently." },
  { title: "5. Cookies", content: "Our website may use cookies for analytics and improving user experience. You can disable cookies in your browser settings at any time." },
  { title: "6. Plugin Store", content: "When purchasing plugins, we collect payment information necessary to process transactions. Developer earnings and payouts are processed through secure channels." },
  { title: "7. Contact", content: "For privacy-related inquiries, reach out via our GitHub organization at github.com/anirbanpay." },
];

const Privacy = () => (
  <Layout>
    <SEO
      title="Privacy Policy – Anirban Pay"
      description="How Anirban Pay handles your data. Self-hosted by design — your data stays with you."
      path="/privacy"
    />
    <section className="relative section-padding overflow-hidden">
      <div className="orb orb-cyan w-[300px] h-[300px] top-[10%] right-[10%]" />
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <div className="container mx-auto relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Shield size={22} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Privacy Policy</span>
              </h1>
              <p className="text-sm text-muted-foreground">Last updated: March 2026</p>
            </div>
          </div>

          <div className="space-y-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-6 lg:p-8"
              >
                <h2 className="text-lg font-semibold text-foreground mb-3">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{s.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Privacy;
