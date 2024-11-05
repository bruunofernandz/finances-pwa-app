import { useEffect, useState } from 'react';
import anime from 'animejs';
import Image from 'next/image';
import Logo from '../app/icon-512x512.png';

interface ISplashScreen {
  handleIsLoaded: () => void;
}

export function SplashScreen({ handleIsLoaded }: ISplashScreen) {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => handleIsLoaded(),
    });

    loader
      .add({
        targets: '#logo',
        delay: 0,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo',
      })
      .add({
        targets: '#logo',
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: 'easeInOutExpo',
      })
      .add({
        targets: '#logo',
        delay: 0,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo',
      })
      .add({
        targets: '#logo',
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: 'easeInOutExpo',
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    isMounted && (
      <div className="flex h-screen items-center justify-center bg-[#ffffff]">
        <Image
          id="#logo"
          src={Logo}
          className="h-[150px] w-[150px]"
          alt={'Logo'}
        />
      </div>
    )
  );
}
