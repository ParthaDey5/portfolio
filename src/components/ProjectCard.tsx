import React, { useRef, useEffect } from "react";
import External from "..//assets/images/external-link.svg?react";
import Github from "..//assets/images/github.svg?react";

interface ProjectCardProps {
  title: string;
  about: string;
  img: string;
  tools: React.ReactNode;
  link: string;
  code: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  about,
  img,
  link,
  tools,
  code,
  className,
}) => {
  // const [hovered, setHovered] = useState<boolean>(false);
  // const [isActive, setIsActive] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Watch the DOM className directly
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new MutationObserver(() => {
      // setIsActive(el.classList.contains("active"));
    });

    observer.observe(el, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={className}>
      {/* <div
        className="desktop:rounded-[1.44vw] absolute inset-0 flex items-center justify-center desktop:gap-[2vw] bg-Black75/50 transition-all ease-linear z-[50]"
        style={{
          opacity: isActive && hovered ? 1 : 0,
          pointerEvents: isActive && hovered ? "auto" : "none",
        }}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center desktop:gap-[0.5vw] animate-fade-in-up transition-all ease-linear cursor-pointer2 bg-gradient-to-r from-cyan-400 to-cyan-500 desktop:rounded-[0.2vw] desktop:py-[0.25vw] desktop:px-[1vw] text-white"
        >
          <External className="desktop:w-[1vw] aspect-square" />
          Live
        </a>
        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center desktop:gap-[0.5vw] cursor-pointer2 bg-Light-grayish-blue desktop:rounded-[0.2vw] desktop:py-[0.25vw] desktop:px-[1vw] text-Black75"
        >
          <Github className="desktop:w-[1.15vw] aspect-square" />
          Code
        </a>
      </div> */}

      <div className="img dark:border-Dark-grayish-blue border-Light-grayish-blue">
        <img src={img} alt={title} />
      </div>

      <section className="bg-White dark:bg-Black75 h-[200%] flex flex-col items-start justify-start desktop:gap-[0.8vw] gap-[1vw] !w-full desktop:rounded-b-[1.1vw] rounded-b-[3vw] desktop:px-[1vw] px-[1.5vw] desktop:py-[0.8vw] py-[1.5vw]">
        <h1 className="title desktop:leading-[1.55vw] leading-[2.8vw] desktop:tracking-[0.02vw] tracking-[0.15vw] font-bold titleTxt text-left text-shadow-2xs text-shadow-gray-100 dark:text-Pale-orange">
          {title}
        </h1>
        <h2 className="desc smallBigTxt font-light dark:font-normal text-left text-Dark-grayish-blue dark:text-White desktop:tracking-[0.06vw] tracking-[0.06vw] desktop:leading-[1.2vw] leading-[2vw] dark:desktop:text-shadow-none desktop:text-shadow-2xs text-shadow-gray-100 desktop:mb-0 mb-[0.5vw]">
          {about}
        </h2>
        <div className="w-full flex desktop:gap-[0.8vw]">{tools}</div>
        <h3 className="desktop:mt-[1vw] mt-[1vw] w-full flex justify-start desktop:gap-[1.5vw] gap-[2vw] montserrat font-semibold smallTxt">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md dark:shadow-none shadow-gray-300 flex items-center justify-center desktop:gap-[0.4vw] gap-[0.5vw] animate-fade-in-up transition-all ease-linear cursor-pointer2 bg-gradient-to-r from-green-300 via-cyan-400 to-green-600 desktop:rounded-[0.28vw] rounded-[0.5vw] tracking-[0.03vw] desktop:w-[5.5vw] w-[8vw]  py-[0.3vw] text-white"
          >
            <External className="desktop:w-[0.9vw] w-[1.5vw] aspect-square" />
            Live
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md dark:shadow-none shadow-gray-300 flex items-center justify-center desktop:gap-[0.4vw] gap-[0.5vw] cursor-pointer2 dark:bg-Light-grayish-blue tracking-[0.03vw] desktop:rounded-[0.28vw] rounded-[0.5vw] py-[0.3vw] desktop:w-[5.5vw] w-[8vw] dark:text-Black75 text-White bg-Black75"
          >
            <Github className="desktop:w-[1vw] w-[1.5vw] aspect-square" />
            Code
          </a>
        </h3>
      </section>
    </div>
  );
};

export default ProjectCard;
