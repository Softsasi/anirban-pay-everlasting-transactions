import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Search, Download, Star, Tag } from "lucide-react";
import { useState } from "react";

const plugins = [
  { name: "Aamarpay Gateway", author: "Anirban Pay Team", downloads: "1.2k", rating: 4.8, category: "Gateway", price: "Free" },
  { name: "ShurjoPay Gateway", author: "Anirban Pay Team", downloads: "980", rating: 4.7, category: "Gateway", price: "Free" },
  { name: "Binance Merchant API", author: "Community", downloads: "750", rating: 4.5, category: "Crypto", price: "৳500" },
  { name: "Two-Factor Authentication", author: "Anirban Pay Team", downloads: "2.1k", rating: 4.9, category: "Security", price: "Free" },
  { name: "Admin Push Notifications", author: "Anirban Pay Team", downloads: "1.5k", rating: 4.6, category: "Utility", price: "Free" },
  { name: "Cronjob Auto Verification", author: "Community", downloads: "890", rating: 4.4, category: "Automation", price: "Free" },
  { name: "Premium Theme Pack", author: "Anirban Pay Team", downloads: "640", rating: 4.8, category: "Theme", price: "৳300" },
  { name: "WHMCS Integration", author: "Community", downloads: "520", rating: 4.3, category: "Integration", price: "Free" },
  { name: "WooCommerce Plugin", author: "Anirban Pay Team", downloads: "1.8k", rating: 4.7, category: "Integration", price: "Free" },
  { name: "Blesta Payment Module", author: "Community", downloads: "310", rating: 4.2, category: "Integration", price: "Free" },
  { name: "SEO & Analytics Suite", author: "Community", downloads: "430", rating: 4.1, category: "Utility", price: "৳200" },
  { name: "SMS Notification Plugin", author: "Community", downloads: "670", rating: 4.5, category: "Utility", price: "Free" },
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
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Plugin Store</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Extend Anirban Pay with community and official plugins. Developers keep 70% of sales.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="relative mb-6">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search plugins..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    cat === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-6 glow-hover flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold mb-0.5">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">by {p.author}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                    p.price === "Free" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                  }`}>
                    {p.price}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-auto pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Tag size={12} />{p.category}</span>
                  <span className="flex items-center gap-1"><Download size={12} />{p.downloads}</span>
                  <span className="flex items-center gap-1"><Star size={12} className="text-yellow-500" />{p.rating}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-10">No plugins found matching your criteria.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Plugins;
