import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "v2-0-3-released",
    title: "Anirban Pay v2.0.3 Released with Major Upgrades",
    date: "2025-07-15",
    excerpt: "New Bangladeshi banks, 2FA, Binance Merchant API, push notifications, and the tolerance system.",
  },
  {
    slug: "whmcs-marketplace",
    title: "Official Plugin Now Live on WHMCS Marketplace",
    date: "2025-07-10",
    excerpt: "Seamlessly integrate Anirban Pay into your WHMCS billing system with our official plugin.",
  },
  {
    slug: "wordpress-plugin",
    title: "Official WooCommerce Plugin Published on WordPress",
    date: "2025-07-08",
    excerpt: "The official WooCommerce plugin is now available on the WordPress plugin directory.",
  },
  {
    slug: "blesta-module",
    title: "Payment Module for Blesta Now Available",
    date: "2025-07-05",
    excerpt: "Connect your PipraPay panel directly to Blesta for seamless payment processing.",
  },
  {
    slug: "v2-0-1-launched",
    title: "v2.0.1 Launched with New Features",
    date: "2025-07-04",
    excerpt: "Aamarpay, ShurjoPay gateways, auto verification cronjob, new theme, and bug fixes.",
  },
  {
    slug: "is-it-free",
    title: "Is Anirban Pay Free or Paid?",
    date: "2025-06-28",
    excerpt: "Core platform is completely free. Learn about optional premium add-ons and our philosophy.",
  },
  {
    slug: "introducing-anirbanpay",
    title: "Introducing Anirban Pay — Payment Automation for Everyone",
    date: "2025-06-20",
    excerpt: "A self-hosted, plugin-based payment automation tool designed for developers and businesses.",
  },
];

const Blog = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-muted-foreground">Updates, guides, and announcements from the Anirban Pay team.</p>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6 glow-hover group"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                Read more <ArrowRight size={14} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
