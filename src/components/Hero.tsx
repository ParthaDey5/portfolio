import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { useSpring, animated, useTransition } from "@react-spring/web";
import NeonAbstracts from "/video/NeonAbstracts4.mp4";
import Abstract from "/video/Abstract.mp4";

// Define props interface
interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  // Animations (unchanged)
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  const scaleButton = useSpring({
    from: { transform: "scale(0.9)" },
    to: { transform: "scale(1)" },
    config: { duration: 500, delay: 1500 },
  });

  const pulsate = useTransition(true, {
    from: { opacity: 0, transform: "scale(0.5)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.5)" },
    config: { duration: 1000, loop: { reverse: true } },
  });

  // Refs for both videos (preload both)
  const darkVideoRef = useRef<HTMLVideoElement>(null);
  const lightVideoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Preload both on mount
  useEffect(() => {
    const preloadVideo = (ref: React.RefObject<HTMLVideoElement | null>, src: string) => {
      const video = ref.current;
      if (video) {
        video.src = src;
        video.load();
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = "auto"; // Eager buffer for smooth swap
      }
    };

    preloadVideo(darkVideoRef, NeonAbstracts);
    preloadVideo(lightVideoRef, Abstract);

    // Play initial based on darkMode
    if (darkMode) {
      darkVideoRef.current?.play();
    } else {
      lightVideoRef.current?.play();
    }
  }, []); // Run once

  // Swap videos on darkMode change (no reload—pause old, play new)
  useEffect(() => {
    const darkVideo = darkVideoRef.current;
    const lightVideo = lightVideoRef.current;

    if (darkMode) {
      lightVideo?.pause();
      lightVideo && (lightVideo.currentTime = 0); // Reset for sync
      darkVideo?.play();
    } else {
      darkVideo?.pause();
      darkVideo && (darkVideo.currentTime = 0);
      lightVideo?.play();
    }
  }, [darkMode]); // Dep: Only darkMode

  // Canvas render with crossfade (blend during swap)
  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
  
    const ctx = canvas.getContext("2d")!;
    
    // Dynamic sizing: Match viewport + DPR for crispness (no shrink)
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1; // Hi-DPI (re-calc on resize)
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      // Scale CSS to match (prevents blur)
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    setCanvasSize(); // Initial set
  
    // Set opacity directly (0.3 for light, 1 for dark)
    canvas.style.opacity = darkMode ? "1" : "0.3";
  
    const render = () => {
      // Clear and draw active video
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      const activeVideo = darkMode ? darkVideoRef.current : lightVideoRef.current;
      if (activeVideo && !activeVideo.paused) {
        ctx.drawImage(activeVideo, 0, 0, canvas.width, canvas.height);
      } else {
        // Placeholder gradient if no video ready
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, darkMode ? '#1a1a2e' : '#f0f8ff');
        gradient.addColorStop(1, darkMode ? '#0f0f23' : '#e0e7ff');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
  
      requestAnimationFrame(render);
    };
    render(); // Start loop after size/opacity set
  
    // Resize listener (re-calc DPR inside)
    const resize = () => {
      setCanvasSize();
      // Re-draw to new size
      render();
    };
    window.addEventListener("resize", resize);
  
    return () => {
      window.removeEventListener("resize", resize);
      darkVideoRef.current?.pause();
      lightVideoRef.current?.pause();
    };
  }, [darkMode]); // Dep: darkMode for redraw
  
  // Smooth scroll handler (unchanged)
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="home"
      className="relative text-white min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ease-in desktop:py-0 py-[40vw]"
    >
      {/* Hidden videos: Preloaded, not rendered */}
      <video
        ref={darkVideoRef}
        muted
        loop
        playsInline
        preload="auto"
        style={{ display: "none" }}
        aria-hidden="true"
      />
      <video
        ref={lightVideoRef}
        muted
        loop
        playsInline
        preload="auto"
        style={{ display: "none" }}
        aria-hidden="true"
      />
        
      {/* Visible canvas background */}
      <canvas
        ref={canvasRef}
    
        className={`absolute inset-0 w-full h-full object-cover`}
      />

      <div className="relative z-10 text-center">
        {/* Headline (unchanged) */}
        <animated.div style={fadeIn}>
          <h1 className="bigTxt desktop:py-[0.5vw] font-bold text-cyan-500 dark:text-fuchsia-400 leading-none desktop:mb-0 mb-[4vw]">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Web Designer",
                  "UI/UX Enthusiast",
                  "React Specialist",
                  "Tailwind CSS Master",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h1>
        </animated.div>

        {/* Paragraph (unchanged) */}
        <animated.h2
          style={fadeIn}
          className="mediumSmallTxt desktop:tracking-[0.01rem] tracking-[0.04rem] desktop:mb-[3rem] mb-[12vw] text-Dark-grayish-blue dark:text-white font-semibold px-[7vw] leading-[6vw]"
        >
          Crafting{" "}
          <span className="text-orange-600 text-shadow-2xs">innovative</span>,{" "}
          <span className="text-orange-600 text-shadow-2xs">responsive</span>,
          and <span className="text-cyan-500">user-centric</span> web
          experiences.
        </animated.h2>

        {/* CTA (unchanged) */}
        <animated.a
          onClick={() => handleScroll("projects")}
          style={scaleButton}
          className="kumbh buttonTxt relative desktop:tracking-[0.1rem] tracking-[0.1rem] bg-gradient-to-r from-fuchsia-600 to-blue-400 text-White font-bold desktop:py-[1.5vw] py-[6vw] desktop:px-[1.5rem] px-[6vw] rounded-full transition duration-300 shadow-lg hover:shadow-xl cursor-pointer2"
        >
          <div className="backdrop-saturate-125 absolute inset-0 rounded-full pointer-events-none"></div>
          Explore My Projects
        </animated.a>
      </div>

      {/* Pulsating circle (unchanged) */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
        {pulsate(
          (styles, item) =>
            item && (
              <animated.div
                className="desktop:w-[3.5vw] w-[8vw] aspect-square"
                style={{
                  ...styles,
                  backgroundColor: "#63B3ED",
                  borderRadius: "50%",
                }}
              />
            )
        )}
      </div>
    </div>
  );
};

export default HeroSection;