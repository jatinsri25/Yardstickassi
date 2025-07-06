export interface Transaction {
    _id?: string;
    amount: number;
    date: string;
    description: string;
    category?: string;
    type: 'expense' | 'income';
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Category {
    _id?: string;
    name: string;
    color: string;
    icon: string;
}

export interface MonthlyData {
    month: string;
    total: number;
}

export interface CategoryData {
    category: string;
    amount: number;
    percentage: number;
}

export interface Budget {
    _id?: string;
    category: string;
    amount: number;
    month: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface DashboardStats {
    totalExpenses: number;
    totalIncome: number;
    netAmount: number;
    recentTransactions: Transaction[];
    monthlyExpenses: MonthlyData[];
    categoryBreakdown: CategoryData[];
} 