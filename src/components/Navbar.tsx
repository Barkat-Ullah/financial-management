"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Search, ShieldCheck, Wallet, ChevronDown, LogOut, ArrowLeft, User } from "lucide-react";

export default function Navbar() {
  const [hasNotifications, setHasNotifications] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/25"
            >
              <Wallet className="h-5 w-5 text-white" />
            </motion.div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                  ApexFinance
                </span>
                <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-400 border border-indigo-500/20">
                  PRO
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Intelligent Wealth & Analytics</p>
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search transactions, assets, budgets (⌘K)..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900/80 pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 transition-all focus:border-indigo-500 focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Security Status indicator */}
          <div className="hidden lg:flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>256-bit Encrypted</span>
          </div>

          {/* Home Link */}
          <Link
            href="/"
            className="hidden sm:flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Landing</span>
          </Link>

          {/* Notifications Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setHasNotifications(false)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
            aria-label="View notifications"
          >
            <Bell className="h-4 w-4" />
            {hasNotifications && (
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-indigo-500 ring-2 ring-slate-950 animate-pulse" />
            )}
          </motion.button>

          {/* User Profile dropdown button */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/60 p-1.5 pr-3 text-left transition-colors hover:border-slate-700"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                alt="Profile"
                className="h-7 w-7 rounded-lg object-cover ring-1 ring-slate-700"
              />
              <div className="hidden sm:block">
                <p className="text-xs font-medium text-slate-200 leading-none">Sophia Brooks</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Executive Tier</p>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400 hidden sm:block" />
            </motion.button>

            {/* Profile Dropdown Menu */}
            <AnimatePresence>
              {showProfileMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-800 bg-slate-900/95 p-1.5 shadow-2xl backdrop-blur-xl z-50"
                >
                  <div className="px-3 py-2 border-b border-slate-800">
                    <p className="text-xs font-bold text-white">Sophia Brooks</p>
                    <p className="text-[10px] text-slate-400">sophia.brooks@apexfinance.com</p>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={() => setShowProfileMenu(false)}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                      <User className="h-3.5 w-3.5 text-indigo-400" />
                      <span>Account Profile</span>
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs text-rose-400 hover:bg-rose-500/10 transition-colors"
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
