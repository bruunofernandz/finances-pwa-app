import { useTransaction } from '@/context/TransactionContext';
import React from 'react';

const TransactionList: React.FC = () => {
  const { transactions } = useTransaction();

  return (
    <div className="bg-white p-4 rounded shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Transações</h2>
      <ul className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="py-2 flex justify-between">
            <div>
              <p className="text-gray-600">
                {transaction.description} - {transaction.category}
              </p>
              <p className="text-sm text-gray-400">{transaction.date}</p>
            </div>
            <p
              className={`font-semibold ${
                transaction.type === 'income'
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
