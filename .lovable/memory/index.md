# Anirban Pay Project Memory

## Design System (v3 — Corporate Liquid Glass)
- **Theme**: Clean corporate with warm liquid glass refraction
- **Colors**: Indigo primary (HSL 239 84% 67%), Slate blue secondary (HSL 245 58% 51%), Amber accent (HSL 38 92% 50%)
- **Background Light**: Warm white (HSL 40 20% 98%), Dark: Deep slate (HSL 222 47% 7%)
- **Fonts**: Inter (body), Space Grotesk (display/headings), JetBrains Mono (code)
- **Glass**: Reduced blur (20px), warm amber refraction, noise texture overlay, subtle borders (1px white/10%)
- **Style**: Liquid glass cards, horizontal snap-scroll features, staggered timeline, asymmetric hero, overlapping pricing cards
- **Animations**: Subtler float, pulse-glow, marquee — no neon orbs, replaced with ambient-shape (indigo/blue/amber)

## Brand Info
- **Name**: Anirban Pay (অনির্বাণ পে) — "the eternal flame"
- **Forked from**: PipraPay (piprapay.com)
- **Built by**: Softsasi (softsasi.com) + Builder Hall (builderhall.com)
- **GitHub**: github.com/anirbanpay, main repo: github.com/anirbanpay/anirbanpay
- **Plugin Store**: 70/30 split (developer/platform)

## Pages
Home (asymmetric hero+dashboard mockup+marquee+horizontal scroll features+staggered timeline+code terminal+plugin ecosystem+CTA), Features (horizontal snap-scroll), Pricing (overlapping cards), Docs, Plugins, Blog (magazine grid), About, Privacy, Terms

## Key Decisions
- Removed cyan/purple/magenta neon palette — replaced with indigo/amber corporate
- Logo: src/assets/logo.png
- Navbar: pill-shaped links, scroll-aware backdrop, lg breakpoint for mobile menu
- All PipraPay references rebranded to Anirban Pay
- gradient-text-purple renamed to gradient-text-amber
- orb classes replaced with ambient-shape classes