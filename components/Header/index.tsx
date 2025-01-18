"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rounded from "@/common/RoundedButton";
import Magnetic from "@/common/Magnetic";
import Link from "next/link";

export default function Header() {
  const header = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight - 600,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
          setIsActive(false);
        },
      },
    });
  }, []);

  return (
    <>
      <div
        ref={header}
        className="absolute flex top-0 text-white p-9 justify-between w-full font-light box-border items-center px-3 py-4 md:px-9 md:py-9"
      >
        <div className={`z-[3] flex cursor-pointer`}>
          <p className="m-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-360">
            ©
          </p>
          <div className="flex relative overflow-hidden whitespace-nowrap ml-[5px] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:pr-[180px]">
            <p className="relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-full">
              Code by
            </p>
            <p className="flex relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-[65px]">
              <span className="pl-[0.3em]">Bharath Kumar Reddy</span>
              <span className="absolute left-full whitespace-nowrap pl-[0.3em]">
                Vemireddy
              </span>
            </p>
          </div>
        </div>
        <nav className="hidden md:flex items-center">
          {["work", "about", "contact"].map((item) => (
            <Magnetic key={item}>
              <div className="flex flex-col relative z-[1] p-[15px] cursor-pointer group">
                <Link href={`/${item}`} className="cursor-pointer">
                  {item}
                </Link>
                <div className="absolute w-[5px] h-[5px] top-[45px] left-1/2 bg-white rounded-full scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></div>
              </div>
            </Magnetic>
          ))}
        </nav>
        <div className="flex md:hidden items-center">
          <Magnetic>
            <div
              className="flex items-center relative z-[4] cursor-pointer group"
              onClick={() => setIsActive(!isActive)} // Toggle `isActive` state
            >
              {/* Smooth transition between "Menu" and "Close" */}
              <div className="flex items-center transition-all duration-300 ease-in-out">
                <div className="w-[5px] h-[5px] bg-white rounded-full mr-[5px] transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></div>
                <span className="transition-all duration-300 ease-in-out">
                  {!isActive ? "Menu" : "Close"}
                </span>
              </div>
            </div>
          </Magnetic>
        </div>
      </div>

      <div ref={button} className="scale-0 fixed right-0 z-[4]">
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="relative m-5 w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#1C1D20] cursor-pointer flex items-center justify-center"
        >
          <div
            className={`w-full relative z-[1] flex items-center justify-center ${
              isActive
                ? "before:rotate-45 before:translate-y-0 after:-rotate-45 after:translate-y-0"
                : "before:translate-y-[-5px] after:translate-y-[5px]"
            } before:content-[''] before:block before:h-[2px] before:w-3/5 before:bg-white before:absolute before:transition-all before:duration-300 after:content-[''] after:block after:h-[2px] after:w-3/5 after:bg-white after:absolute after:transition-all after:duration-300`}
          ></div>
        </Rounded>
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
