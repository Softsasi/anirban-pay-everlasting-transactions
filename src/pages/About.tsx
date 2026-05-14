import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ExternalLink, Sparkles, Github, Heart, Users } from "lucide-react";
import logo from "@/assets/logo.png";

const companies = [
  { name: "Softsasi", url: "https://softsasi.com", role: "Co-Founder & Development Partner", desc: "Leading the development and technical architecture of Anirban Pay." },
  { name: "Builder Hall", url: "https://builderhall.com", role: "Co-Founder & Infrastructure Partner", desc: "Providing infrastructure, deployment, and scalability solutions." },
];

const About = () => (
  <Layout>
    <SEO
      title="About – Anirban Pay"
      description="The story, mission, and team behind Anirban Pay — a forever-free, open-source payment automation platform."
      path="/about"
    />
    <section className="relative section-padding overflow-hidden">
      <div className="ambient-shape ambient-indigo w-[400px] h-[400px] top-[5%] right-[10%]" />
      <div className="ambient-shape ambient-amber w-[300px] h-[300px] bottom-[15%] left-[5%]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.05]" />

      <div className="container mx-auto relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-20">
            <motion.img
              src={logo}
              alt="Anirban Pay"
              className="h-20 w-20 mx-auto mb-6"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="tag tag-primary mb-4 inline-flex"><Sparkles size={11} /> Our Story</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 text-balance">
              About <span className="gradient-text">Anirban Pay</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <strong className="text-foreground">অনির্বাণ</strong> means "the eternal flame" — that which never extinguishes.
              For a 24/7 payment gateway, it's the perfect metaphor.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-12 mb-8"
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center shrink-0">
                <Heart size={22} className="text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Anirban Pay is an open-source, self-hosted payment automation platform officially forked from{" "}
                    <a href="https://piprapay.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PipraPay</a>.
                    It's built to empower developers, businesses, and freelancers with full control over their payment workflows.
                  </p>
                  <p>
                    This project is a collaboration between two companies — united by the vision
                    of creating accessible, free, and powerful payment infrastructure for everyone.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {companies.map((c, i) => (
              <motion.a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-hover p-8 group block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/8 flex items-center justify-center group-hover:bg-secondary/15 transition-colors">
                    <Users size={18} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold flex items-center gap-2 group-hover:text-primary transition-colors">
                      {c.name} <ExternalLink size={13} className="text-muted-foreground" />
                    </h3>
                    <p className="text-xs text-muted-foreground">{c.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.a>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-5">
                <Github size={20} className="text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-3">Open Source</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Fully open source and community-driven. We welcome contributions from developers worldwide.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/anirbanpay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Github size={14} /> Organization
                </a>
                <a
                  href="https://github.com/anirbanpay/anirbanpay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/40 text-sm font-medium text-foreground hover:bg-muted/30 transition-all"
                >
                  Main Repo
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/8 flex items-center justify-center mb-5">
                <Sparkles size={20} className="text-accent" />
              </div>
              <h2 className="text-xl font-bold mb-3">Forked from PipraPay</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Officially forked from PipraPay, a self-hosted payment automation platform by QubePlug Bangladesh.
                All documentation, APIs, and plugin architecture are fully compatible with the PipraPay ecosystem.
                We extend our gratitude to the PipraPay team for building the foundation we stand on.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;