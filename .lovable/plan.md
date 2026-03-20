

# Corporate Liquid Glass Redesign

## Vision

Shift from the current dark neon/cyberpunk aesthetic to a **refined corporate identity** with a neutral white/gray base, while keeping the liquid glass as the signature differentiator. The result: a fintech site that feels like Apple meets Stripe, but with a unique refractive glass personality.

## New Color System

**Light mode (primary):**
- Background: warm white `#FAFAF9` with subtle warm gray undertones
- Cards/surfaces: pure white with liquid glass refraction
- Primary: deep indigo `#4F46E5` (trustworthy, corporate)
- Secondary: slate blue `#6366F1`
- Accent: warm amber `#F59E0B` (for CTAs and highlights)
- Text: slate-900 `#0F172A` for headings, slate-500 for body

**Dark mode:**
- Background: deep slate `#0B1120`
- Primary/secondary carry over with adjusted luminance
- Glass surfaces get a subtle blue-tinted frost

**Key shift:** Remove cyan/purple/magenta neon palette entirely. Replace with corporate indigo + amber. No more rave-like glows.

## Unconventional Layout Ideas

1. **Asymmetric hero** -- Instead of centered text, use a split layout where the left side has a massive headline that "breaks the grid" (text overflows into a frosted glass panel on the right showing a live dashboard mockup)
2. **Floating section cards** -- Each major section sits inside a large liquid glass card that appears to float above the background with a soft shadow, creating a "paper on desk" depth effect
3. **Horizontal scroll feature showcase** -- Instead of a bento grid, features scroll horizontally with snap-scrolling, each feature in its own liquid glass "slide"
4. **Staggered timeline for "How it works"** -- A vertical timeline with alternating left/right glass cards connected by a gradient line
5. **Pricing as overlapping cards** -- Cards slightly overlap each other like fanned-out playing cards, with the featured plan elevated higher

## Typography Refresh

- Keep **Space Grotesk** for headings (it works for corporate)
- Switch body to **Inter** (the industry standard for SaaS/fintech)
- Keep **JetBrains Mono** for code

## Liquid Glass Evolution

- Reduce blur intensity from 40px to 20px for a subtler, more refined frost
- Add a faint **noise texture** overlay to glass surfaces for premium tactile feel
- Use **warm-tinted refraction** (subtle gold/amber light streak) instead of cyan/purple
- Glass borders become near-invisible (1px white at 10% opacity)
- On hover, glass surfaces get a gentle amber inner glow instead of neon

## Files to Change

| File | Changes |
|------|---------|
| `src/index.css` | Complete color token overhaul (indigo/amber/slate), refined glass variables, updated gradients, noise texture, warm refraction highlights |
| `tailwind.config.ts` | Add Inter font, update animation timings for subtler motion |
| `src/pages/Index.tsx` | Asymmetric hero layout, horizontal scroll features, staggered timeline, overlapping CTA section, remove neon orbs, add soft ambient shapes |
| `src/pages/Features.tsx` | Horizontal snap-scroll cards, corporate color scheme |
| `src/pages/Pricing.tsx` | Overlapping card layout, amber highlight for featured plan |
| `src/pages/About.tsx` | Corporate team/mission layout with glass cards |
| `src/pages/Blog.tsx` | Clean magazine-style grid |
| `src/pages/Docs.tsx` | Refined sidebar with warm glass |
| `src/pages/Plugins.tsx` | Clean store grid with subtle glass |
| `src/components/Navbar.tsx` | Refined glass nav with indigo active states, slimmer pill |
| `src/components/Footer.tsx` | Clean corporate footer, warm tones |
| `src/components/ThemeToggle.tsx` | Updated to match new palette |
| `index.html` | Update meta theme-color |

## What Makes It Unconventional

- **Asymmetric layouts** break the expected centered SaaS template mold
- **Horizontal scroll sections** create engagement and surprise
- **Warm-tinted liquid glass** is rare -- most glass UIs use cool blue; amber refraction feels premium and unique
- **Overlapping card compositions** create visual depth without 3D
- **Subtle motion** -- parallax on glass surfaces reacting to scroll, not flashy entrance animations

