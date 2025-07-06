import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Transaction from '@/lib/models/Transaction';
import { Transaction as TransactionType } from '@/types';

export async function GET() {
    try {
        await connectDB();
        const transactions = await Transaction.find({}).sort({ date: -1 });
        return NextResponse.json(transactions);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch transactions' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const body: TransactionType = await request.json();

        const transaction = new Transaction(body);
        await transaction.save();

        return NextResponse.json(transaction, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to create transaction' },
            { status: 500 }
        );
    }
} 