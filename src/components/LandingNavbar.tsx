"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, Menu, X, Sparkles } from "lucide-react";

export default function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#090d16]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
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
            <span className="rounded-full bg-[#A855F7]/15 px-2 py-0.5 text-[10px] font-bold text-[#c084fc] border border-[#A855F7]/30 hidden sm:inline-block">
              v2.6
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-white/70">
          <Link href="#features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#security" className="hover:text-white transition-colors">
            Security
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="hover:text-white transition-colors">
            Testimonials
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full px-5 py-2 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all border border-white/10"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="flex items-center gap-1.5 rounded-full bg-[#A855F7] hover:bg-[#9333ea] px-5 py-2 text-xs font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Get Started</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-xl p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-b border-white/10 bg-[#090d16]/95 px-6 py-5 backdrop-blur-2xl"
        >
          <div className="flex flex-col gap-3.5 text-sm font-semibold text-white/80">
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              How It Works
            </Link>
            <Link
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Security
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Testimonials
            </Link>
            <div className="pt-3 flex flex-col gap-2 border-t border-white/10">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-xl bg-white/5 border border-white/10 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-xl bg-[#A855F7] py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/30 hover:bg-[#9333ea] transition-colors"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
