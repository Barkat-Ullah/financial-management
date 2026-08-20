"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { monthlyTrends, MonthlyDataPoint } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { BarChart3, TrendingUp, Calendar } from "lucide-react";

export default function ExpenseChart() {
  const [activeTab, setActiveTab] = useState<"comparison" | "savings">("comparison");
  const [hoveredMonth, setHoveredMonth] = useState<MonthlyDataPoint | null>(null);

  const maxVal = Math.max(...monthlyTrends.map((d) => Math.max(d.income, d.expense, d.savings)));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-panel rounded-2xl p-6 shadow-xl"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
              <BarChart3 className="h-4 w-4" />
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight">Cashflow & Savings Performance</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-time monthly income vs expense analytics
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center rounded-xl bg-slate-900/90 p-1 border border-slate-800">
          <button
            onClick={() => setActiveTab("comparison")}
            className={`relative rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeTab === "comparison" ? "text-white" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {activeTab === "comparison" && (
              <motion.div
                layoutId="chartTab"
                className="absolute inset-0 rounded-lg bg-indigo-600 shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">Income vs Expense</span>
          </button>
          <button
            onClick={() => setActiveTab("savings")}
            className={`relative rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeTab === "savings" ? "text-white" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {activeTab === "savings" && (
              <motion.div
                layoutId="chartTab"
                className="absolute inset-0 rounded-lg bg-indigo-600 shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">Net Savings Trend</span>
          </button>
        </div>
      </div>

      {/* Legend & Hover Info */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 text-xs">
          {activeTab === "comparison" ? (
            <>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
                <span className="text-slate-300">Income</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-indigo-500" />
                <span className="text-slate-300">Expense</span>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
              <span className="text-slate-300">Net Surplus</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Calendar className="h-3.5 w-3.5" />
          <span>Jan - Jun 2026</span>
        </div>
      </div>

      {/* Bar Chart Visualization */}
      <div className="mt-6 flex h-60 items-end justify-between gap-3 sm:gap-6 pt-6 px-2">
        {monthlyTrends.map((item, index) => {
          const incomeHeight = (item.income / maxVal) * 100;
          const expenseHeight = (item.expense / maxVal) * 100;
          const savingsHeight = (item.savings / maxVal) * 100;

          return (
            <div
              key={item.month}
              className="group relative flex flex-1 flex-col items-center h-full justify-end"
              onMouseEnter={() => setHoveredMonth(item)}
              onMouseLeave={() => setHoveredMonth(null)}
            >
              {/* Tooltip on Hover */}
              {hoveredMonth?.month === item.month && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.95 }}
                  animate={{ opacity: 1, y: -12, scale: 1 }}
                  className="absolute -top-12 z-30 rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1 text-center shadow-2xl pointer-events-none whitespace-nowrap"
                >
                  <p className="text-[11px] font-bold text-white">{item.month} 2026</p>
                  <p className="text-[10px] text-emerald-400">
                    +{formatCurrency(item.income)}
                  </p>
                  <p className="text-[10px] text-indigo-300">
                    -{formatCurrency(item.expense)}
                  </p>
                </motion.div>
              )}

              {/* Bars */}
              <div className="flex w-full items-end justify-center gap-1.5 h-full">
                {activeTab === "comparison" ? (
                  <>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${incomeHeight}%` }}
                      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                      className="w-full max-w-[18px] rounded-t-md bg-gradient-to-t from-emerald-600 to-emerald-400 transition-all group-hover:brightness-125"
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${expenseHeight}%` }}
                      transition={{ duration: 0.6, delay: index * 0.08 + 0.1, ease: "easeOut" }}
                      className="w-full max-w-[18px] rounded-t-md bg-gradient-to-t from-indigo-600 to-indigo-400 transition-all group-hover:brightness-125"
                    />
                  </>
                ) : (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${savingsHeight}%` }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                    className="w-full max-w-[28px] rounded-t-md bg-gradient-to-t from-indigo-600 via-purple-600 to-pink-500 transition-all group-hover:brightness-125"
                  />
                )}
              </div>

              {/* Month label */}
              <span className="mt-3 text-xs font-semibold text-slate-400 transition-colors group-hover:text-white">
                {item.month}
              </span>
            </div>
          );
        })}
      </div>

      {/* Summary card below chart */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between rounded-xl bg-slate-900/60 border border-slate-800/80 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Savings Efficiency Up 24.8%</p>
            <p className="text-[11px] text-slate-400">Average savings retention increased to $8,430/mo</p>
          </div>
        </div>
        <div className="mt-3 sm:mt-0 text-right">
          <span className="inline-flex items-center gap-1 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 border border-indigo-500/20">
            AI Budget Recommendation Ready
          </span>
        </div>
      </div>
    </motion.div>
  );
}
