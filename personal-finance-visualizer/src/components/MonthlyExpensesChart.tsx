'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Transaction, MonthlyData } from '@/types';
import { format, parseISO, startOfMonth } from 'date-fns';

interface MonthlyExpensesChartProps {
    transactions: Transaction[];
}

export default function MonthlyExpensesChart({ transactions }: MonthlyExpensesChartProps) {
    const processData = (): MonthlyData[] => {
        const monthlyData: { [key: string]: number } = {};

        
        const months = [];
        for (let i = 5; i >= 0; i--) {
            const date = new Date();
            date.setMonth(date.getMonth() - i);
            const monthKey = format(date, 'yyyy-MM');
            months.push(monthKey);
            monthlyData[monthKey] = 0;
        }

        
        transactions.forEach(transaction => {
            if (transaction.type === 'expense') {
                const monthKey = format(parseISO(transaction.date), 'yyyy-MM');
                if (monthlyData[monthKey] !== undefined) {
                    monthlyData[monthKey] += transaction.amount;
                }
            }
        });

        
        return months.map(month => ({
            month: format(parseISO(month + '-01'), 'MMM yyyy'),
            total: Math.round(monthlyData[month] * 100) / 100
        }));
    };

    const data = processData();

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Monthly Expenses</CardTitle>
            </CardHeader>
            <CardContent>
                {data.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        No expense data available
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="month"
                                tick={{ fontSize: 12 }}
                                angle={-45}
                                textAnchor="end"
                                height={80}
                            />
                            <YAxis
                                tickFormatter={formatCurrency}
                                tick={{ fontSize: 12 }}
                            />
                            <Tooltip
                                formatter={(value: number) => [formatCurrency(value), 'Expenses']}
                                labelFormatter={(label) => `Month: ${label}`}
                            />
                            <Bar
                                dataKey="total"
                                fill="#ef4444"
                                radius={[4, 4, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </CardContent>
        </Card>
    );
} 