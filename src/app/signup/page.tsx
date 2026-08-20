"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isDemoLoading, setIsDemoLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Normal sign-up submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password || !agreedTerms) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 700);
    }, 1000);
  };

  // 1-Click Instant Demo Login
  const handleDemoLogin = () => {
    setFullName("Sophia Brooks");
    setEmail("sophia.brooks@apexfinance.com");
    setPassword("••••••••••••");
    setIsDemoLoading(true);

    setTimeout(() => {
      setIsDemoLoading(false);
      setSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 700);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#A855F7] selection:text-white">
      {/* Background ambient glowing gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-[#A855F7]/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 h-96 w-96 rounded-full bg-[#7E22CE]/15 blur-[120px]" />
      </div>

      {/* Top back navigation */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/80 backdrop-blur-md hover:border-white/20 hover:text-white transition-all shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Landing</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 pt-8 sm:pt-0">
        {/* Brand Logo Header */}
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#A855F7] via-[#9333ea] to-[#7E22CE] shadow-xl shadow-purple-600/30 text-white"
            >
              <TrendingUp className="h-7 w-7" />
            </motion.div>
          </Link>
          <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Create Your Account
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-white/50">
            Join thousands managing their wealth with Velara AI
          </p>
        </div>

        {/* Auth Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        >
          <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative bg-black/60 backdrop-blur-2xl">
            {/* 1-Click Demo Login Highlight Banner */}
            <div className="mb-6 rounded-2xl bg-gradient-to-r from-purple-950/80 via-[#1e1035] to-slate-900 p-4 border border-[#A855F7]/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-[#c084fc] font-bold text-xs">
                  <Sparkles className="h-3.5 w-3.5 text-[#A855F7]" />
                  <span>Instant Recruiter / Demo Access</span>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                  Pre-configured
                </span>
              </div>
              <p className="text-[11px] text-white/70 mb-3">
                Skip registration to instantly explore full features with pre-loaded mock assets and charts.
              </p>
              <motion.button
                type="button"
                onClick={handleDemoLogin}
                disabled={isDemoLoading || success}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#A855F7] via-[#9333ea] to-[#7E22CE] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/30 hover:brightness-110 transition-all"
              >
                {isDemoLoading ? (
                  <>
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Launching Demo Account...</span>
                  </>
                ) : success ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-white" />
                    <span>Success! Redirecting to Dashboard...</span>
                  </>
                ) : (
                  <>
                    <span>⚡ 1-Click Demo Launch (Sophia Brooks)</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </motion.button>
            </div>

            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#101018] px-3 text-[11px] font-semibold text-white/40 rounded-full border border-white/10">
                  Or Sign Up with Email
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Sophia Brooks"
                    className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/20 focus:border-[#A855F7] focus:outline-none focus:ring-2 focus:ring-[#A855F7]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sophia@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/20 focus:border-[#A855F7] focus:outline-none focus:ring-2 focus:ring-[#A855F7]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-10 py-2.5 text-sm text-white placeholder-white/20 focus:border-[#A855F7] focus:outline-none focus:ring-2 focus:ring-[#A855F7]/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center text-xs">
                <label className="flex items-center gap-2 text-white/60 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedTerms}
                    onChange={(e) => setAgreedTerms(e.target.checked)}
                    className="rounded border-white/20 bg-white/5 text-[#A855F7] focus:ring-[#A855F7]/30"
                  />
                  <span>
                    I agree to the{" "}
                    <Link href="/#security" className="text-[#c084fc] hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and Privacy Policy
                  </span>
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading || isDemoLoading || success || !agreedTerms}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#A855F7] hover:bg-[#9333ea] py-3 text-xs font-bold text-white transition-all shadow-lg shadow-purple-600/30"
              >
                {isLoading ? (
                  <>
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <span>Create Free Account</span>
                )}
              </motion.button>
            </form>

            <div className="mt-6 text-center text-xs text-white/60">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-[#c084fc] hover:underline">
                Sign In
              </Link>
            </div>

            {/* Security note */}
            <div className="mt-6 flex items-center justify-center gap-1.5 text-[11px] text-white/40 border-t border-white/5 pt-4">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Protected by 256-bit SSL & biometric security</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
