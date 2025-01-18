// import { frontEnd, backEnd } from "@/constants";
// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";

// const Skills = () => {
//   const frontEndRef = useRef<HTMLDivElement>(null);
//   const backEndRef = useRef<HTMLDivElement>(null);

//   const createScrollAnimation = (
//     rowRef: React.RefObject<HTMLDivElement>,
//     direction: "left" | "right"
//   ) => {
//     if (!rowRef.current) return;

//     const row = rowRef.current;

//     // Clone the row for seamless effect
//     const rowClone = row.cloneNode(true) as HTMLDivElement;
//     rowClone.style.position = "absolute";
//     rowClone.style.top = "0";
//     rowClone.style.left = direction === "left" ? `${row.scrollWidth}px` : `-${row.scrollWidth}px`;
//     row.parentElement?.appendChild(rowClone);

//     const rowWidth = row.scrollWidth;

//     const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });

//     // Animate both rows seamlessly
//     tl.to([row, rowClone], {
//       x: direction === "left" ? `-${rowWidth}px` : `${rowWidth}px`,
//       duration: 30,
//       onComplete: () => {
//         // Reset positions to maintain seamlessness
//         gsap.set(row, { x: 0 });
//         gsap.set(rowClone, { x: direction === "left" ? rowWidth : -rowWidth });
//       },
//     });

//     return () => {
//       tl.kill();
//       rowClone.remove();
//     };
//   };

//   useEffect(() => {
//     const cleanupFrontEnd = createScrollAnimation(frontEndRef, "left");
//     const cleanupBackEnd = createScrollAnimation(backEndRef, "right");

//     return () => {
//       cleanupFrontEnd?.();
//       cleanupBackEnd?.();
//     };
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center py-16 lg:py-32">
//       <p className="lg:w-[22rem] lg:mx-auto">
//         {"Frontend Skills"}
//       </p>

//       <div className="overflow-hidden relative">
//         {/* Gradient Overlay */}
        // <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-[2] pointer-events-none" />
        // <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-[2] pointer-events-none" />

//         <div className="relative flex w-[200%]">
//           <div ref={frontEndRef} className="flex">
//             {frontEnd.map((app) => (
//               <div
//                 key={app.id}
//                 className="flex items-center justify-center w-[6rem] h-[6rem] mx-4 bg-n-7 border border-n-1/15 rounded-2xl flex-shrink-0"
//               >
//                 <Image
//                   className="m-auto"
//                   width={app.width}
//                   height={app.height}
//                   alt={app.title}
//                   src={app.icon || "/placeholder.svg"}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <p className="lg:w-[22rem] lg:mx-auto">
//         {"Backend Skills"}
//       </p>

//       <div className="overflow-hidden relative">
//         {/* Gradient Overlay */}
//         <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-[2] pointer-events-none" />
//         <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-[2] pointer-events-none" />

//         <div className="relative flex w-[200%]">
//           <div ref={backEndRef} className="flex">
//             {backEnd.map((app) => (
//               <div
//                 key={app.id}
//                 className="flex items-center justify-center w-[6rem] h-[6rem] mx-4 bg-n-7 border border-n-1/15 rounded-2xl flex-shrink-0"
//               >
//                 <Image
//                   className="m-auto"
//                   width={app.width}
//                   height={app.height}
//                   alt={app.title}
//                   src={app.icon || "/placeholder.svg"}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


import { frontEnd, backEnd } from "@/constants";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Skills = () => {
  const frontEndRef = useRef<HTMLDivElement>(null);
  const backEndRef = useRef<HTMLDivElement>(null);

  const createScrollAnimation = (
    rowRef: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    if (!rowRef.current) return;

    const row = rowRef.current;

    // Clone the row for seamless effect
    const rowClone = row.cloneNode(true) as HTMLDivElement;
    rowClone.style.position = "absolute";
    rowClone.style.top = "0";
    rowClone.style.left = direction === "left" ? `${row.scrollWidth}px` : `-${row.scrollWidth}px`;
    row.parentElement?.appendChild(rowClone);

    const rowWidth = row.scrollWidth;

    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });

    // Animate both rows seamlessly
    tl.to([row, rowClone], {
      x: direction === "left" ? `-${rowWidth}px` : `${rowWidth}px`,
      duration: 30,
      onComplete: () => {
        // Reset positions to maintain seamlessness
        gsap.set(row, { x: 0 });
        gsap.set(rowClone, { x: direction === "left" ? rowWidth : -rowWidth });
      },
    });

    return () => {
      tl.kill();
      rowClone.remove();
    };
  };

  useEffect(() => {
    const cleanupFrontEnd = createScrollAnimation(frontEndRef, "left");
    const cleanupBackEnd = createScrollAnimation(backEndRef, "right");

    return () => {
      cleanupFrontEnd?.();
      cleanupBackEnd?.();
    };
  }, []);

 return (
    <div className="pb-[300px] flex flex-col items-center justify-center py-16 lg:py-32">
      <p className="lg:w-[22rem] lg:mx-auto my-6 font-semibold text-center text-xl">
        {"Frontend Skills"}
      </p>

      <div className="overflow-hidden relative w-full lg:w-auto">
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-[2] pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-[2] pointer-events-none" />
        <div className="relative flex w-full lg:w-[200%]" style={{ position: "relative" }}>
          <div ref={frontEndRef} className="flex">
            {frontEnd.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-center mx-1 md:mx-2 lg:mx-4 border border-gray-500/30 rounded-xl md:rounded-xl lg:rounded-2xl flex-shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              >
                <Image
                  className="m-auto"
                  width={app.width}
                  height={app.height}
                  alt={app.title}
                  src={app.icon || "/placeholder.svg"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="lg:w-[22rem] lg:mx-auto my-6 font-semibold text-center text-xl">
        {"Backend Skills"}
      </p>

      <div className="overflow-hidden relative w-full lg:w-auto">
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-[2] pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-[2] pointer-events-none" />
        <div className="relative flex w-full lg:w-[200%]" style={{ position: "relative" }}>
          <div ref={backEndRef} className="flex">
            {backEnd.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-center mx-1 md:mx-2 lg:mx-4 border border-gray-500/30 rounded-xl md:rounded-xl lg:rounded-2xl flex-shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              >
                <Image
                  className="m-auto"
                  width={app.width}
                  height={app.height}
                  alt={app.title}
                  src={app.icon || "/placeholder.svg"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
