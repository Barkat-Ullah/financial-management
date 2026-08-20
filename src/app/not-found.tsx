"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  ArrowLeft,
  LayoutDashboard,
  Compass,
  Sparkles,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#A855F7] selection:text-white">
      {/* Background ambient glowing gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-[#A855F7]/15 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-[#7E22CE]/15 blur-[130px]" />
        <div className="absolute top-1/2 left-10 h-64 w-64 rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      {/* Top Brand Bar */}
      <header className="relative z-10 mx-auto w-full max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#A855F7] via-[#9333ea] to-[#7E22CE] shadow-lg shadow-purple-600/30 text-white"
          >
            <TrendingUp className="h-5 w-5" />
          </motion.div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-[#c084fc] transition-colors">
              Velara AI
            </span>
            <span className="rounded-full bg-[#A855F7]/15 px-2 py-0.5 text-[10px] font-bold text-[#c084fc] border border-[#A855F7]/30">
              404
            </span>
          </div>
        </Link>

        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/80 backdrop-blur-md hover:border-white/20 hover:text-white transition-all shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Go Back</span>
        </button>
      </header>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-2xl mx-auto text-center my-auto py-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full bg-[#A855F7]/15 px-3.5 py-1 text-xs font-bold text-[#c084fc] border border-[#A855F7]/30 mb-6 shadow-lg shadow-purple-500/10"
        >
          <Compass className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "8s" }} />
          <span>Error 404 &bull; Navigation Offset</span>
        </motion.div>

        {/* 404 Hero Visual Number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative select-none"
        >
          <h1
            className="text-[120px] sm:text-[170px] md:text-[210px] font-black leading-none tracking-tighter bg-gradient-to-b from-white via-white/80 to-[#A855F7]/40 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(168,85,247,0.35)]"
          >
            404
          </h1>
          <motion.div
            animate={{
              y: [0, -8, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <div className="h-32 w-32 rounded-full bg-[#A855F7]/20 blur-2xl" />
          </motion.div>
        </motion.div>

        {/* Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Lost in the Financial Galaxy
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/50 max-w-lg mx-auto leading-relaxed">
            The page, portfolio asset, or transaction ledger you are looking for has been moved, renamed, or doesn&apos;t exist in this universe.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          {/* Primary Home Button */}
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#A855F7] via-[#9333ea] to-[#7E22CE] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-purple-600/30 hover:brightness-110 hover:scale-105 active:scale-95 transition-all"
          >
            <Home className="h-4 w-4" />
            <span>Back to Home Page</span>
          </Link>

          {/* Secondary Live Dashboard Button */}
          <Link
            href="/dashboard"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/90 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all shadow-md backdrop-blur-md"
          >
            <LayoutDashboard className="h-4 w-4 text-[#c084fc]" />
            <span>Go to Live Dashboard</span>
          </Link>
        </motion.div>

        {/* Quick Links Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 pt-8 border-t border-white/10"
        >
          <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
            Popular Destinations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "Features", href: "/#features" },
              { label: "How It Works", href: "/#how-it-works" },
              { label: "Security & GDPR", href: "/#security" },
              { label: "Pricing Plans", href: "/#pricing" },
              { label: "FAQ", href: "/#faq" },
              { label: "Create Account", href: "/signup" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-xs text-white/60 hover:text-white hover:border-[#A855F7]/40 hover:bg-[#A855F7]/10 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer info bar */}
      <footer className="relative z-10 mx-auto w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40 border-t border-white/5 pt-6">
        <p>&copy; {new Date().getFullYear()} Velara AI Inc. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span>System Status: Fully Operational</span>
        </div>
      </footer>
    </main>
  );
}
