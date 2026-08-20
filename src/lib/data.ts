export interface Transaction {
  id: string;
  title: string;
  category: "Shopping" | "Food & Dining" | "Entertainment" | "Salary" | "Investment" | "Utilities" | "Health";
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
    title: "Total Balance",
    amount: 48590.75,
    change: "+12.5%",
    isPositive: true,
    subtext: "vs last month",
    accent: "from-blue-600 to-indigo-600",
  },
  {
    title: "Monthly Income",
    amount: 14250.0,
    change: "+8.2%",
    isPositive: true,
    subtext: "+$1,080 from salary & bonus",
    accent: "from-emerald-500 to-teal-700",
  },
  {
    title: "Monthly Expenses",
    amount: 5820.4,
    change: "-4.3%",
    isPositive: true,
    subtext: "$320 under budget limit",
    accent: "from-rose-500 to-orange-600",
  },
  {
    title: "Investments & Savings",
    amount: 28520.35,
    change: "+18.9%",
    isPositive: true,
    subtext: "Active portfolio yield",
    accent: "from-violet-600 to-purple-800",
  },
];

export const monthlyTrends: MonthlyDataPoint[] = [
  { month: "Jan", income: 11200, expense: 6200, savings: 5000 },
  { month: "Feb", income: 12500, expense: 5800, savings: 6700 },
  { month: "Mar", income: 11800, expense: 7100, savings: 4700 },
  { month: "Apr", income: 13400, expense: 6400, savings: 7000 },
  { month: "May", income: 12900, expense: 5900, savings: 7000 },
  { month: "Jun", income: 14250, expense: 5820, savings: 8430 },
];

export const initialTransactions: Transaction[] = [
  {
    id: "tx-1",
    title: "Apple Store - MacBook Pro",
    category: "Shopping",
    amount: 2499.0,
    type: "expense",
    date: "Today, 2:45 PM",
    paymentMethod: "Apple Pay •••• 4821",
    iconName: "Laptop",
  },
  {
    id: "tx-2",
    title: "TechCorp Global Payroll",
    category: "Salary",
    amount: 8500.0,
    type: "income",
    date: "Today, 9:00 AM",
    paymentMethod: "Direct Deposit",
    iconName: "Briefcase",
  },
  {
    id: "tx-3",
    title: "Whole Foods Market",
    category: "Food & Dining",
    amount: 142.85,
    type: "expense",
    date: "Yesterday, 6:15 PM",
    paymentMethod: "Visa Card •••• 9032",
    iconName: "ShoppingBag",
  },
  {
    id: "tx-4",
    title: "Vanguard Dividend Yield",
    category: "Investment",
    amount: 620.4,
    type: "income",
    date: "Aug 18, 2026",
    paymentMethod: "Portfolio Account",
    iconName: "TrendingUp",
  },
  {
    id: "tx-5",
    title: "Netflix & Spotify Bundle",
    category: "Entertainment",
    amount: 28.99,
    type: "expense",
    date: "Aug 17, 2026",
    paymentMethod: "Mastercard •••• 1109",
    iconName: "Film",
  },
  {
    id: "tx-6",
    title: "Equinox Fitness Club",
    category: "Health",
    amount: 260.0,
    type: "expense",
    date: "Aug 15, 2026",
    paymentMethod: "Visa Card •••• 9032",
    iconName: "HeartPulse",
  },
];

export const budgetCategories: BudgetCategory[] = [
  {
    id: "b-1",
    name: "Housing & Utilities",
    allocated: 2800,
    spent: 2450,
    color: "bg-blue-500",
    icon: "Home",
  },
  {
    id: "b-2",
    name: "Food & Groceries",
    allocated: 1200,
    spent: 890,
    color: "bg-emerald-500",
    icon: "Utensils",
  },
  {
    id: "b-3",
    name: "Entertainment & Leisure",
    allocated: 800,
    spent: 650,
    color: "bg-purple-500",
    icon: "Gamepad2",
  },
  {
    id: "b-4",
    name: "Shopping & Lifestyle",
    allocated: 1500,
    spent: 1350,
    color: "bg-amber-500",
    icon: "ShoppingBag",
  },
];

export const quickContacts: QuickContact[] = [
  {
    id: "c-1",
    name: "Alex Rivera",
    email: "alex.r@example.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: "c-2",
    name: "Sarah Chen",
    email: "sarah.c@example.com",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: "c-3",
    name: "Marcus Vance",
    email: "m.vance@example.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: "c-4",
    name: "Elena Rostova",
    email: "elena.r@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
];
