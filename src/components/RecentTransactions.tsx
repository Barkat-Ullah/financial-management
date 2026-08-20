"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  initialTransactions,
  Transaction,
} from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import {
  Laptop,
  Briefcase,
  ShoppingBag,
  TrendingUp,
  Film,
  HeartPulse,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Laptop: <Laptop className="h-4 w-4" />,
  Briefcase: <Briefcase className="h-4 w-4" />,
  ShoppingBag: <ShoppingBag className="h-4 w-4" />,
  TrendingUp: <TrendingUp className="h-4 w-4" />,
  Film: <Film className="h-4 w-4" />,
  HeartPulse: <HeartPulse className="h-4 w-4" />,
};

export default function RecentTransactions() {
  const [transactions] = useState<Transaction[]>(initialTransactions);
  const [filter, setFilter] = useState<"all" | "income" | "expense">("all");

  const filteredTransactions = transactions.filter((tx) => {
    if (filter === "income") return tx.type === "income";
    if (filter === "expense") return tx.type === "expense";
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-panel rounded-2xl p-6 shadow-xl border border-white/10"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">Recent Transactions</h2>
          <p className="text-xs text-white/40 mt-0.5">
            Real-time feed of all incoming and outgoing portfolio movements
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 rounded-xl bg-white/5 p-1 border border-white/10 self-start sm:self-auto">
          {(["all", "income", "expense"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`relative rounded-lg px-3 py-1.5 text-xs font-semibold capitalize transition-colors ${
                filter === tab ? "text-white" : "text-white/50 hover:text-white"
              }`}
            >
              {filter === tab && (
                <motion.div
                  layoutId="txFilterTab"
                  className="absolute inset-0 rounded-lg bg-[#A855F7] shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Transaction List */}
      <div className="mt-4 divide-y divide-white/5">
        <AnimatePresence mode="popLayout">
          {filteredTransactions.map((tx, index) => {
            const isIncome = tx.type === "income";
            return (
              <motion.div
                key={tx.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                className="flex items-center justify-between py-3.5 px-2 rounded-xl transition-colors"
              >
                {/* Left: Icon & Info */}
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      isIncome
                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                        : "bg-[#A855F7]/15 text-[#c084fc] border border-[#A855F7]/30"
                    }`}
                  >
                    {iconMap[tx.iconName] || <ShoppingBag className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-white">{tx.title}</p>
                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                      <span className="text-[11px] font-medium text-white/40">
                        {tx.paymentMethod}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span className="text-[11px] text-white/30">{tx.date}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Amount & Category */}
                <div className="text-right shrink-0 ml-2">
                  <div
                    className={`flex items-center justify-end gap-1 text-xs sm:text-sm font-bold ${
                      isIncome ? "text-emerald-400" : "text-white"
                    }`}
                  >
                    {isIncome ? (
                      <ArrowDownLeft className="h-3.5 w-3.5" />
                    ) : (
                      <ArrowUpRight className="h-3.5 w-3.5 text-white/40" />
                    )}
                    <span>
                      {isIncome ? "+" : "-"}
                      {formatCurrency(tx.amount)}
                    </span>
                  </div>
                  <span className="inline-block mt-0.5 rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-medium text-white/50">
                    {tx.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 text-center">
        <button className="text-xs font-semibold text-[#c084fc] hover:text-white transition-colors">
          View All Transactions Archive →
        </button>
      </div>
    </motion.div>
  );
}
