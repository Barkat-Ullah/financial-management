export interface Transaction {
  id: string;
  title: string;
  category: "Shopping" | "Food & Dining" | "Entertainment" | "Salary" | "Investment" | "Utilities" | "Health" | "AI Cloud";
  amount: number;
  type: "income" | "expense";
  date: string;
  paymentMethod: string;
  iconName: string;
}

export interface BudgetCategory {
  id: string;
  name: string;
  allocated: number;
  spent: number;
  color: string;
  icon: string;
}

export interface QuickContact {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

export interface MonthlyDataPoint {
  month: string;
  income: number;
  expense: number;
  savings: number;
}

export const initialStats = [
  {
    title: "Total Portfolio Balance",
    amount: 94850.45,
    change: "+18.4%",
    isPositive: true,
    subtext: "vs last month",
    accent: "from-[#A855F7] to-[#7E22CE]",
  },
  {
    title: "Monthly Revenue",
    amount: 18450.0,
    change: "+12.2%",
    isPositive: true,
    subtext: "+$2,280 yield & bonuses",
    accent: "from-emerald-500 to-teal-700",
  },
  {
    title: "Monthly Expenses",
    amount: 4820.4,
    change: "-6.3%",
    isPositive: true,
    subtext: "$620 under monthly ceiling",
    accent: "from-rose-500 to-orange-600",
  },
  {
    title: "AI Staking & Investments",
    amount: 45600.35,
    change: "+24.9%",
    isPositive: true,
    subtext: "Active auto-rebalance yield",
    accent: "from-purple-600 to-violet-900",
  },
];

export const monthlyTrends: MonthlyDataPoint[] = [
  { month: "Jan", income: 12200, expense: 5200, savings: 7000 },
  { month: "Feb", income: 14500, expense: 4800, savings: 9700 },
  { month: "Mar", income: 13800, expense: 5100, savings: 8700 },
  { month: "Apr", income: 16400, expense: 5400, savings: 11000 },
  { month: "May", income: 15900, expense: 4900, savings: 11000 },
  { month: "Jun", income: 18450, expense: 4820, savings: 13630 },
];

export const initialTransactions: Transaction[] = [
  {
    id: "tx-1",
    title: "Apple Vision Pro Developer Kit",
    category: "Shopping",
    amount: 3499.0,
    type: "expense",
    date: "Today, 2:45 PM",
    paymentMethod: "Apple Pay •••• 7892",
    iconName: "Laptop",
  },
  {
    id: "tx-2",
    title: "Velara AI Predictive Dividend",
    category: "Investment",
    amount: 4250.0,
    type: "income",
    date: "Today, 9:00 AM",
    paymentMethod: "Direct Yield Protocol",
    iconName: "TrendingUp",
  },
  {
    id: "tx-3",
    title: "Whole Foods Organic Market",
    category: "Food & Dining",
    amount: 168.45,
    type: "expense",
    date: "Yesterday, 6:15 PM",
    paymentMethod: "Velara Titanium Card •••• 7892",
    iconName: "ShoppingBag",
  },
  {
    id: "tx-4",
    title: "Vanguard Global S&P Yield",
    category: "Investment",
    amount: 1420.8,
    type: "income",
    date: "Aug 18, 2026",
    paymentMethod: "Automated Portfolio",
    iconName: "TrendingUp",
  },
  {
    id: "tx-5",
    title: "AWS GPU Compute Cluster",
    category: "AI Cloud",
    amount: 280.0,
    type: "expense",
    date: "Aug 17, 2026",
    paymentMethod: "Mastercard •••• 1109",
    iconName: "Laptop",
  },
  {
    id: "tx-6",
    title: "Equinox Executive Club",
    category: "Health",
    amount: 310.0,
    type: "expense",
    date: "Aug 15, 2026",
    paymentMethod: "Velara Titanium Card •••• 7892",
    iconName: "HeartPulse",
  },
];

export const budgetCategories: BudgetCategory[] = [
  {
    id: "b-1",
    name: "Housing & Real Estate",
    allocated: 3500,
    spent: 2850,
    color: "bg-[#A855F7]",
    icon: "Home",
  },
  {
    id: "b-2",
    name: "Food & Fine Dining",
    allocated: 1400,
    spent: 980,
    color: "bg-emerald-500",
    icon: "Utensils",
  },
  {
    id: "b-3",
    name: "AI Subscriptions & Tech",
    allocated: 950,
    spent: 680,
    color: "bg-[#c084fc]",
    icon: "Gamepad2",
  },
  {
    id: "b-4",
    name: "Travel & Lifestyle",
    allocated: 2000,
    spent: 1420,
    color: "bg-amber-500",
    icon: "ShoppingBag",
  },
];

export const quickContacts: QuickContact[] = [
  {
    id: "c-1",
    name: "Alex Rivera",
    email: "alex.r@velara.ai",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: "c-2",
    name: "Sarah Chen",
    email: "sarah.c@velara.ai",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: "c-3",
    name: "Marcus Vance",
    email: "m.vance@velara.ai",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: "c-4",
    name: "Elena Rostova",
    email: "elena.r@velara.ai",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
];
