"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wifi, Eye, EyeOff, Plus, CreditCard } from "lucide-react";

export default function CreditCardWidget() {
  const [showNumber, setShowNumber] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="glass-panel rounded-2xl p-6 shadow-xl relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CreditCard className="h-4 w-4 text-indigo-400" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">
            Active Cards
          </h2>
        </div>
        <button
          onClick={() => setShowNumber(!showNumber)}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          {showNumber ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
          <span>{showNumber ? "Hide" : "Show"} Details</span>
        </button>
      </div>

      {/* Holographic Card Container */}
      <motion.div
        whileHover={{ rotateY: 4, rotateX: -4, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-950 p-6 text-white shadow-2xl border border-indigo-500/30"
      >
        {/* Glow & Holographic overlay */}
        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -left-12 -bottom-12 h-44 w-44 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-medium tracking-widest text-indigo-200 uppercase">
              Apex World Elite
            </span>
            <Wifi className="h-5 w-5 text-slate-300 rotate-90" />
          </div>

          {/* Chip */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-8 w-11 rounded-md bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-500 shadow-inner flex items-center justify-center border border-amber-300/40">
              <div className="h-5 w-8 border border-amber-800/40 rounded-sm" />
            </div>
            <span className="text-[10px] text-indigo-300 font-mono">NFC ENABLED</span>
          </div>

          {/* Card Number */}
          <div className="font-mono text-base sm:text-lg tracking-widest text-slate-100 font-semibold my-2">
            {showNumber ? "4532  8920  1140  7892" : "••••  ••••  ••••  7892"}
          </div>

          {/* Card Details */}
          <div className="mt-4 flex items-end justify-between pt-2">
            <div>
              <p className="text-[9px] uppercase tracking-wider text-indigo-300">Card Holder</p>
              <p className="text-xs font-semibold tracking-wide text-white uppercase">Sophia Brooks</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-wider text-indigo-300">Expires</p>
              <p className="text-xs font-mono font-semibold text-white">09/29</p>
            </div>
            <div className="flex -space-x-2">
              <div className="h-6 w-6 rounded-full bg-rose-500/90" />
              <div className="h-6 w-6 rounded-full bg-amber-400/90" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Card Action Buttons */}
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <button className="flex items-center justify-center gap-2 rounded-xl bg-slate-900/80 border border-slate-800 px-3 py-2 text-xs font-semibold text-slate-200 hover:border-slate-700 hover:bg-slate-800/80 transition-all">
          <Plus className="h-3.5 w-3.5 text-indigo-400" />
          <span>Add New Card</span>
        </button>
        <button className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600/10 border border-indigo-500/20 px-3 py-2 text-xs font-semibold text-indigo-300 hover:bg-indigo-600/20 transition-all">
          <span>Card Settings</span>
        </button>
      </div>
    </motion.div>
  );
}
