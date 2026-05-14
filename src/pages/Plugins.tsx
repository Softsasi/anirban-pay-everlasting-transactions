import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Search, Download, Star, Tag, Sparkles, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const plugins = [
  { name: "Aamarpay Gateway", author: "Anirban Pay Team", downloads: "1.2k", rating: 4.8, category: "Gateway", price: "Free", official: true },
  { name: "ShurjoPay Gateway", author: "Anirban Pay Team", downloads: "980", rating: 4.7, category: "Gateway", price: "Free", official: true },
  { name: "Binance Merchant API", author: "Community", downloads: "750", rating: 4.5, category: "Crypto", price: "৳500", official: false },
  { name: "Two-Factor Authentication", author: "Anirban Pay Team", downloads: "2.1k", rating: 4.9, category: "Security", price: "Free", official: true },
  { name: "Admin Push Notifications", author: "Anirban Pay Team", downloads: "1.5k", rating: 4.6, category: "Utility", price: "Free", official: true },
  { name: "Cronjob Auto Verification", author: "Community", downloads: "890", rating: 4.4, category: "Automation", price: "Free", official: false },
  { name: "Premium Theme Pack", author: "Anirban Pay Team", downloads: "640", rating: 4.8, category: "Theme", price: "৳300", official: true },
  { name: "WHMCS Integration", author: "Community", downloads: "520", rating: 4.3, category: "Integration", price: "Free", official: false },
  { name: "WooCommerce Plugin", author: "Anirban Pay Team", downloads: "1.8k", rating: 4.7, category: "Integration", price: "Free", official: true },
  { name: "Blesta Payment Module", author: "Community", downloads: "310", rating: 4.2, category: "Integration", price: "Free", official: false },
  { name: "SEO & Analytics Suite", author: "Community", downloads: "430", rating: 4.1, category: "Utility", price: "৳200", official: false },
  { name: "SMS Notification Plugin", author: "Community", downloads: "670", rating: 4.5, category: "Utility", price: "Free", official: false },
];

const categories = ["All", "Gateway", "Security", "Utility", "Integration", "Automation", "Theme", "Crypto"];

const Plugins = () => {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = plugins.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <SEO
        title="Plugins & Integrations – Anirban Pay"
        description="Browse official and community plugins for WHMCS, WooCommerce, Blesta, and more. Extend your payment gateway in minutes."
        path="/plugins"
      />
      <section className="relative section-padding overflow-hidden">
        <div className="ambient-shape ambient-amber w-[400px] h-[400px] top-[5%] right-[-5%]" />
        <div className="ambient-shape ambient-blue w-[300px] h-[300px] bottom-[20%] left-[-5%]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.05]" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="tag tag-accent mb-4 inline-flex"><Sparkles size={11} /> Marketplace</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 text-balance">
              <span className="gradient-text-amber">Plugin Store</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Extend Anirban Pay with community and official plugins. Developers keep <strong className="text-foreground">70%</strong> of sales.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto mb-14">
            <div className="relative mb-6">
              <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search plugins..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-5 py-4 rounded-2xl bg-muted/40 border border-border/30 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/25 backdrop-blur-xl transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    cat === c
                      ? "text-primary-foreground shadow-sm"
                      : "bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted border border-border/20"
                  }`}
                  style={cat === c ? { background: "var(--gradient-primary)" } : {}}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="glass-card-hover p-6 flex flex-col group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">{p.name}</h3>
                      {p.official && (
                        <span className="shrink-0 w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center" title="Official">
                          <Sparkles size={9} className="text-primary" />
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">by {p.author}</p>
                  </div>
                  <span className={`shrink-0 ml-3 px-3 py-1 rounded-full text-xs font-semibold ${
                    p.price === "Free" ? "tag-primary" : "tag-accent"
                  }`}>
                    {p.price}
                  </span>
                </div>
                <div className="flex items-center gap-5 mt-auto pt-4 border-t border-border/15 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Tag size={11} />{p.category}</span>
                  <span className="flex items-center gap-1.5"><Download size={11} />{p.downloads}</span>
                  <span className="flex items-center gap-1.5"><Star size={11} className="text-accent" />{p.rating}</span>
                  <ArrowUpRight size={14} className="ml-auto text-muted-foreground/20 group-hover:text-primary transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-16">No plugins found matching your criteria.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Plugins;