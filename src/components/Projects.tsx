import React, { useRef, useEffect } from "react";
import "../Custom.css";
import ProjectCard from "./ProjectCard";
import ReactIcon from "..//assets/images/react-original.svg?react";
import TailwindIcon from "..//assets/images/tailwindcss-original.svg?react";
import JavascriptIcon from "..//assets/images/javascript-original.svg?react";
import FramerIcon from "..//assets/images/framermotion-original.svg?react";


// Define the shape of a project
interface Project {
  title: string;
  about: string;
  img: string;
  link: string;
  code: string;
  tools: React.ReactNode;
  className?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Weather App",
      about:
        "Responsive weather app with real‑time data, forecasts, and location‑based updates.",
      img: "/assets/weather.png",
      tools: (
        <>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw] flex items-center justify-center">
            <ReactIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center  shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <TailwindIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <JavascriptIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw">
            <FramerIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
        </>
      ),
      link: "https://weather-app-main-lyart.vercel.app",
      code: "https://github.com/ParthaDey5/weather-app-main",
    },
    {
      title: "E-commerce product page",
      about:
        "Responsive e‑commerce page with gallery, cart, and interactive details.",
      img: "/assets/EC.png",
      link: "https://ecommerce-product-page-main-psi-two.vercel.app",
      code: "https://github.com/ParthaDey5/ecommerce-product-page-main",
      tools: (
        <>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <ReactIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <TailwindIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <JavascriptIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <FramerIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
        </>
      ),
    },
    {
      title: "Interactive comments section",
      about:
        "Interactive comments with nested replies, voting, and state management.",
      img: "/assets/ICS.png",
      link: "https://interactive-comments-section-main-alpha.vercel.app",
      code: "https://github.com/ParthaDey5/interactive-comments-section-main",
      tools: (
        <>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <ReactIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <TailwindIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <JavascriptIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
        </>
      ),
    },
    {
      title: "Multi-step form",
      about:
        "Multi‑step form with progress tracking, validation, and smooth navigation.",
      img: "/assets/MSF.jpg",
      link: "https://multi-step-form-main-ash.vercel.app",
      code: "https://github.com/ParthaDey5/multi-step-form-main",
      tools: (
        <>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <ReactIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <TailwindIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <JavascriptIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
        </>
      ),
    },
    {
      title: "Rock, Paper, Scissors game",
      about:
        "An interactive Rock, Paper, Scissors game with dynamic score tracking and responsive UI.",
      img: "/assets/RPS.png",
      link: "https://rock-paper-scissors-master-dnle.vercel.app",
      code: "https://github.com/ParthaDey5/rock-paper-scissors-master",
      tools: (
        <>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <ReactIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <TailwindIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <JavascriptIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
        </>
      ),
    },
    {
      title: "REST Countries API",
      about:
        "Responsive REST Countries app with search, filters, and detailed country views.",
      img: "/assets/RCA.png",
      link: "https://rest-countries-api-with-color-theme-kappa.vercel.app",
      code: "https://github.com/ParthaDey5/rest-countries-api-with-color-theme-switcher-master",
      tools: (
        <>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <ReactIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <TailwindIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <JavascriptIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <FramerIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
        </>
      ),
    },
    {
      title: "Space tourism website",
      about:
        "Responsive space tourism site to explore destinations, crew, and technology.",
      img: "/assets/ST.png",
      link: "https://parthadey5.github.io/space-tourism-website-main",
      code: "https://github.com/ParthaDey5/space-tourism-website-main",
      tools: (
        <>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <TailwindIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:w-[1.7vw] w-[3.4vw] aspect-square flex items-center justify-center shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)] desktop:mr-0 mr-[1.5vw]">
            <JavascriptIcon className="desktop:w-[1vw] w-[2.2vw] aspect-square" />
          </div>
        </>
      ),
    },
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null); // Now refs the inner scrollable
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
  
    
  
    const children = Array.from(el.children).filter(
      (child) => child instanceof HTMLElement
    );
  
    // Initialize first as active
    children.forEach((c) => c.classList.remove("active"));
    if (children[0]) children[0].classList.add("active");
  
    const updateActive = () => {
      const { scrollLeft, clientWidth } = el;
      const center = scrollLeft + clientWidth / 2;
  
      let best = { idx: 0, dist: Infinity };
      children.forEach((child, idx) => {
        const rect = child.getBoundingClientRect();
        const childCenter =
          el.scrollLeft +
          rect.left -
          el.getBoundingClientRect().left +
          rect.width / 2;
        const d = Math.abs(childCenter - center);
        if (d < best.dist) best = { idx, dist: d };
      });
  
      children.forEach((c) => c.classList.remove("active"));
      children[best.idx]?.classList.add("active");
    };
  
    // Precise scrollAmount: Average child width + gap (handles uneven cards)
    const getScrollAmount = () => {
      if (children.length === 0) return el.clientWidth;
      const totalWidth = children.reduce((sum, child) => sum + child.offsetWidth, 0);
      const avgWidth = totalWidth / children.length;
      const style = getComputedStyle(el);
      const gap = parseFloat(style.gap) || 0;
      return avgWidth + gap;
    };
  
    let scrollAmount = getScrollAmount();
  
    // Simple math disable with generous tolerance for offsets
    const updateButtons = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const tolerance = Math.min(150, el.clientWidth * 0.15); // Bumped to eat 50px + gaps
      const currentLeft = el.scrollLeft;
  
      
  
      const prevDisabled = currentLeft <= tolerance;
      const nextDisabled = currentLeft >= (maxScroll - tolerance);
  
      if (prevBtnRef.current) {
        prevBtnRef.current.disabled = prevDisabled;
        prevBtnRef.current.setAttribute('aria-disabled', prevDisabled ? 'true' : 'false');
        
        if (prevDisabled && document.activeElement === prevBtnRef.current) {
          (prevBtnRef.current as HTMLElement).blur();
        }
      }
  
      if (nextBtnRef.current) {
        nextBtnRef.current.disabled = nextDisabled;
        nextBtnRef.current.setAttribute('aria-disabled', nextDisabled ? 'true' : 'false');
        
        if (nextDisabled && document.activeElement === nextBtnRef.current) {
          (nextBtnRef.current as HTMLElement).blur();
        }
      }
    };
  
    const handlePrev = () => {
      if (prevBtnRef.current?.disabled) return;
      el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      // Settle check
      setTimeout(updateButtons, 500);
    };
  
    const handleNext = () => {
      if (nextBtnRef.current?.disabled) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft + scrollAmount > maxScroll) {
        el.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
      setTimeout(updateButtons, 500);
    };
  
    const onScroll = () => {
      updateActive();
      updateButtons();
    };
  
    const onResize = () => {
      clearTimeout((window as any).__resizeTimeout);
      (window as any).__resizeTimeout = setTimeout(() => {
        scrollAmount = getScrollAmount();
        updateActive();
        updateButtons();
      }, 150);
    };
  
    // Ruthless init reset: Force 0 after micro-delay (beats CSS reflow)
    setTimeout(() => {
      el.scrollTo({ left: 0, behavior: 'instant' });
      
      updateActive();
      updateButtons();
    }, 50); // 50ms for DOM settle
  
    if (prevBtnRef.current) {
      prevBtnRef.current.addEventListener("click", handlePrev);
    }
    if (nextBtnRef.current) {
      nextBtnRef.current.addEventListener("click", handleNext);
    }
  
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
  
    updateButtons(); // Immediate call
  
    return () => {
      if (prevBtnRef.current) {
        prevBtnRef.current.removeEventListener("click", handlePrev);
      }
      if (nextBtnRef.current) {
        nextBtnRef.current.removeEventListener("click", handleNext);
      }
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearTimeout((window as any).__resizeTimeout);
    };
  }, []);

  return (
    <div
      id="projects"
      className="dark:bg-Dark-grayish-blue min-w-screen desktop:py-[3vw] py-[25vw] min-h-screen !flex !flex-col !items-center !justify-center transition-colors duration-300 ease-in"
    >
      <p className="msg-supports">
        Sorry, your browser doesn&apos;t support <code>::scroll-*</code>
      </p>
      <section className="carousel">
        {" "}
        {/* Outer: relative, no overflow to contain buttons */}
        {/* Navigation buttons as children of outer (absolute to it) */}
        <button
          ref={prevBtnRef}
          className="scroll-button prev"
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          ref={nextBtnRef}
          className="scroll-button next"
          aria-label="Next slide"
        >
          ❯
        </button>
        {/* Inner wrapper for scrollable cards */}
        <div ref={carouselRef} className="carousel-items">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              {...p}
              className={`desktop:p-[0.2rem] p-[0.5vw] ${
                i === 0
                  ? "scroll-start dark:bg-gradient-to-r from-cyan-400 to-Orange"
                  : ""
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
