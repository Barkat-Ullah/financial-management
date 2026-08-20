"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Search,
  ShieldCheck,
  TrendingUp,
  ChevronDown,
  LogOut,
  ArrowLeft,
  User,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [hasNotifications, setHasNotifications] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#090d16]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#A855F7] via-[#9333ea] to-[#7E22CE] shadow-lg shadow-purple-600/30 text-white"
            >
              <TrendingUp className="h-5 w-5" />
            </motion.div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-[#c084fc] transition-colors">
                  Velara AI
                </span>
                <span className="rounded-full bg-[#A855F7]/15 px-2 py-0.5 text-[10px] font-bold text-[#c084fc] border border-[#A855F7]/30">
                  PRO
                </span>
              </div>
              <p className="text-xs text-white/40 hidden sm:block">Intelligent Wealth & Predictive Analytics</p>
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="Search transactions, assets, budgets (⌘K)..."
              className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-2 text-sm text-white placeholder-white/30 transition-all focus:border-[#A855F7] focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-[#A855F7]/20"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Security Status indicator */}
          <div className="hidden lg:flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>256-bit Encrypted</span>
          </div>

          {/* Home Link */}
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 hover:text-white hover:border-white/20 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Landing</span>
          </Link>

          {/* Notifications Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setHasNotifications(false)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-white/20 hover:text-white"
            aria-label="View notifications"
          >
            <Bell className="h-4 w-4" />
            {hasNotifications && (
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#A855F7] ring-2 ring-black animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            )}
          </motion.button>

          {/* User Profile dropdown button */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 sm:gap-2.5 rounded-xl border border-white/10 bg-white/5 p-1.5 pr-2.5 sm:pr-3 text-left transition-colors hover:border-white/20"
            >
              <div className="h-7 w-7 rounded-lg overflow-hidden relative ring-1 ring-white/20 shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                  alt="Profile avatar"
                  width={28}
                  height={28}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-white leading-none">Sophia Brooks</p>
                <p className="text-[10px] text-white/40 mt-0.5 flex items-center gap-1">
                  <Sparkles size={10} className="text-[#A855F7]" />
                  <span>Executive Tier</span>
                </p>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-white/40 hidden sm:block" />
            </motion.button>

            {/* Profile Dropdown Menu */}
            <AnimatePresence>
              {showProfileMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-52 rounded-2xl border border-white/15 bg-[#0e121e]/95 p-2 shadow-2xl backdrop-blur-2xl z-50"
                >
                  <div className="px-3 py-2.5 border-b border-white/10">
                    <p className="text-xs font-bold text-white">Sophia Brooks</p>
                    <p className="text-[10px] text-white/50 truncate">sophia.brooks@apexfinance.com</p>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={() => setShowProfileMenu(false)}
                      className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <User className="h-3.5 w-3.5 text-[#c084fc]" />
                      <span>Account Profile</span>
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs text-rose-400 hover:bg-rose-500/10 transition-colors"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
