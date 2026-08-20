"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import ExpenseChart from "@/components/ExpenseChart";
import RecentTransactions from "@/components/RecentTransactions";
import QuickTransfer from "@/components/QuickTransfer";
import CreditCardWidget from "@/components/CreditCardWidget";
import BudgetProgress from "@/components/BudgetProgress";
import { initialStats } from "@/lib/data";
import {
  Download,
  Plus,
  TrendingUp,
  LayoutDashboard,
  CreditCard,
  PieChart,
  Settings,
  X,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("overview");
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  // New Transaction Modal form state
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"expense" | "income">("expense");

  const handleCreateTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;
    setModalSuccess(true);
    setTimeout(() => {
      setModalSuccess(false);
      setShowAddModal(false);
      setTitle("");
      setAmount("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-[#A855F7] selection:text-white pb-16">
      {/* Background ambient glow effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#A855F7]/12 blur-[140px]" />
        <div className="absolute top-1/3 right-10 h-96 w-96 rounded-full bg-[#7E22CE]/12 blur-[140px]" />
        <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-emerald-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
          {/* Header Banner & Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                  <Sparkles size={12} />
                  Live Portfolio Session
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Financial Portfolio Dashboard
              </h1>
              <p className="text-sm text-white/50 mt-1">
                Welcome back, Sophia! Here is your real-time cashflow, crypto staking, and expense intelligence overview.
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => alert("Statement exported successfully to PDF / CSV.")}
                className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs font-semibold text-white/80 hover:text-white hover:border-white/20 transition-all shadow-sm"
              >
                <Download className="h-4 w-4 text-[#c084fc]" />
                <span>Export Statement</span>
              </button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 rounded-xl bg-[#A855F7] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/30 hover:bg-[#9333ea] transition-all"
              >
                <Plus className="h-4 w-4" />
                <span>Add Record</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Navigation Pill Tabs */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "overview", label: "Overview", icon: LayoutDashboard },
              { id: "analytics", label: "Analytics & Trends", icon: TrendingUp },
              { id: "cards", label: "Wallets & Cards", icon: CreditCard },
              { id: "budgets", label: "Budgets & Goals", icon: PieChart },
              { id: "settings", label: "Settings", icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeNav === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveNav(tab.id)}
                  className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
                    isActive ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="dashboardNavTab"
                      className="absolute inset-0 rounded-xl bg-[#A855F7]/20 border border-[#A855F7]/40 shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className={`relative z-10 h-3.5 w-3.5 ${isActive ? "text-[#c084fc]" : ""}`} />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Key Metric Stats Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {initialStats.map((stat, idx) => (
              <StatCard key={stat.title} {...stat} index={idx} />
            ))}
          </div>

          {/* AI Banner Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-[#190c2e]/80 to-[#0d1326] p-4 sm:p-5 border border-[#A855F7]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#A855F7]/20 border border-[#A855F7]/40 flex items-center justify-center text-[#c084fc] shrink-0">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-white flex items-center gap-2">
                  <span>AI Portfolio Rebalancer Active</span>
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-500/30">
                    +4.2% Optimization
                  </span>
                </p>
                <p className="text-xs text-white/50 mt-0.5">
                  Velara automatically shifted $2,400 to high-yield staking pools based on inflation and market metrics.
                </p>
              </div>
            </div>
            <button
              onClick={() => alert("Rebalance settings configured.")}
              className="px-4 py-2 rounded-xl bg-[#A855F7]/20 border border-[#A855F7]/40 hover:bg-[#A855F7]/30 text-[#c084fc] text-xs font-bold transition-all self-start sm:self-auto shrink-0"
            >
              View Automation Rules →
            </button>
          </motion.div>

          {/* Core Dashboard Grid Section */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left/Main Column: Chart & Transactions */}
            <div className="lg:col-span-8 space-y-8">
              <ExpenseChart />
              <RecentTransactions />
            </div>

            {/* Right Column: Card, Instant Transfer, Budgets */}
            <div className="lg:col-span-4 space-y-8">
              <CreditCardWidget />
              <QuickTransfer />
              <BudgetProgress />
            </div>
          </div>
        </main>
      </div>

      {/* Add Record / Transaction Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-panel relative w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-white/15 bg-[#0e121e]/95 backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles size={16} className="text-[#A855F7]" />
                  <span>Record New Transaction</span>
                </h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="rounded-lg p-1.5 text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {modalSuccess ? (
                <div className="py-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto mb-2 animate-bounce" />
                  <p className="text-base font-bold text-white">Transaction Recorded!</p>
                  <p className="text-xs text-white/50 mt-1">Portfolio balance updated in real-time.</p>
                </div>
              ) : (
                <form onSubmit={handleCreateTransaction} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-white/70 block mb-1">
                      Transaction Type
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setType("expense")}
                        className={`rounded-xl py-2.5 text-xs font-bold transition-all ${
                          type === "expense"
                            ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm"
                            : "bg-white/5 border border-white/10 text-white/50 hover:text-white"
                        }`}
                      >
                        Expense
                      </button>
                      <button
                        type="button"
                        onClick={() => setType("income")}
                        className={`rounded-xl py-2.5 text-xs font-bold transition-all ${
                          type === "income"
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                            : "bg-white/5 border border-white/10 text-white/50 hover:text-white"
                        }`}
                      >
                        Income
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-white/70 block mb-1">
                      Description / Merchant
                    </label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g., Stripe Payout or NVIDIA Cloud"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#A855F7] focus:outline-none focus:ring-2 focus:ring-[#A855F7]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-white/70 block mb-1">
                      Amount ($ USD)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#A855F7] focus:outline-none focus:ring-2 focus:ring-[#A855F7]/20 transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[#A855F7] py-3 text-sm font-bold text-white shadow-lg shadow-purple-600/30 hover:bg-[#9333ea] transition-all"
                    >
                      Save Transaction
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
