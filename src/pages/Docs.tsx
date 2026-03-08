import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Book, Key, CreditCard, RefreshCw, Webhook, ShieldCheck, ChevronRight } from "lucide-react";

const sections = [
  {
    id: "overview",
    icon: Book,
    title: "Overview",
    content: `Anirban Pay provides powerful APIs that let you integrate seamless payment solutions into your website, mobile app, or platform. Whether you're building a personal project, SaaS application, or eCommerce site, our flexible and developer-friendly API makes it easy to accept payments, send payouts, and manage transactions securely.

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
    content: `All API requests require an API Key. You can generate your key from the Anirban Pay dashboard under Developer > API Keys.

Include your API key in the request header:
Header: MHS-PIPRAPAY-API-KEY: your_api_key_here

⚠️ Keep your keys secure and never expose them in public code.`,
  },
  {
    id: "checkout",
    icon: CreditCard,
    title: "Redirect Checkout",
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

// Success Response
{
  "pp_id": "349452200706799329851862826",
  "pp_url": "https://pay.example.com/checkout/..."
}`,
  },
  {
    id: "verify",
    icon: RefreshCw,
    title: "Verify Payment",
    code: `POST /api/verify-payment

// Request Body
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
    code: `POST /api/refund-payment

// Request Body
{ "pp_id": "349452200706799329851862826" }

// Returns the transaction details with updated status`,
  },
  {
    id: "webhooks",
    icon: Webhook,
    title: "Webhooks",
    content: `Anirban Pay sends real-time updates about payment status through webhooks.

Headers: POST, Content-Type: application/json

Payload includes: pp_id, full_name, email, gateway, amount, fee, status, date, and metadata.`,
    code: `// PHP Example
<?php
$data = json_decode(
  file_get_contents('php://input'), true
);
http_response_code(200);

if ($data) {
  $status = $data['status'] ?? 'unknown';
  $pp_id = $data['pp_id'] ?? null;
  echo json_encode(['status' => 'ok']);
}`,
  },
  {
    id: "sandbox",
    icon: ShieldCheck,
    title: "Sandbox & Testing",
    content: `Use the sandbox environment to test your integration:

Base URL: https://sandbox.piprapay.com

Demo Panel: https://demo.piprapay.com/admin
Username: demo
Password: 123456

All API endpoints work the same way in sandbox mode.`,
  },
];

const Docs = () => {
  const [active, setActive] = useState("overview");
  const activeSection = sections.find((s) => s.id === active)!;

  return (
    <Layout>
      <div className="section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Documentation</span>
            </h1>
            <p className="text-muted-foreground">
              Everything you need to integrate Anirban Pay into your project.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <nav className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-24 space-y-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                      active === s.id
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <s.icon size={16} />
                    {s.title}
                    {active === s.id && <ChevronRight size={14} className="ml-auto" />}
                  </button>
                ))}
              </div>
            </nav>

            {/* Content */}
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 min-w-0"
            >
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <activeSection.icon size={22} className="text-primary" />
                  {activeSection.title}
                </h2>

                {activeSection.content && (
                  <div className="text-muted-foreground whitespace-pre-line leading-relaxed mb-6">
                    {activeSection.content}
                  </div>
                )}

                {activeSection.code && (
                  <pre className="bg-background rounded-xl p-6 overflow-x-auto text-sm font-mono text-foreground/80 border border-border">
                    {activeSection.code}
                  </pre>
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
