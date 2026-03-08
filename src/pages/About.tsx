import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ExternalLink } from "lucide-react";

const companies = [
  { name: "Softsasi", url: "https://softsasi.com", role: "Co-Founder & Development Partner" },
  { name: "Builder Hall", url: "https://builderhall.com", role: "Co-Founder & Infrastructure Partner" },
];

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Anirban Pay</span>
          </h1>

          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">অনির্বাণ (Anirban)</strong> means "the eternal flame" — that which never extinguishes.
                For a payment gateway that provides 24/7 uninterrupted service, it's the perfect metaphor.
              </p>
              <p>
                Anirban Pay is an open-source, self-hosted payment automation platform officially forked from{" "}
                <a href="https://piprapay.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PipraPay</a>.
                It's built to empower developers, businesses, and freelancers with full control over their payment workflows.
              </p>
              <p>
                This project is a collaboration between two companies — Softsasi and Builder Hall — united by the vision
                of creating accessible, free, and powerful payment infrastructure for everyone.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {companies.map((c) => (
              <motion.a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 glow-hover group block"
              >
                <h3 className="text-lg font-semibold mb-1 flex items-center gap-2 group-hover:text-primary transition-colors">
                  {c.name} <ExternalLink size={14} />
                </h3>
                <p className="text-sm text-muted-foreground">{c.role}</p>
              </motion.a>
            ))}
          </div>

          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Open Source</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Anirban Pay is fully open source and community-driven. Our code lives on GitHub, and we welcome
              contributions from developers around the world.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/anirbanpay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                GitHub Organization
              </a>
              <a
                href="https://github.com/anirbanpay/anirbanpay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
              >
                Main Repository
              </a>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold mb-4">Forked from PipraPay</h2>
            <p className="text-muted-foreground leading-relaxed">
              Anirban Pay is officially forked from PipraPay, a self-hosted payment automation platform by QubePlug Bangladesh.
              All documentation, APIs, and plugin architecture are compatible with the PipraPay ecosystem.
              We extend our gratitude to the PipraPay team for building the foundation this project stands on.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
