import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

const posts = [
  { slug: "v2-0-3-released", title: "Anirban Pay v2.0.3 Released with Major Upgrades", date: "2025-07-15", excerpt: "New Bangladeshi banks, 2FA, Binance Merchant API, push notifications, and the tolerance system.", tag: "Release" },
  { slug: "whmcs-marketplace", title: "Official Plugin Now Live on WHMCS Marketplace", date: "2025-07-10", excerpt: "Seamlessly integrate Anirban Pay into your WHMCS billing system with our official plugin.", tag: "Integration" },
  { slug: "wordpress-plugin", title: "Official WooCommerce Plugin Published on WordPress", date: "2025-07-08", excerpt: "The official WooCommerce plugin is now available on the WordPress plugin directory.", tag: "Integration" },
  { slug: "blesta-module", title: "Payment Module for Blesta Now Available", date: "2025-07-05", excerpt: "Connect your panel directly to Blesta for seamless payment processing.", tag: "Plugin" },
  { slug: "v2-0-1-launched", title: "v2.0.1 Launched with New Features", date: "2025-07-04", excerpt: "Aamarpay, ShurjoPay gateways, auto verification cronjob, new theme, and bug fixes.", tag: "Release" },
  { slug: "is-it-free", title: "Is Anirban Pay Free or Paid?", date: "2025-06-28", excerpt: "Core platform is completely free. Learn about optional premium add-ons and our philosophy.", tag: "FAQ" },
  { slug: "introducing-anirbanpay", title: "Introducing Anirban Pay — Payment Automation for Everyone", date: "2025-06-20", excerpt: "A self-hosted, plugin-based payment automation tool designed for developers and businesses.", tag: "Announcement" },
];

const Blog = () => (
  <Layout>
    <section className="relative section-padding overflow-hidden">
      <div className="ambient-shape ambient-indigo w-[300px] h-[300px] top-[10%] left-[5%]" />
      <div className="absolute inset-0 dot-pattern opacity-[0.05]" />

      <div className="container mx-auto relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="tag tag-primary mb-4 inline-flex"><Sparkles size={11} /> News & Updates</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg">Updates, guides, and announcements from the team.</p>
        </motion.div>

        {/* Magazine-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`glass-card-hover p-6 lg:p-8 group cursor-pointer ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="tag tag-secondary text-[10px]">{post.tag}</span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar size={11} />
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </span>
                </div>
                <h2 className={`font-semibold mb-2 group-hover:text-primary transition-colors duration-300 ${i === 0 ? "text-xl lg:text-2xl" : "text-lg"}`}>
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium group-hover:gap-2.5 transition-all">
                    Read more <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;