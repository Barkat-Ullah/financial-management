"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface StatCardProps {
  title: string;
  amount: number;
  change: string;
  isPositive: boolean;
  subtext: string;
  accent: string;
  index: number;
}

export default function StatCard({
  title,
  amount,
  change,
  isPositive,
  subtext,
  accent,
  index,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-panel glass-panel-hover group relative overflow-hidden rounded-2xl p-6 shadow-xl"
    >
      {/* Decorative gradient corner glow */}
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
      />

      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {title}
        </span>
        <div
          className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
            isPositive
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
          }`}
        >
          {isPositive ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          <span>{change}</span>
        </div>
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          {formatCurrency(amount)}
        </h3>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-slate-800/80 pt-3 text-xs text-slate-400">
        <span>{subtext}</span>
        <span className="flex items-center gap-0.5 text-indigo-400 font-medium group-hover:translate-x-0.5 transition-transform">
          Details
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </motion.div>
  );
}
