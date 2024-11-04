import { useTransaction } from '@/context/TransactionContext';
import Image from 'next/image';
import React from 'react';
import { BiSolidBell } from 'react-icons/bi';
import FinacesImage2 from '../../public/assets/images/finances-person.jpg';

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
    <div className="bg-white p-4 rounded-b-lg shadow-md text-gray-400">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <Image
            src={FinacesImage2}
            alt={'finances-image'}
            className="w-[50px] h-[50px] rounded-full object-cover mr-3"
          />
          <div>
            <p className="text-black font-bold text-sm">Bruno Alves</p>
            <p className=" font-medium text-sm">bruunofernandz9@gmail.com</p>
          </div>
        </div>

        <div>
          <BiSolidBell size={30} />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <p className="flex flex-col">
          Saldo:{' '}
          <span
            className={`font-medium ${
              balance >= 0 ? 'text-black' : 'text-red-500'
            } text-3xl`}
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

        {/* <p className="flex flex-col">
          Receita Total:{' '}
          <span className="font-bold text-gray-700">${totalIncome}</span>
        </p>
        <p className="flex flex-col">
          Despesa Total:{' '}
          <span className="font-bold text-red-500">${totalExpense}</span>
        </p> */}
      </div>
    </div>
  );
};

export default Report;
