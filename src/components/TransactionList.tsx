import { useTransaction } from '@/context/TransactionContext';
import React from 'react';
import { BiArrowToBottom, BiArrowToTop } from 'react-icons/bi';

const TransactionList: React.FC = () => {
  const { transactions } = useTransaction();

  return (
    <div className="bg-white p-4 rounded shadow-md space-y-4 min-h-[50vh]">
      <h2 className="text-xl font-semibold text-gray-700">Transações</h2>
      <ul className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="py-2 flex justify-between border-2 border-dotted my-7 p-4"
          >
            <div>
              <p className="text-gray-600 flex flex-row items-center gap-2">
                {transaction.type === 'expense' ? (
                  <BiArrowToBottom />
                ) : (
                  <BiArrowToTop />
                )}{' '}
                {transaction.category}
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

        {transactions.length === 0 && (
          <div className="w-full h-[30vh] flex justify-center align-middle items-center">
            <p className="text-neutral-300 text-4xl text-center">
              Suas transações apareçerão aqui!
            </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
