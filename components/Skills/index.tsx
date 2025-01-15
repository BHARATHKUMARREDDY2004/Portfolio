import { collabApps } from "@/constants";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <img
        src="/collaboration/curve-2.svg"
        width={162}
        height={76}
        alt="Curve 2"
      />
    </div>
  );
};

const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <img
        src="/collaboration/curve-1.svg"
        width={522}
        height={182}
        alt="Curve 1"
      />
    </div>
  );
};

const Skills = () => {
  const circleRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!circleRef.current) return;

    const circle = circleRef.current;
    const items = itemsRef.current;

    gsap.to(circle, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });

    items.forEach((item, index) => {
      if (item) {
        gsap.to(item, {
          rotation: gsap.utils.wrap([-360, 0]),
          duration: 20,
          repeat: -1,
          ease: "none",
        });
      }
    });

  }, []);

  return (
    <div className="lg:ml-auto xl:w-[38rem] mt-4">
      <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
        {"Skills"}
      </p>

      <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
        <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
          <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
            <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
              <img
                src="/collaboration/figma.png"
                width={48}
                height={48}
                alt="brainwave"
              />
            </div>
          </div>
        </div>

        <ul ref={circleRef} className="absolute inset-0">
          {collabApps.map((app, index) => (
            <li
              key={app.id}
              className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
              style={{ transform: `rotate(${index * 45}deg)` }}
            >
              <div
                ref={el => itemsRef.current[index] = el}
                className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl"
              >
                <img
                  className="m-auto"
                  width={app.width}
                  height={app.height}
                  alt={app.title}
                  src={app.icon || "/placeholder.svg"}
                />
              </div>
            </li>
          ))}
        </ul>

        <LeftCurve />
        <RightCurve />
      </div>
    </div>
  );
};

export default Skills;

