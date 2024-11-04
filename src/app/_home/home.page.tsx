'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FinacesImage from '../../../public/assets/images/finances-image.jpg';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-end min-h-screen p-8">
      <main className="flex flex-col gap-8">
        <Image src={FinacesImage} alt={'finances-image'} className="mb-8" />
        <div className="flex flex-col">
          <h1 className="text-4xl mb-12 text-neutral-500 text-center">
            Simplifique o controle das suas finanças
          </h1>
          <button
            onClick={() => router.push('/transactions')}
            className="text-white font-bold bg-gradient-to-r from-[#5C59FF] to-[#373599] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 h-[60px]"
            style={{
              boxShadow: '0 0 20px #5C59FF',
            }}
          >
            Comece gratuitamente
          </button>
        </div>
      </main>
    </div>
  );
}
