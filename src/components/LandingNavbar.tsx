"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wallet, ArrowRight, Menu, X, Shield, Sparkles } from "lucide-react";

export default function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/25"
          >
            <Wallet className="h-5 w-5 text-white" />
          </motion.div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              ApexFinance
            </span>
            <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-400 border border-indigo-500/20 hidden sm:inline-block">
              v2.4
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#analytics" className="hover:text-white transition-colors">
            Analytics
          </a>
          <a href="#security" className="hover:text-white transition-colors">
            Security
          </a>
          <a href="#testimonials" className="hover:text-white transition-colors">
            Testimonials
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-xl px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900 transition-all border border-transparent hover:border-slate-800"
          >
            Sign In
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-indigo-600/25 hover:opacity-95 transition-all"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Launch Demo</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 py-5 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 text-sm font-semibold text-slate-300">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white"
            >
              Features
            </a>
            <a
              href="#analytics"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white"
            >
              Analytics
            </a>
            <a
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white"
            >
              Security
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white"
            >
              Testimonials
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/login"
                className="w-full text-center rounded-xl bg-slate-900 border border-slate-800 py-2.5 text-xs font-bold text-white"
              >
                Sign In
              </Link>
              <Link
                href="/login"
                className="w-full text-center rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/30"
              >
                Launch Demo App
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
