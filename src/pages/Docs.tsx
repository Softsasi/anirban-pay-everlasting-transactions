import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Book, Key, CreditCard, RefreshCw, Webhook, ShieldCheck, ChevronRight, Copy, Check, Terminal } from "lucide-react";

const sections = [
  {
    id: "overview", icon: Book, title: "Overview",
    content: `Anirban Pay provides powerful APIs that let you integrate seamless payment solutions into your website, mobile app, or platform.\n\nWhether you're building a personal project, SaaS application, or eCommerce site, our flexible and developer-friendly API makes it easy to accept payments, send payouts, and manage transactions securely.\n\nWhat You Can Do:\n• Create dynamic payment links\n• Accept online payments via multiple gateways\n• Automate payouts and fund transfers\n• Fetch and manage transaction details\n• Monitor payment statuses in real time\n• Receive webhook notifications for event updates`,
  },
  {
    id: "auth", icon: Key, title: "Authentication",
    content: `All API requests require an API Key. Generate your key from the Anirban Pay dashboard under Developer > API Keys.`,
    code: `// Include in all request headers\n{\n  "MHS-PIPRAPAY-API-KEY": "your_api_key_here"\n}\n\n// ⚠️ Keep keys secure — never expose in public code`,
  },
  {
    id: "checkout", icon: CreditCard, title: "Redirect Checkout",
    content: `Create a checkout session and redirect the user to the payment page.`,
    code: `POST /api/checkout/redirect\n\n// Request Body\n{\n  "full_name": "John Doe",\n  "email_address": "john@example.com",\n  "mobile_number": "01300000000",\n  "amount": "100",\n  "currency": "BDT",\n  "metadata": "{\\"order_id\\": \\"123\\"}",\n  "return_url": "https://yoursite.com/return",\n  "webhook_url": "https://yoursite.com/webhook"\n}\n\n// ✅ Success Response\n{\n  "pp_id": "349452200706799329851862826",\n  "pp_url": "https://pay.example.com/checkout/..."\n}`,
  },
  {
    id: "verify", icon: RefreshCw, title: "Verify Payment",
    content: `Verify a payment's status using the transaction ID.`,
    code: `POST /api/verify-payment\n\n// Request\n{ "pp_id": "349452200706799329851862826" }\n\n// Response\n{\n  "pp_id": "349452200706799329851862826",\n  "full_name": "Rasel Islam",\n  "gateway": "Bkash Personal",\n  "amount": "6",\n  "fee": "0.68",\n  "total": 6.34,\n  "currency": "USD",\n  "status": "completed",\n  "date": "Jan 30, 2026 07:01 PM"\n}`,
  },
  {
    id: "refund", icon: RefreshCw, title: "Refund Payment",
    content: `Initiate a refund for a completed transaction.`,
    code: `POST /api/refund-payment\n\n// Request\n{ "pp_id": "349452200706799329851862826" }\n\n// Returns transaction details with updated status`,
  },
  {
    id: "webhooks", icon: Webhook, title: "Webhooks",
    content: `Anirban Pay sends real-time updates about payment status through webhooks. Configure your webhook URL when creating a checkout session.\n\nHeaders: POST, Content-Type: application/json\nPayload includes: pp_id, full_name, email, gateway, amount, fee, status, date, and metadata.`,
    code: `// PHP Webhook Handler\n<?php\n$data = json_decode(\n  file_get_contents('php://input'), true\n);\nhttp_response_code(200);\n\nif ($data) {\n  $status = $data['status'] ?? 'unknown';\n  $pp_id = $data['pp_id'] ?? null;\n  // Process the payment update...\n  echo json_encode(['status' => 'ok']);\n}`,
  },
  {
    id: "sandbox", icon: ShieldCheck, title: "Sandbox & Testing",
    content: `Use the sandbox environment to test your integration before going live.\n\nBase URL: https://sandbox.piprapay.com\n\nDemo Panel: https://demo.piprapay.com/admin\nUsername: demo\nPassword: 123456\n\nAll API endpoints work identically in sandbox mode. No real transactions are processed.`,
  },
];

const Docs = () => {
  const [active, setActive] = useState("overview");
  const [copied, setCopied] = useState(false);
  const activeSection = sections.find((s) => s.id === active)!;

  const handleCopy = () => {
    if (activeSection.code) {
      navigator.clipboard.writeText(activeSection.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
    <SEO
      title="Documentation – Anirban Pay"
      description="Install, configure, and integrate Anirban Pay. Quickstart, API reference, plugin guides, and self-hosting instructions."
      path="/docs"
    />
    <Layout>
      <div className="relative section-padding overflow-hidden">
        <div className="ambient-shape ambient-indigo w-[300px] h-[300px] top-[5%] right-[10%]" />
        <div className="absolute inset-0 dot-pattern opacity-[0.05]" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <span className="tag tag-primary mb-4 inline-flex"><Terminal size={11} /> API Reference</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="gradient-text">Documentation</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Everything you need to integrate Anirban Pay.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <nav className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-28 glass-card p-3 space-y-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setActive(s.id); setCopied(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 text-left ${
                      active === s.id
                        ? "bg-primary/8 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    }`}
                  >
                    <s.icon size={15} />
                    {s.title}
                    {active === s.id && <ChevronRight size={13} className="ml-auto" />}
                  </button>
                ))}
              </div>
            </nav>

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1 min-w-0"
            >
              <div className="glass-card p-8 lg:p-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center">
                    <activeSection.icon size={18} className="text-primary" />
                  </div>
                  {activeSection.title}
                </h2>

                {activeSection.content && (
                  <div className="text-muted-foreground whitespace-pre-line leading-relaxed mb-6">
                    {activeSection.content}
                  </div>
                )}

                {activeSection.code && (
                  <div className="code-window relative">
                    <div className="code-window-bar">
                      <div className="code-window-dot bg-accent/60" />
                      <div className="code-window-dot bg-primary/50" />
                      <div className="code-window-dot bg-secondary/50" />
                      <span className="ml-3 text-xs text-muted-foreground font-mono flex-1">api-example</span>
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {copied ? <Check size={13} /> : <Copy size={13} />}
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <pre className="p-6 overflow-x-auto text-[13px] font-mono leading-relaxed text-muted-foreground">
                      <code>{activeSection.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Docs;