'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Transaction } from '@/types';
import { format } from 'date-fns';
import { Edit, Trash2, Plus } from 'lucide-react';
import TransactionForm from './TransactionForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface TransactionListProps {
    transactions: Transaction[];
    onAddTransaction: (transaction: Omit<Transaction, '_id' | 'createdAt' | 'updatedAt'>) => void;
    onUpdateTransaction: (id: string, transaction: Omit<Transaction, '_id' | 'createdAt' | 'updatedAt'>) => void;
    onDeleteTransaction: (id: string) => void;
    isLoading?: boolean;
}

export default function TransactionList({
    transactions,
    onAddTransaction,
    onUpdateTransaction,
    onDeleteTransaction,
    isLoading = false
}: TransactionListProps) {
    const [showAddForm, setShowAddForm] = useState(false);
    const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleAddTransaction = async (transaction: Omit<Transaction, '_id' | 'createdAt' | 'updatedAt'>) => {
        setIsSubmitting(true);
        try {
            await onAddTransaction(transaction);
            setShowAddForm(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleUpdateTransaction = async (transaction: Omit<Transaction, '_id' | 'createdAt' | 'updatedAt'>) => {
        if (!editingTransaction?._id) return;

        setIsSubmitting(true);
        try {
            await onUpdateTransaction(editingTransaction._id, transaction);
            setEditingTransaction(null);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteTransaction = async (id: string) => {
        if (confirm('Are you sure you want to delete this transaction?')) {
            await onDeleteTransaction(id);
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Transactions</h2>
                <Button onClick={() => setShowAddForm(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Transaction
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                    {transactions.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            No transactions found. Add your first transaction to get started!
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {transactions.map((transaction) => (
                                    <TableRow key={transaction._id}>
                                        <TableCell>
                                            {format(new Date(transaction.date), 'MMM dd, yyyy')}
                                        </TableCell>
                                        <TableCell className="max-w-xs truncate">
                                            {transaction.description}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="secondary">
                                                {transaction.category || 'Uncategorized'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={transaction.type === 'expense' ? 'destructive' : 'default'}>
                                                {transaction.type}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className={`text-right font-medium ${transaction.type === 'expense' ? 'text-red-600' : 'text-green-600'
                                            }`}>
                                            {transaction.type === 'expense' ? '-' : '+'}
                                            {formatCurrency(transaction.amount)}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex gap-2 justify-end">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => setEditingTransaction(transaction)}
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleDeleteTransaction(transaction._id!)}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>

            {}
            <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Add New Transaction</DialogTitle>
                    </DialogHeader>
                    <TransactionForm
                        onSubmit={handleAddTransaction}
                        onCancel={() => setShowAddForm(false)}
                        isLoading={isSubmitting}
                    />
                </DialogContent>
            </Dialog>

            {}
            <Dialog open={!!editingTransaction} onOpenChange={() => setEditingTransaction(null)}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Edit Transaction</DialogTitle>
                    </DialogHeader>
                    {editingTransaction && (
                        <TransactionForm
                            transaction={editingTransaction}
                            onSubmit={handleUpdateTransaction}
                            onCancel={() => setEditingTransaction(null)}
                            isLoading={isSubmitting}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
} 