'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

export default function Introduction() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect(() => {
      const updateDimension = () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
      }
      updateDimension()
      window.addEventListener('resize', updateDimension)
      return () => window.removeEventListener('resize', updateDimension)
    }, [])

    useEffect(() => {
        if(index == words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }

    return (
        <motion.div 
            variants={slideUp} 
            initial="initial" 
            exit="exit" 
            className="h-screen w-screen flex items-center justify-center fixed z-[99] bg-gray-900"
        >
            {dimension.width > 0 && 
            <>
                <motion.p 
                    variants={opacity} 
                    initial="initial" 
                    animate="enter" 
                    className="flex text-white text-2xl md:text-[42px] items-center absolute z-10"
                >
                    <span className="block w-[10px] h-[10px] bg-white rounded-full mr-[10px]"></span>
                    {words[index]}
                </motion.p>
                <svg className="absolute top-0 w-full h-[calc(100%+150px)] md:h-[calc(100%+300px)]">
                    <motion.path 
                        variants={curve} 
                        initial="initial" 
                        exit="exit"
                        className="fill-gray-900"
                    ></motion.path>
                </svg>
            </>
            }
        </motion.div>
    )
}

