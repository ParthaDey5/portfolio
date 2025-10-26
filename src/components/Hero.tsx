import React from "react";
import Typewriter from "typewriter-effect";
import {
  useSpring,
  animated,
  useTransition,
  SpringValue,
} from "@react-spring/web";

const HeroSection: React.FC = () => {
  // Define the fade-in animation using react-spring
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  // Define a scale animation for the call-to-action button
  const scaleButton = useSpring({
    from: { transform: "scale(0.9)" },
    to: { transform: "scale(1)" },
    config: { duration: 500, delay: 1500 },
  });

  // Define a transition for the pulsating circle
  const pulsate = useTransition(true, {
    from: { opacity: 0, transform: "scale(0.5)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.5)" },
    config: { duration: 1000, loop: { reverse: true } },
  });

  return (
    <div
      id="home"
      className="relative text-white min-h-screen desktop:pt-0 pt-[15rem] flex desktop:items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute dark:block hidden inset-0 w-full h-full object-cover"
      >
        <source src={`video/NeonAbstracts4.mp4`} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className="opacity-25 blur-[0.1vw] dark:hidden block absolute inset-0 w-full h-full object-cover"
      >
        <source src={`video/abstract.mp4`} type="video/mp4" />
      </video>

      <div className="relative z-10 text-center">
        {/* Headline with fade-in */}
        <animated.div style={fadeIn} className="mb-4">
          <h1 className="bigTxt desktop:text-5xl desktop:py-[0.5vw] font-bold text-accent dark:text-Orange
          ">
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

        {/* Paragraph with fade-in */}
        <animated.p
          style={fadeIn}
          className="mediumSmallTxt desktop:tracking-[0.02vw] tracking-[0.04vw] desktop:mb-[2.5vw] mb-[2rem] text-Dark-grayish-blue dark:text-white font-semibold px-[7vw]"
        >
          Crafting <span className="text-orange-600 text-shadow-2xs">innovative</span>,{" "}
          <span className="text-orange-600 text-shadow-2xs">responsive</span>, and{" "}
          <span className="text-cyan-500">user-centric</span> web experiences.
        </animated.p>

        {/* Call-to-action button with scale animation */}
        <animated.a
          href="#projects"
          style={scaleButton}
          className="relative mediumTxt desktop:tracking-[0.08vw] bg-gradient-to-r from-fuchsia-400 to-blue-500 text-White font-bold desktop:py-[1.2vw] py-[3vw] desktop:px-[1.8vw] px-[5vw] rounded-full transition duration-300 shadow-lg hover:shadow-xl cursor-pointer2"
        >
          <div className="backdrop-saturate-125 absolute inset-0 rounded-full"></div>
          Explore My Projects
        </animated.a>
      </div>

      {/* Pulsating circle */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
        {pulsate((styles, item) =>
          item ? (
            <animated.div
              style={{
                ...(styles as {
                  opacity: SpringValue<number>;
                  transform: SpringValue<string>;
                }),
                width: "50px",
                height: "50px",
                backgroundColor: "#63B3ED",
                borderRadius: "50%",
              }}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default HeroSection;
