<div align="center">

# 💎 Velara AI — Next-Gen Financial Intelligence & Wealth Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-finance--barkat.vercel.app-7928CA?style=for-the-badge&logo=vercel&logoColor=white)](https://finance-barkat.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js%2016-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript%205-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<p align="center">
  A state-of-the-art, high-converting FinTech SaaS landing page and interactive portfolio management dashboard designed with deep obsidian glassmorphism, fluid micro-animations, and real-time predictive cashflow analytics.
</p>

[🌐 **View Live Application**](https://finance-barkat.vercel.app) &bull; [📊 **Explore Live Dashboard**](https://finance-barkat.vercel.app/dashboard) &bull; [⚡ **1-Click Demo Login**](https://finance-barkat.vercel.app/login)

</div>

---

## 🌟 Key Highlights & Feature Matrix

### 🌌 1. High-Converting Landing Page
- **Sticky Glassmorphic Header**: Pinned navbar with real-time scroll detection (`scrollY > 20`), applying dynamic blur, border glow, and box shadow.
- **Active Navigation & Anchor Highlighting**: Direct smooth scrolling and route highlighting via Next.js `usePathname()`.
- **Mobile Responsive Drawer**: Touch-friendly animated mobile drawer with quick auth CTAs and backdrop blur.
- **Interactive Globe Arc Visual**: Procedural SVG particle arc and synchronized worldwide city node pulses.
- **Animated Testimonials Ticker**: Bi-directional marquee columns showcasing verified investor and executive reviews.

### 📊 2. Financial Portfolio Dashboard (`/dashboard`)
- **Key Metric Stat Cards**: Dynamic growth rate indicators, glowing gradient borders, and hover micro-animations.
- **Cashflow & Savings Performance Chart**: Interactive multi-mode bar chart (Revenue vs Expense / Net Surplus Trend) with custom hover tooltips.
- **AI Portfolio Rebalancer Banner**: Real-time yield reallocation metrics and automated staking indicators.
- **Titanium Holographic Card**: 3D card tilt effect, contactless NFC chip styling, and one-click number show/hide toggle.
- **Instant Peer Transfers**: Interactive contact avatar list and preset quick-amount buttons.
- **Category Budget Gauges**: Progress bar tracking for Housing, Dining, AI Subscriptions, and Travel.
- **Add Record Modal**: Interactive popup for logging instant income and expense transactions.

### 🔐 3. Authentication & 1-Click Demo Experience
- **Dedicated Sign-Up & Sign-In Pages** (`/signup`, `/login`): Clean obsidian-dark glass panels with input validation.
- **⚡ 1-Click Instant Demo Launcher**: Instant access button pre-configured with executive test credentials (`Sophia Brooks`) to allow recruiters and evaluators to explore the full dashboard in one click without form completion.

### 🧭 4. Custom 404 "Lost in the Galaxy" Page (`/not-found`)
- Galactic glowing 404 typography with floating animations.
- Quick navigation CTAs: **Back to Home Page**, **Go to Live Dashboard**, and **Go Back**.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Hybrid Server/Client Components, Turbopack, Fast Refresh |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type safety and end-to-end DX |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first design tokens and glassmorphic UI |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Smooth spring transitions, entry reveals, and loop tickers |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent, lightweight vector icon set |
| **Media Optimization** | [Next.js Image](https://nextjs.org/docs/app/api-reference/components/image) | Automatic WebP/AVIF compression & remote pattern handling |
| **Deployment** | [Vercel](https://vercel.com/) | Edge network global distribution & CI/CD |

---

## 📁 Repository Architecture

```text
financial-management/
├── src/
│   ├── app/
│   │   ├── (commonLayout)/          # Landing page route layout
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx             # Assembled Landing Page
│   │   ├── dashboard/               # Live Financial Dashboard
│   │   │   └── page.tsx
│   │   ├── login/                   # Sign In & Demo Login
│   │   │   └── page.tsx
│   │   ├── signup/                  # Registration & Demo Login
│   │   │   └── page.tsx
│   │   ├── not-found.tsx            # Custom 404 Not Found Page
│   │   ├── layout.tsx               # Root Layout with Font & SEO Metadata
│   │   └── globals.css              # Design tokens, glassmorphism & gradients
│   ├── components/                  # Reusable Dashboard & UI Widgets
│   │   ├── Navbar.tsx               # Dashboard Top Navigation
│   │   ├── LandingNavbar.tsx        # Landing Navigation
│   │   ├── StatCard.tsx             # Metric Card with Trend Arrows
│   │   ├── ExpenseChart.tsx         # Revenue vs Expense Bar Chart
│   │   ├── RecentTransactions.tsx   # Transaction Feed with Filters
│   │   ├── CreditCardWidget.tsx     # Holographic Titanium Card
│   │   ├── QuickTransfer.tsx        # Peer-to-Peer Transfer Widget
│   │   └── BudgetProgress.tsx       # Category Budget Gauges
│   ├── modules/
│   │   ├── pages/                   # Landing Page Sections
│   │   │   ├── Features.tsx         # Core Value Props & Feature Cards
│   │   │   ├── HowWorks.tsx         # 3-Step Process Walkthrough
│   │   │   ├── WhyChoose.tsx        # Comparative Advantages
│   │   │   ├── GlobalSection.tsx    # Worldwide Remittance & Transfer
│   │   │   ├── Expense.tsx          # Security & Encryption Whitepaper
│   │   │   ├── Pricing.tsx          # Subscription Tier Pricing
│   │   │   ├── Testimonial.tsx      # Dual-Column Animated Review Ticker
│   │   │   └── Faq.tsx              # Interactive Accordion FAQ
│   │   └── shared/                  # Shared Layout Components
│   │       ├── Header.tsx           # Sticky Header & Navigation
│   │       └── Footer.tsx           # Footer with Interactive Globe Arc
│   └── lib/
│       ├── data.ts                  # Mock FinTech Data, Transactions & Metrics
│       └── utils.ts                 # Currency & Date Formatters
├── next.config.ts                   # Image Remote Patterns & Build Config
├── package.json
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: `v18.18.0` or higher (Node.js 20+ recommended)
- **npm** or **pnpm** or **yarn**

### 1. Clone the Repository
```bash
git clone https://github.com/Barkat-Ullah/financial-management.git
cd financial-management
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🗺️ Routes & Pages Overview

| Route | Page Purpose | Key Features |
| :--- | :--- | :--- |
| `/` | **Landing Page** | Sticky Header, Hero Mockup, Globe Arc, Testimonials, Pricing, FAQ |
| `/dashboard` | **Live Dashboard** | Cashflow Charts, Stat Cards, Card Widget, Quick Transfer, Budget Gauges |
| `/login` | **Sign In** | Credential Auth Form, **1-Click Demo Login (Sophia Brooks)** |
| `/signup` | **Sign Up** | User Registration Form, **1-Click Demo Login**, Terms of Service |
| `/_not-found` | **404 Not Found** | Animated Floating 404, Quick Navigation Links, Direct Home Routing |

---

## 🎨 Design System & Palette

- **Obsidian Dark Surface**: `#090D16`, `#000000`, `#0C0C0E`
- **Velara Neon Purple Accents**: `#A855F7`, `#9333EA`, `#C084FC`, `#7E22CE`
- **Growth Emerald**: `#10B981`, `#059669`
- **Glassmorphic Panels**: `rgba(255, 255, 255, 0.03)` with `backdrop-filter: blur(16px)` and `border: 1px solid rgba(255, 255, 255, 0.1)`

---

## 👨‍💻 Author & Contact

**Barkat Ullah**
- **Live Demo**: [https://finance-barkat.vercel.app](https://finance-barkat.vercel.app)
- **GitHub**: [@Barkat-Ullah](https://github.com/Barkat-Ullah)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
