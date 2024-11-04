'use client';

import Report from '@/components/Report';
import TransactionForm from '@/components/TransactionForm';
import TransactionList from '@/components/TransactionList';
import { TransactionProvider } from '@/context/TransactionContext';

export default function Transactions() {
  return (
    <>
      <TransactionProvider>
        <div className="">
          <Report />

          <div className="my-4" />

          <TransactionForm />

          <div className="my-4" />

          <TransactionList />
        </div>
      </TransactionProvider>
    </>
  );
}
