"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDemoLoading, setIsDemoLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Normal login submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

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
    setEmail("sophia.brooks@apexfinance.com");
    setPassword("••••••••••••");
    setIsDemoLoading(true);

    setTimeout(() => {
      setIsDemoLoading(false);
      setSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 700);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      {/* Background ambient glowing gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-indigo-600/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl" />
      </div>

      {/* Top back navigation */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2 text-xs font-semibold text-slate-300 backdrop-blur-md hover:border-slate-700 hover:text-white transition-all shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Landing</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        {/* Brand Logo Header */}
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 shadow-xl shadow-indigo-500/25"
            >
              <Wallet className="h-7 w-7 text-white" />
            </motion.div>
          </Link>
          <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Welcome to ApexFinance
          </h2>
          <p className="mt-1.5 text-xs text-slate-400">
            Sign in to access your real-time portfolio & cashflow dashboard
          </p>
        </div>

        {/* Auth Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        >
          <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800/90 relative">
            {/* 1-Click Demo Login Highlight Banner */}
            <div className="mb-6 rounded-2xl bg-gradient-to-r from-indigo-950/80 via-purple-950/60 to-slate-900 p-4 border border-indigo-500/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-indigo-300 font-bold text-xs">
                  <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Instant Recruiter / Demo Access</span>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                  Pre-configured
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mb-3">
                Experience full features instantly with pre-loaded mock assets, charts, and transaction feeds.
              </p>
              <motion.button
                type="button"
                onClick={handleDemoLogin}
                disabled={isDemoLoading || success}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 hover:opacity-95 transition-all"
              >
                {isDemoLoading ? (
                  <>
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Signing In with Demo Account...</span>
                  </>
                ) : success ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-white" />
                    <span>Success! Redirecting to Dashboard...</span>
                  </>
                ) : (
                  <>
                    <span>⚡ 1-Click Demo Login (Sophia Brooks)</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </motion.button>
            </div>

            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-900 px-3 text-[11px] font-semibold text-slate-500 rounded-full border border-slate-800">
                  Or Sign In with Credentials
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/80 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-slate-300">Password</label>
                  <a href="#" className="text-[11px] font-medium text-indigo-400 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/80 pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="rounded border-slate-800 bg-slate-900 text-indigo-600 focus:ring-indigo-500/20"
                  />
                  <span>Remember this device</span>
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading || isDemoLoading || success}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 py-2.5 text-xs font-bold text-white transition-all shadow-md"
              >
                {isLoading ? (
                  <>
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Signing In...</span>
                  </>
                ) : (
                  <span>Sign In to Dashboard</span>
                )}
              </motion.button>
            </form>

            {/* Security note */}
            <div className="mt-6 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Protected by 256-bit SSL & biometric multi-factor auth</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
