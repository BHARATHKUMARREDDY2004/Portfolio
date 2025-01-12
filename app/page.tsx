'use client';
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader';
import Landing from '@/components/Landing';
import Skills from '@/components/Skills';
import Description from '../components/Description';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
          });

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  // return (
  //   <main data-scroll-section>
  //     <AnimatePresence mode='wait'>
  //       {isLoading && <Preloader />}
  //     </AnimatePresence>
  //     <Landing />
  //     {/* <Description /> */}
  //     <Skills />
  //   </main>
  // )

    
    
  return (
    <main data-scroll-container>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div data-scroll-section>
        <Landing />
      </div>
      <div data-scroll-section>
        <Description />
      </div>
      <div data-scroll-section>
        <Skills />
      </div>
    </main>
  );
  
}
