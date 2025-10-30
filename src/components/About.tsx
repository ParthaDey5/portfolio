import { useSpring, animated, SpringValue } from "@react-spring/web";
import React from "react";

const About: React.FC = () => {
  // Define the fade-in animation using react-spring
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return (
    <div
      id="about"
      className="min-h-screen w-full kumbh dark:bg-Dark-grayish-blue bg-Light-grayish-blue text-Dark-grayish-blue dark:text-white desktop:py-[7vw] py-[15vw] transition-colors duration-300 ease-in"
    >
      <div className="w-full mx-auto desktop:px-[4vw] text-center">
        <animated.div style={fadeIn} className="mb-[4vw]">
          <h2 className="montserrat extraBigTxt bg-gradient-to-r from-cyan-500 via-violet-300 to-orange-500 bg-clip-text text-transparent font-extrabold">
            About Me
          </h2>

          <p className="mt-4 text-lg montserrat font-medium">
            Get to know the person behind the code.
          </p>
        </animated.div>

        <div className="flex desktop:flex-row flex-col items-center desktop:justify-between justify-center">
          <div className="md:w-1/2 mb-[7vw] desktop::mb-0">
            <animated.img
              src="/PD2.jpg"
              alt="Profile Picture"
              className="shadow-xl rounded-full desktop:w-[20vw] w-[60vw] aspect-square object-cover mx-auto"
              style={fadeIn as { [key: string]: SpringValue<string | number> }}
            />
          </div>
          <div className="charcoalGray dark:text-White desktop:w-1/2 lato italic desktop:tracking-[0.06vw] tracking-[0.1vw] text-shadow-2xs desktop:px-0 px-[10vw] aboutTxt desktop:leading-[2.2vw]">
            <animated.p style={fadeIn} className="desktop:mb-[1vw] mb-[3vw]">
              Hello! I'm Partha, a dynamic frontend developer with a fiery
              passion for crafting stunning and functional web experiences. With
              a strong foundation in React, Tailwind CSS, and UI/UX design, I am
              driven to create intuitive and responsive websites that not only
              captivate users but also push the boundaries of what's possible.
            </animated.p>
            <animated.p style={fadeIn} className="desktop:mb-[1vw] mb-[3vw]">
              My journey in web development ignited when I discovered the
              transformative power of code to turn visions into reality. Since
              then, I've been on a relentless quest to stay ahead of the curve,
              embracing new technologies and challenges with unmatched
              enthusiasm. I thrive on collaboration and am always eager to join
              forces with fellow innovators to achieve something extraordinary.
            </animated.p>
            <animated.p style={fadeIn}>
              Beyond the code, you'll find me exploring cutting-edge
              technologies, delving into the latest design trends, or savoring a
              robust cup of coffee. I believe that a life in balance is the key
              to unleashing creativity and driving innovation. Let's spark
              something incredible together!
            </animated.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
