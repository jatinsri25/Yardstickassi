# Personal Finance Visualizer

A modern web application for tracking personal finances with detailed analytics and visualizations. Built with Next.js, React, TypeScript, and MongoDB.

## Features

### Stage 1: Basic Transaction Tracking ✅
- **Add/Edit/Delete transactions** with amount, date, and description
- **Transaction list view** with sorting and filtering
- **Monthly expenses bar chart** using Recharts
- **Basic form validation** with error handling
- **Responsive design** for all devices

### Stage 2: Categories (Coming Soon)
- Predefined categories for transactions
- Category-wise pie chart
- Dashboard with summary cards
- Most recent transactions list

### Stage 3: Budgeting (Coming Soon)
- Set monthly category budgets
- Budget vs actual comparison chart
- Simple spending insights

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **UI Components**: shadcn/ui, Tailwind CSS
- **Charts**: Recharts
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB database (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-finance-visualizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── transactions/
│   │       ├── route.ts
│   │       └── [id]/route.ts
│   │   
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/          # shadcn/ui components
│   ├── TransactionForm.tsx
│   ├── TransactionList.tsx
│   └── MonthlyExpensesChart.tsx
├── lib/
│   ├── mongodb.ts
│   ├── models/
│   │   └── Transaction.ts
│   └── utils.ts
└── types/
    └── index.ts
```

## API Endpoints

### Transactions
- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create a new transaction
- `PUT /api/transactions/[id]` - Update a transaction
- `DELETE /api/transactions/[id]` - Delete a transaction

## Features in Detail

### Transaction Management
- Add new transactions with type (expense/income), amount, date, category, and description
- Edit existing transactions with full form validation
- Delete transactions with confirmation dialog
- Real-time updates without page refresh

### Data Visualization
- Monthly expenses bar chart showing the last 6 months
- Responsive chart design that works on all screen sizes
- Interactive tooltips with formatted currency values

### Dashboard Overview
- Summary cards showing total expenses, income, net amount, and transaction count
- Color-coded indicators (red for expenses, green for income)
- Real-time statistics calculation

### Form Validation
- Required field validation
- Amount must be greater than 0
- Date validation
- Description required
- Real-time error feedback

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your MongoDB connection string as an environment variable
4. Deploy!

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Note**: This application does not include authentication/login features as per the project requirements. All data is stored locally in the MongoDB database.
