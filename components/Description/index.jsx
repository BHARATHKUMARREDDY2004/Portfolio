import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';

export default function Description() {
    const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
    const description = useRef(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className="px-4 md:px-8 lg:px-20 xl:px-40 mt-20 md:mt-40 flex justify-center">
            <div className="max-w-7xl flex flex-col md:flex-row gap-8 md:gap-12 relative">
                <div className="w-full md:w-2/3">
                    <p className="text-2xl md:text-3xl lg:text-4xl leading-tight">
                        {phrase.split(" ").map((word, index) => (
                            <span
                                key={index}
                                className="inline-block overflow-hidden whitespace-nowrap" // Add whitespace handling
                            >
                                <motion.span
                                    className="inline-block"
                                    variants={slideUp}
                                    custom={index}
                                    animate={isInView ? "open" : "closed"}
                                >
                                    {word}&nbsp; {/* Use non-breaking space */}
                                </motion.span>
                            </span>
                        ))}
                    </p>
                </div>
                <div className="w-full md:w-1/3">
                    <motion.p
                        className="text-base md:text-lg font-light"
                        variants={opacity}
                        animate={isInView ? "open" : "closed"}
                    >
                        The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                        The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                        The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                    </motion.p>
                </div>
                {/* <div className="mt-8 md:mt-0 md:absolute md:bottom-0 md:right-0" data-scroll data-scroll-speed={0.1}>
                    <Rounded className="w-40 h-40 md:w-44 md:h-44 bg-gray-900 text-white rounded-full flex items-center justify-center cursor-pointer group">
                        <p className="text-sm md:text-base font-light relative z-10 group-hover:scale-110 transition-transform duration-300">About me</p>
                    </Rounded>
                </div> */}
            </div>
        </div>
    );
}
