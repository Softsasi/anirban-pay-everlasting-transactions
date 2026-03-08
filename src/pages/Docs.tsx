import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Book, Key, CreditCard, RefreshCw, Webhook, ShieldCheck, ChevronRight, Copy, Check, Terminal } from "lucide-react";

const sections = [
  {
    id: "overview",
    icon: Book,
    title: "Overview",
    content: `Anirban Pay provides powerful APIs that let you integrate seamless payment solutions into your website, mobile app, or platform.

Whether you're building a personal project, SaaS application, or eCommerce site, our flexible and developer-friendly API makes it easy to accept payments, send payouts, and manage transactions securely.

What You Can Do:
• Create dynamic payment links
• Accept online payments via multiple gateways
• Automate payouts and fund transfers
• Fetch and manage transaction details
• Monitor payment statuses in real time
• Receive webhook notifications for event updates`,
  },
  {
    id: "auth",
    icon: Key,
    title: "Authentication",
    content: `All API requests require an API Key. Generate your key from the Anirban Pay dashboard under Developer > API Keys.`,
    code: `// Include in all request headers
{
  "MHS-PIPRAPAY-API-KEY": "your_api_key_here"
}

// ⚠️ Keep keys secure — never expose in public code`,
  },
  {
    id: "checkout",
    icon: CreditCard,
    title: "Redirect Checkout",
    content: `Create a checkout session and redirect the user to the payment page.`,
    code: `POST /api/checkout/redirect

// Request Body
{
  "full_name": "John Doe",
  "email_address": "john@example.com",
  "mobile_number": "01300000000",
  "amount": "100",
  "currency": "BDT",
  "metadata": "{\\"order_id\\": \\"123\\"}",
  "return_url": "https://yoursite.com/return",
  "webhook_url": "https://yoursite.com/webhook"
}

// ✅ Success Response
{
  "pp_id": "349452200706799329851862826",
  "pp_url": "https://pay.example.com/checkout/..."
}`,
  },
  {
    id: "verify",
    icon: RefreshCw,
    title: "Verify Payment",
    content: `Verify a payment's status using the transaction ID.`,
    code: `POST /api/verify-payment

// Request
{ "pp_id": "349452200706799329851862826" }

// Response
{
  "pp_id": "349452200706799329851862826",
  "full_name": "Rasel Islam",
  "gateway": "Bkash Personal",
  "amount": "6",
  "fee": "0.68",
  "total": 6.34,
  "currency": "USD",
  "status": "completed",
  "date": "Jan 30, 2026 07:01 PM"
}`,
  },
  {
    id: "refund",
    icon: RefreshCw,
    title: "Refund Payment",
    content: `Initiate a refund for a completed transaction.`,
    code: `POST /api/refund-payment

// Request
{ "pp_id": "349452200706799329851862826" }

// Returns transaction details with updated status`,
  },
  {
    id: "webhooks",
    icon: Webhook,
    title: "Webhooks",
    content: `Anirban Pay sends real-time updates about payment status through webhooks. Configure your webhook URL when creating a checkout session.

Headers: POST, Content-Type: application/json
Payload includes: pp_id, full_name, email, gateway, amount, fee, status, date, and metadata.`,
    code: `// PHP Webhook Handler
<?php
$data = json_decode(
  file_get_contents('php://input'), true
);
http_response_code(200);

if ($data) {
  $status = $data['status'] ?? 'unknown';
  $pp_id = $data['pp_id'] ?? null;
  // Process the payment update...
  echo json_encode(['status' => 'ok']);
}`,
  },
  {
    id: "sandbox",
    icon: ShieldCheck,
    title: "Sandbox & Testing",
    content: `Use the sandbox environment to test your integration before going live.

Base URL: https://sandbox.piprapay.com

Demo Panel: https://demo.piprapay.com/admin
Username: demo
Password: 123456

All API endpoints work identically in sandbox mode. No real transactions are processed.`,
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
    <Layout>
      <div className="relative section-padding overflow-hidden">
        <div className="orb orb-cyan w-[300px] h-[300px] top-[5%] right-[10%]" />
        <div className="absolute inset-0 dot-pattern opacity-10" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <span className="tag tag-primary mb-4 inline-flex"><Terminal size={12} /> API Reference</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="gradient-text">Documentation</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Everything you need to integrate Anirban Pay.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <nav className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-28 glass-card p-3 space-y-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setActive(s.id); setCopied(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 text-left ${
                      active === s.id
                        ? "bg-primary/10 text-primary"
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

            {/* Content */}
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1 min-w-0"
            >
              <div className="glass-card p-8 lg:p-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
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
                      <div className="code-window-dot bg-secondary/60" />
                      <div className="code-window-dot bg-primary/60" />
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
