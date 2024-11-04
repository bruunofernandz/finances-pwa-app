'use client';

import Report from '@/components/Report';
import TransactionForm from '@/components/TransactionForm';
import TransactionList from '@/components/TransactionList';
import { TransactionProvider } from '@/context/TransactionContext';

export default function Transactions() {
  return (
    <>
      <TransactionProvider>
        <div className="max-w-2xl mx-auto p-4 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Controle de Finanças Pessoais
          </h1>
          <TransactionForm />
          <TransactionList />
          <Report />
        </div>
      </TransactionProvider>
    </>
  );
}
