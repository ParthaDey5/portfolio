import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { useSpring, animated, useTransition } from "@react-spring/web";


// Define props interface
interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  // Animations
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

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const video = videoRef.current!;
    video.play();

    const render = () => {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(render);
    };
    render();
    
    console.log(darkMode);
  }, [darkMode]);

  return (
    <div
      id="home"
      className="relative text-white min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ease-in"
    >
      {/* Hidden video source, theme-dependent */}
      <video
        ref={videoRef}
        src={darkMode? "video/NeonAbstracts4.mp4" : "video/abstract.mp4"}
        muted
        loop
        playsInline
        style={{ display: "none" }}
      />

      {/* Visible canvas background */}
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className={`${darkMode?"opacity-100 blur-0":"opacity-40 blur-[0.05vw]"} absolute inset-0 w-full h-full object-cover transition duration-800`}
      />

      <div className="relative z-10 text-center">
        {/* Headline */}
        <animated.div style={fadeIn}>
          <h1 className="bigTxt desktop:py-[0.5vw] font-bold text-accent dark:text-Orange leading-none desktop:mb-0 mb-[4vw]">
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

        {/* Paragraph */}
        <animated.p
          style={fadeIn}
          className="mediumSmallTxt desktop:tracking-[0.01rem] tracking-[0.04rem] desktop:mb-[3rem] mb-[12vw] text-Dark-grayish-blue dark:text-white font-semibold px-[7vw] leading-[6vw]"
        >
          Crafting{" "}
          <span className="text-orange-600 text-shadow-2xs">innovative</span>,{" "}
          <span className="text-orange-600 text-shadow-2xs">responsive</span>, and{" "}
          <span className="text-cyan-500">user-centric</span> web experiences.
        </animated.p>

        {/* CTA */}
        <animated.a
          href="#projects"
          style={scaleButton}
          className="kumbh buttonTxt relative desktop:tracking-[0.1rem] tracking-[0.1rem] bg-gradient-to-r from-fuchsia-600 to-blue-400 text-White font-bold desktop:py-[1.2rem] py-[6vw] desktop:px-[1.5rem] px-[6vw] rounded-full transition duration-300 shadow-lg hover:shadow-xl cursor-pointer2"
        >
          <div className="backdrop-saturate-125 absolute inset-0 rounded-full"></div>
          Explore My Projects
        </animated.a>
      </div>

      {/* Pulsating circle */}
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
