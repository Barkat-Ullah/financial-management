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
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white pb-16">
      {/* Background ambient glow effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute top-1/3 right-10 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-emerald-600/5 blur-3xl" />
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
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Live Portfolio Session
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Financial Portfolio Dashboard
              </h1>
              <p className="text-sm text-slate-400 mt-1">
                Welcome back, Sophia! Here is your real-time cashflow and expense intelligence overview.
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all shadow-sm">
                <Download className="h-4 w-4" />
                <span>Export Statement</span>
              </button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 transition-all"
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
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="dashboardNavTab"
                      className="absolute inset-0 rounded-xl bg-slate-900 border border-slate-800 shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className="relative z-10 h-3.5 w-3.5" />
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
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-panel relative w-full max-w-md rounded-2xl p-6 shadow-2xl z-10 border border-slate-700/80"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <h3 className="text-base font-bold text-white">Record New Transaction</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="rounded-lg p-1 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {modalSuccess ? (
                <div className="py-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto mb-2 animate-bounce" />
                  <p className="text-base font-bold text-white">Transaction Recorded!</p>
                  <p className="text-xs text-slate-400 mt-1">Portfolio balance updated in real-time.</p>
                </div>
              ) : (
                <form onSubmit={handleCreateTransaction} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Type
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setType("expense")}
                        className={`rounded-xl py-2 text-xs font-bold transition-all ${
                          type === "expense"
                            ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                            : "bg-slate-900 border border-slate-800 text-slate-400"
                        }`}
                      >
                        Expense
                      </button>
                      <button
                        type="button"
                        onClick={() => setType("income")}
                        className={`rounded-xl py-2 text-xs font-bold transition-all ${
                          type === "income"
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : "bg-slate-900 border border-slate-800 text-slate-400"
                        }`}
                      >
                        Income
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Description / Merchant
                    </label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g., Stripe Payout or Groceries"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Amount ($ USD)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-colors"
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
