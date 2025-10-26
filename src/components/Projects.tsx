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
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <ReactIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <TailwindIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <JavascriptIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <FramerIcon className="desktop:w-[0.8vw] aspect-square" />
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
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <ReactIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <TailwindIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <JavascriptIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <FramerIcon className="desktop:w-[0.8vw] aspect-square" />
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
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <ReactIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <TailwindIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <JavascriptIcon className="desktop:w-[0.8vw] aspect-square" />
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
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <ReactIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <TailwindIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <JavascriptIcon className="desktop:w-[0.8vw] aspect-square" />
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
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <ReactIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <TailwindIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <JavascriptIcon className="desktop:w-[0.8vw] aspect-square" />
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
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <ReactIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <TailwindIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <JavascriptIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <FramerIcon className="desktop:w-[0.8vw] aspect-square" />
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
          
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <TailwindIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          <div className="bg-White rounded-full dark:outline-0 outline outline-gray-300 desktop:p-[0.45vw] shadow-[0_0.1vw_0.3vw_rgba(0,0,0,0.2)]">
            <JavascriptIcon className="desktop:w-[0.8vw] aspect-square" />
          </div>
          
        </>
      ),
    },
  ];

  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = Array.from(el.children);

    // initialize first as active
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

    const onScroll = () => updateActive();
    const onResize = () => updateActive();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    updateActive();

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      id="projects"
      className="dark:bg-Dark-grayish-blue px-0 min-w-screen min-h-screen !flex !flex-col !items-center !justify-center"
    >
      <p className="msg-supports">
        Sorry, your browser doesn&apos;t support <code>::scroll-*</code>
      </p>
      <section ref={ref} className="carousel">
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            {...p}
            className={`desktop:p-[0.2rem] dark:bg-gradient-to-r from-cyan-400 to-Orange  {i === 0 ? "scroll-start" : ""}`}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
