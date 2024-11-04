import { useTransaction } from '@/context/TransactionContext';
import React from 'react';

const Report: React.FC = () => {
  const { transactions } = useTransaction();

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="bg-white p-4 rounded shadow-md text-gray-700">
      <h2 className="text-xl font-semibold">Relatório Mensal</h2>
      <div className="mt-4 space-y-2">
        <p>
          Receita Total:{' '}
          <span className="font-bold text-green-500">${totalIncome}</span>
        </p>
        <p>
          Despesa Total:{' '}
          <span className="font-bold text-red-500">${totalExpense}</span>
        </p>
        <p>
          Saldo:{' '}
          <span
            className={`font-bold ${
              balance >= 0 ? 'text-green-500' : 'text-red-500'
            }`}
          >
            ${balance}
          </span>
        </p>
        {balance < 0 && (
          <p className="mt-4 text-sm text-yellow-600">
            Dica: Verifique suas despesas e planeje cortes para manter o saldo
            positivo.
          </p>
        )}
      </div>
    </div>
  );
};

export default Report;
