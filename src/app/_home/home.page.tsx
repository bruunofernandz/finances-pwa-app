'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FinacesImage from '../../../public/assets/images/finances-image-1.jpg';
import FinacesImage2 from '../../../public/assets/images/finances-person.jpg';
import { BsArrowRight } from 'react-icons/bs';
import { AnimatedBackground } from '@/components/AnimatedBackgound';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-end min-h-screen p-8 bg-gradient-to-b from-[#373599] to-[#171717]">
      <main className="flex flex-col">
        <AnimatedBackground
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        <div>
          <Image
            src={FinacesImage2}
            alt={'finances-image'}
            className="w-[150px] h-[150px] rounded-lg object-cover"
          />

          <div className="my-2" />

          <Image
            src={FinacesImage}
            alt={'finances-image'}
            className="w-full h-[180px] rounded-lg object-cover"
          />

          <div className="my-12" />

          <div className="flex flex-col">
            <h1 className="text-3xl mb-2 text-white text-start">
              O controle das suas finanças e de suas dores de cabeça
            </h1>
            <p className="text-slate-400">
              Desbloqueie o poder do gerenciamento economico, para todos
            </p>

            <div className="my-4" />

            <button
              onClick={() => router.push('/transactions')}
              className="flex flex-row justify-between items-center text-black font-medium bg-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-[4px] text-sm px-8 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 h-[60px]"
              style={{
                boxShadow: '0 0 20px #171717',
              }}
            >
              Comece gratuitamente
              <BsArrowRight />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
