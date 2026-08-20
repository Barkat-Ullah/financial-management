"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  Bell,
  LayoutGrid,
  ArrowRight,
  Play,
  TrendingUp,
  Wallet,
  CreditCard,
  PieChart,
  MoreHorizontal,
  Sliders,
  Plus,
  Sparkles,
} from "lucide-react";

interface HeaderProps {
  className?: string;
}

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Live Dashboard", href: "/dashboard" },
];

export default function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const chartData: number[] = [35, 52, 41, 63, 48, 70, 88, 55, 72, 60, 45, 68];

  const assets: { label: string; val: string; change: string; color: string }[] = [
    { label: "Cloud Investment", val: "$24,000", change: "+2.4%", color: "#A855F7" },
    { label: "Secure Savings", val: "$12,850", change: "+4.1%", color: "#10b981" },
    { label: "Real Estate", val: "$45,600", change: "+6.2%", color: "#f59e0b" },
  ];

  const sidebarIcons = [LayoutGrid, Wallet, PieChart, CreditCard, Sliders];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
        crossOrigin="anonymous"
      />

      {/* STICKY TOP NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#090d16]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1450px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* BRAND LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A855F7] to-[#7E22CE] flex items-center justify-center text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <TrendingUp size={20} />
            </motion.div>
            <div className="flex items-center gap-2">
              <span className="text-[20px] font-extrabold text-white tracking-tight group-hover:text-[#c084fc] transition-colors">
                Velara AI
              </span>
              <span className="rounded-full bg-[#A855F7]/15 px-2 py-0.5 text-[10px] font-bold text-[#c084fc] border border-[#A855F7]/30 hidden sm:inline-block">
                v2.6 PRO
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive =
                item.href === pathname ||
                (item.href === "/" && pathname === "/");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[13px] font-semibold transition-all relative py-1 ${
                    isActive
                      ? "text-[#c084fc]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A855F7] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* AUTH BUTTONS & MOBILE TOGGLE */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/login"
                className="px-5 py-2 text-[13px] font-semibold border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-5 py-2 text-[13px] font-bold bg-[#A855F7] text-white rounded-full hover:bg-[#9333ea] transition-all shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:scale-105 active:scale-95"
              >
                Sign up
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              className="lg:hidden p-2.5 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden px-6 pt-3 pb-6 bg-[#090d16]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[15px] font-medium text-white/80 py-2.5 px-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2.5 pt-4 mt-2 border-t border-white/10">
                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full py-3 text-center text-[14px] font-semibold border border-white/10 bg-white/5 rounded-xl text-white hover:bg-white/10 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full py-3 text-center text-[14px] font-bold bg-[#A855F7] text-white rounded-xl shadow-lg shadow-purple-600/30 hover:bg-[#9333ea] transition-colors"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section
        className={
          "relative mb-12 overflow-hidden min-h-[1100px] pt-[120px] sm:pt-[140px] px-6 md:px-12 bg-black " +
          (className || "")
        }
      >
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        >
          <source src="https://cdn.jiro.build/Velara/Hero%2001.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY FOR DEPTH */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90 z-0" />

        {/* CENTERED TEXT CONTENT */}
        <div className="relative z-10 max-w-[840px] mx-auto text-center mt-[40px] md:mt-[60px] mb-[60px]">
          {/* BADGE */}
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-8 group cursor-pointer hover:border-[#A855F7]/50 transition-all duration-300"
          >
            <div className="bg-[#A855F7] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tight flex items-center gap-1">
              <Sparkles size={11} />
              <span>New</span>
            </div>
            <span className="text-[11px] font-semibold text-white/70 uppercase tracking-[0.15em] group-hover:text-white transition-colors">
              AI Predictive Financial Intelligence
            </span>
            <div className="flex items-center justify-center w-4 h-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#A855F7]/20 group-hover:border-[#A855F7]/30 transition-all">
              <svg
                className="w-2.5 h-2.5 text-white/40 group-hover:text-white transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={4}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <h1 className="text-[38px] sm:text-[52px] md:text-[68px] font-bold text-white leading-[1.08] tracking-[-1.5px] mb-5">
            Start Managing Your Finance With Our Tool
          </h1>
          <p className="text-[16px] sm:text-[18px] text-white/60 leading-[1.6] max-w-[620px] mx-auto mb-9 font-normal">
            Take control of your money with smarter insights. Track spending, manage subscriptions,
            and reach your financial goals effortlessly.
          </p>

          {/* CTA BUTTONS ROW */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* PRIMARY BUTTON */}
            <Link
              href="/signup"
              className="w-full sm:w-auto h-14 px-8 bg-[#A855F7] hover:bg-[#9333ea] text-white font-bold rounded-full flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_-10px_rgba(168,85,247,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Try it Free</span>
              <ArrowRight size={18} />
            </Link>

            {/* SECONDARY BUTTON */}
            <Link
              href="/dashboard"
              className="w-full sm:w-auto h-14 px-8 bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/20 rounded-full backdrop-blur-md flex items-center justify-center gap-3 transition-all hover:border-white/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play size={18} fill="currentColor" className="ml-0.5 text-[#c084fc]" />
              <span>See It in Action (Demo)</span>
            </Link>
          </div>
        </div>

        {/* APP DASHBOARD MOCKUP */}
        <div className="relative z-10 max-w-[1250px] mx-auto mt-[60px] md:mt-[80px] px-2 sm:px-4 lg:px-0 h-[455px] overflow-hidden">
          {/* EXTERNAL GLOW BEHIND DASHBOARD */}
          <div className="absolute -inset-4 bg-[#A855F7]/25 rounded-[35px] blur-[120px] z-0 opacity-50" />

          <div className="relative bg-[#0c0c0e]/95 backdrop-blur-[50px] rounded-t-[32px] sm:rounded-t-[40px] border border-white/10 flex h-[650px] shadow-[0_-40px_120px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.05)] overflow-hidden">
            {/* SIDEBAR */}
            <aside className="hidden md:flex flex-col w-[80px] bg-white/[0.02] border-r border-white/5 py-10 items-center shrink-0">
              <Link
                href="/dashboard"
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#A855F7] to-[#8b5cf6] flex items-center justify-center text-white mb-12 shadow-[0_0_25px_rgba(168,85,247,0.4)] cursor-pointer hover:rotate-6 transition-transform"
              >
                <TrendingUp size={24} />
              </Link>

              <nav className="flex flex-col gap-8">
                {sidebarIcons.map((Icon, i) => (
                  <Link
                    href="/dashboard"
                    key={i}
                    className={
                      "w-11 h-11 rounded-xl flex items-center justify-center transition-all cursor-pointer " +
                      (i === 0
                        ? "text-[#A855F7] bg-[#A855F7]/10 border border-[#A855F7]/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                        : "text-white/20 hover:text-white/70 hover:bg-white/5")
                    }
                  >
                    <Icon size={22} />
                  </Link>
                ))}
              </nav>

              <div className="mt-auto mb-10 w-11 h-11 rounded-full overflow-hidden border-2 border-white/10 p-0.5 relative">
                <Image
                  src="https://i.pravatar.cc/100?img=12"
                  alt="User avatar"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </aside>

            {/* MAIN DASHBOARD CONTENT */}
            <main className="flex-1 p-6 sm:p-10 overflow-hidden bg-gradient-to-br from-transparent to-[#A855F7]/[0.02]">
              {/* SEARCH & HEADER */}
              <div className="flex items-center justify-between gap-4 sm:gap-8 mb-8 sm:mb-12">
                <div className="flex items-center gap-3 sm:gap-4 bg-white/[0.03] border border-white/5 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 flex-1 max-w-[500px] shadow-inner">
                  <Search size={18} className="text-white/30 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search analytics..."
                    className="bg-transparent outline-none w-full text-white/80 text-[13px] sm:text-[14px] placeholder:text-white/20"
                    onChange={() => {}}
                  />
                  <div className="text-[10px] font-bold text-white/20 border border-white/10 px-2 py-1 rounded bg-white/5 hidden sm:block">
                    cmd K
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-5">
                  <button className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 hover:bg-white/5 transition-all">
                    <Bell size={18} />
                  </button>
                  <div className="h-10 w-[1px] bg-white/5 hidden sm:block" />
                  <Link
                    href="/dashboard"
                    className="bg-[#A855F7] text-white px-4 sm:px-5 py-2.5 rounded-xl text-[12px] sm:text-[13px] font-bold shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:brightness-110 transition-all flex items-center gap-2"
                  >
                    <Plus size={16} />
                    <span>Deposit</span>
                  </Link>
                </div>
              </div>

              {/* CARDS ROW */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
                {/* BALANCE CARD */}
                <div className="lg:col-span-2 p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-white/[0.08] to-white/[0.01] border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[260px] sm:min-h-[300px] shadow-2xl">
                  <div className="absolute top-0 right-0 w-[400px] h-full bg-[#A855F7]/10 blur-[100px] -mr-32 -mt-32 rounded-full" />

                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 relative z-10">
                    <div>
                      <h4 className="text-white/40 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] mb-2 sm:mb-4">
                        Current Portfolio Value
                      </h4>
                      <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap">
                        <span className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter">
                          $94,850.45
                        </span>
                        <span className="text-emerald-400 text-[12px] sm:text-[13px] font-bold bg-emerald-400/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                          +18.4%
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-1.5 sm:gap-2.5">
                      {["1D", "1W", "1M", "3M", "1Y"].map((t) => (
                        <button
                          key={t}
                          className={
                            "w-8 sm:w-11 h-8 sm:h-11 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-bold border transition-all " +
                            (t === "1M"
                              ? "bg-white text-black border-white shadow-lg"
                              : "text-white/30 border-white/5 hover:border-white/10 hover:bg-white/5")
                          }
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* WAVE CHART */}
                  <div className="h-28 sm:h-32 flex items-end gap-1.5 sm:gap-2.5 relative z-10 px-1 sm:px-2 mt-6 sm:mt-8">
                    {chartData.map((val: number, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: val + "%" }}
                        whileHover={{ scaleY: 1.05 }}
                        className={
                          "flex-1 rounded-t-lg sm:rounded-t-xl transition-all duration-700 relative " +
                          (i === 6
                            ? "bg-gradient-to-t from-[#A855F7] to-[#c084fc] shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                            : "bg-white/[0.08] hover:bg-white/[0.15]")
                        }
                      >
                        {i === 6 && (
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-black px-2 py-0.5 rounded shadow-xl hidden sm:block">
                            Peak
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* RECENT ACCOUNTS */}
                <div className="p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] bg-white/[0.02] border border-white/5 flex flex-col gap-6 sm:gap-8">
                  <div className="flex justify-between items-center">
                    <h5 className="text-white font-bold text-base sm:text-lg">My Assets</h5>
                    <button className="text-white/20 hover:text-white/40">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    {assets.map((asset, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div
                            className="w-1.5 h-6 rounded-full"
                            style={{ backgroundColor: asset.color }}
                          />
                          <div>
                            <p className="text-white text-[14px] sm:text-[15px] font-medium">
                              {asset.label}
                            </p>
                            <p className="text-white/20 text-[10px] sm:text-[11px] font-bold">
                              {asset.change} this week
                            </p>
                          </div>
                        </div>
                        <span className="text-white font-bold text-sm sm:text-base">
                          {asset.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>

          {/* BOTTOM FADE OUT GRADIENT */}
          <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black via-black/20 to-transparent z-20 pointer-events-none" />
        </div>
      </section>
    </>
  );
}
