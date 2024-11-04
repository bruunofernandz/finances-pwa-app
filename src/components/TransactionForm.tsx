import React, { useState } from 'react';
import { useTransaction } from '../context/TransactionContext';
import { TransactionType, Transaction } from '../types/Transaction.types';

const TransactionForm: React.FC = () => {
  const { addTransaction } = useTransaction();
  const [type, setType] = useState<TransactionType>('income');
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      type,
      amount,
      category,
      date: new Date().toISOString(),
      description,
    };
    addTransaction(newTransaction);
    setAmount(0);
    setCategory('');
    setDescription('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-700">
        Adicionar Transação
      </h2>
      <select
        value={type}
        onChange={(e) => setType(e.target.value as TransactionType)}
        className="w-full p-2 border rounded"
      >
        <option value="income">Receita</option>
        <option value="expense">Despesa</option>
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Valor"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Categoria"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição"
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Adicionar
      </button>
    </form>
  );
};

export default TransactionForm;
