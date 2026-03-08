import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Terms = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Terms & Conditions</span>
          </h1>
          <div className="glass-card p-8 space-y-6 text-muted-foreground leading-relaxed">
            <p><em>Last updated: March 2026</em></p>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By using Anirban Pay, you agree to these terms and conditions. If you do not agree, please do not use the platform.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. License</h2>
              <p>Anirban Pay is open-source software forked from PipraPay. The core platform is free to use, modify, and distribute under the applicable open-source license. Some premium plugins and themes may have separate licensing terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Self-Hosted Responsibility</h2>
              <p>Users who self-host Anirban Pay are responsible for their own server security, data protection, and compliance with local laws and regulations regarding payment processing.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Plugin Store</h2>
              <p>Developers may submit plugins to the Anirban Pay Plugin Store. The platform retains 30% of plugin sales to cover maintenance, security reviews, and infrastructure costs. Developers receive 70% of each sale.</p>
              <p className="mt-2">All plugins must pass security review before being listed. We reserve the right to remove plugins that violate our guidelines.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Cloud Hosting</h2>
              <p>Cloud-hosted plans are billed monthly or annually. We reserve the right to modify pricing with 30 days notice. Service availability is subject to our infrastructure providers.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
              <p>Anirban Pay is provided "as is" without warranty. We are not liable for any damages arising from the use of the platform, including but not limited to financial losses from payment processing errors.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Changes to Terms</h2>
              <p>We may update these terms at any time. Continued use of the platform constitutes acceptance of the updated terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact</h2>
              <p>Questions about these terms? Reach out via <a href="https://github.com/anirbanpay" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Terms;
