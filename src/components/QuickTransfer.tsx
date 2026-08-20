"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { quickContacts, QuickContact } from "@/lib/data";
import { Send, CheckCircle2, DollarSign, Sparkles } from "lucide-react";

export default function QuickTransfer() {
  const [selectedContact, setSelectedContact] = useState<QuickContact>(quickContacts[0]);
  const [amount, setAmount] = useState<string>("150");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const presets = ["50", "100", "250", "500"];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="glass-panel rounded-2xl p-6 shadow-xl relative"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Instant Transfer
          </h2>
          <p className="text-xs text-white/40 mt-0.5">Zero-fee instant peer transfers</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-[#A855F7]/15 px-2.5 py-0.5 text-[10px] font-bold text-[#c084fc] border border-[#A855F7]/30">
          <Sparkles className="h-3 w-3" />
          Instant
        </span>
      </div>

      {/* Recipient Selection */}
      <div className="mb-4">
        <label className="text-xs font-semibold text-white/60 mb-2.5 block">
          Select Recipient
        </label>
        <div className="grid grid-cols-4 gap-2">
          {quickContacts.map((contact) => {
            const isSelected = selectedContact.id === contact.id;
            return (
              <motion.button
                key={contact.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedContact(contact)}
                className={`relative flex flex-col items-center rounded-xl p-2 transition-all ${
                  isSelected
                    ? "bg-[#A855F7]/20 border-2 border-[#A855F7] shadow-md shadow-purple-600/25"
                    : "bg-white/5 border border-white/10 hover:border-white/20"
                }`}
              >
                <div className="h-10 w-10 rounded-full overflow-hidden relative ring-2 ring-white/10 shrink-0">
                  <Image
                    src={contact.avatar}
                    alt={contact.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="mt-1.5 text-[11px] font-medium text-white/90 truncate w-full text-center">
                  {contact.name.split(" ")[0]}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Transfer Form */}
      <form onSubmit={handleSend}>
        <label className="text-xs font-semibold text-white/60 mb-1.5 block">Amount (USD)</label>
        <div className="relative mb-3">
          <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-2.5 text-base font-bold text-white placeholder-white/20 focus:border-[#A855F7] focus:outline-none focus:ring-2 focus:ring-[#A855F7]/20 transition-all"
          />
        </div>

        {/* Quick Amount Presets */}
        <div className="grid grid-cols-4 gap-1.5 mb-4">
          {presets.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setAmount(preset)}
              className={`rounded-lg py-1.5 text-xs font-semibold transition-all ${
                amount === preset
                  ? "bg-[#A855F7] text-white shadow-md shadow-purple-600/30"
                  : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              +${preset}
            </button>
          ))}
        </div>

        {/* Send Button */}
        <motion.button
          type="submit"
          disabled={isSending || isSuccess || !amount}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`relative w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white shadow-lg transition-all ${
            isSuccess
              ? "bg-emerald-600 shadow-emerald-600/20"
              : "bg-gradient-to-r from-[#A855F7] via-[#9333ea] to-[#7E22CE] shadow-purple-600/30 hover:brightness-110"
          }`}
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1.5 text-white"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>Transferred ${amount} to {selectedContact.name.split(" ")[0]}!</span>
              </motion.div>
            ) : isSending ? (
              <motion.div
                key="sending"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                <span>Processing Transfer...</span>
              </motion.div>
            ) : (
              <motion.div
                key="send"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Send className="h-4 w-4" />
                <span>Send {amount ? `$${amount}` : "Funds"} Now</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </form>
    </motion.div>
  );
}
