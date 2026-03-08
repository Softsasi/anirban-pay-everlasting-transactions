import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { FileText } from "lucide-react";

const sections = [
  { title: "1. Acceptance of Terms", content: "By using Anirban Pay, you agree to these terms and conditions. If you do not agree, please do not use the platform." },
  { title: "2. License", content: "Anirban Pay is open-source software forked from PipraPay. The core platform is free to use, modify, and distribute under the applicable open-source license. Some premium plugins and themes may have separate licensing terms." },
  { title: "3. Self-Hosted Responsibility", content: "Users who self-host Anirban Pay are responsible for their own server security, data protection, and compliance with local laws and regulations regarding payment processing." },
  { title: "4. Plugin Store", content: "Developers may submit plugins to the Anirban Pay Plugin Store. The platform retains 30% of plugin sales to cover maintenance, security reviews, and infrastructure costs. Developers receive 70% of each sale.\n\nAll plugins must pass security review before being listed. We reserve the right to remove plugins that violate our guidelines." },
  { title: "5. Cloud Hosting", content: "Cloud-hosted plans are billed monthly or annually. We reserve the right to modify pricing with 30 days notice. Service availability is subject to our infrastructure providers." },
  { title: "6. Limitation of Liability", content: "Anirban Pay is provided "as is" without warranty. We are not liable for any damages arising from the use of the platform, including but not limited to financial losses from payment processing errors." },
  { title: "7. Changes to Terms", content: "We may update these terms at any time. Continued use of the platform constitutes acceptance of the updated terms." },
  { title: "8. Contact", content: "Questions about these terms? Reach out via our GitHub organization at github.com/anirbanpay." },
];

const Terms = () => (
  <Layout>
    <section className="relative section-padding overflow-hidden">
      <div className="orb orb-purple w-[300px] h-[300px] top-[10%] left-[10%]" />
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <div className="container mx-auto relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
              <FileText size={22} className="text-secondary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Terms & Conditions</span>
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

export default Terms;
