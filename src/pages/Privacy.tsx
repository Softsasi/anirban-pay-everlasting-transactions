import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Privacy = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <div className="glass-card p-8 space-y-6 text-muted-foreground leading-relaxed">
            <p><em>Last updated: March 2026</em></p>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>Anirban Pay ("we", "our", "us") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use our platform.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p>Since Anirban Pay is a self-hosted platform, <strong className="text-foreground">we do not collect or store your data on our servers</strong>. All transaction data, API keys, and customer information remain on your own hosting infrastructure.</p>
              <p className="mt-2">For cloud-hosted users, we collect only the information necessary to provide the hosting service, including account credentials and billing information.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Security</h2>
              <p>We implement industry-standard security measures including encrypted core files, HTTPS enforcement, and support for two-factor authentication to protect your installation.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Third-Party Services</h2>
              <p>Anirban Pay integrates with third-party payment gateways (bKash, Nagad, etc.). Each gateway has its own privacy policy. We encourage you to review their policies independently.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
              <p>Our website may use cookies for analytics and improving user experience. You can disable cookies in your browser settings at any time.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Plugin Store</h2>
              <p>When purchasing plugins, we collect payment information necessary to process transactions. Developer earnings and payouts are processed through secure channels.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact</h2>
              <p>For privacy-related inquiries, reach out via our <a href="https://github.com/anirbanpay" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub organization</a>.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Privacy;
