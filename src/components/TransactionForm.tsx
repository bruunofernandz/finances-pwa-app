import React, { useState } from 'react';
import { useTransaction } from '../context/TransactionContext';
import { TransactionType, Transaction } from '../types/Transaction.types';

const TransactionForm: React.FC = () => {
  const { addTransaction } = useTransaction();
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>('');

  const handleSubmit = (typeValue: TransactionType) => {
    if (amount !== 0 || category !== '') {
      const newTransaction: Transaction = {
        id: Date.now().toString(),
        type: typeValue,
        amount,
        category,
        date: new Date().toISOString(),
      };

      addTransaction(newTransaction);
      setAmount(0);
      setCategory('');
    }
  };

  return (
    <div className="bg-[#ffffff] p-4 rounded shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">
        Adicionar Transação
      </h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Valor"
        required
        className="w-full p-2 border rounded text-black"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Categoria"
        required
        className="w-full p-2 border rounded text-black"
      />

      <div className="flex flex-row gap-4">
        <button
          className="w-full bg-red-500 text-white p-2 rounded"
          onClick={() => handleSubmit('expense')}
        >
          Retirar
        </button>
        <button
          onClick={() => handleSubmit('income')}
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Depositar
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;
