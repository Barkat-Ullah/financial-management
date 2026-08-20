"use client";

import React from "react";
import { motion } from "framer-motion";
import { budgetCategories } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { PieChart, Home, Utensils, Gamepad2, ShoppingBag, AlertCircle } from "lucide-react";

const categoryIconMap: Record<string, React.ReactNode> = {
  Home: <Home className="h-4 w-4" />,
  Utensils: <Utensils className="h-4 w-4" />,
  Gamepad2: <Gamepad2 className="h-4 w-4" />,
  ShoppingBag: <ShoppingBag className="h-4 w-4" />,
};

export default function BudgetProgress() {
  const totalAllocated = budgetCategories.reduce((acc, c) => acc + c.allocated, 0);
  const totalSpent = budgetCategories.reduce((acc, c) => acc + c.spent, 0);
  const overallPercentage = Math.round((totalSpent / totalAllocated) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="glass-panel rounded-2xl p-6 shadow-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <PieChart className="h-4 w-4 text-indigo-400" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">
            Monthly Budgets
          </h2>
        </div>
        <span className="text-xs font-semibold text-indigo-400">
          {overallPercentage}% utilized
        </span>
      </div>

      {/* Overall Progress Gauge Bar */}
      <div className="mb-6 rounded-xl bg-slate-900/80 p-3.5 border border-slate-800">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-slate-400">Overall Monthly Spending</span>
          <span className="font-bold text-white">
            {formatCurrency(totalSpent)} / {formatCurrency(totalAllocated)}
          </span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${overallPercentage}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`h-full rounded-full ${
              overallPercentage > 90
                ? "bg-rose-500"
                : overallPercentage > 75
                ? "bg-amber-500"
                : "bg-gradient-to-r from-indigo-500 to-emerald-400"
            }`}
          />
        </div>
      </div>

      {/* Individual Categories */}
      <div className="space-y-4">
        {budgetCategories.map((cat, idx) => {
          const pct = Math.round((cat.spent / cat.allocated) * 100);
          const isNearLimit = pct >= 85;

          return (
            <div key={cat.id} className="group">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-800 text-slate-300">
                    {categoryIconMap[cat.icon] || <ShoppingBag className="h-3.5 w-3.5" />}
                  </div>
                  <span className="font-semibold text-slate-200">{cat.name}</span>
                  {isNearLimit && (
                    <AlertCircle className="h-3.5 w-3.5 text-amber-400" />
                  )}
                </div>
                <div className="text-right">
                  <span className="font-bold text-slate-200">
                    {formatCurrency(cat.spent)}
                  </span>
                  <span className="text-slate-500"> / {formatCurrency(cat.allocated)}</span>
                </div>
              </div>

              {/* Individual category bar */}
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(pct, 100)}%` }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full ${cat.color}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
