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
      className="min-h-screen kumbh dark:bg-Dark-grayish-blue bg-Light-grayish-blue text-Dark-grayish-blue dark:text-white desktop:py-[7vw]"
    >
      <div className="container mx-auto px-6 text-center">
        <animated.div style={fadeIn} className="mb-12">
          <h2 className="montserrat extraBigTxt font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            About Me
          </h2>

          <p className="mt-4 text-lg montserrat font-medium">
            Get to know the person behind the code.
          </p>
        </animated.div>

        <div className="flex desktop:flex-row flex-col items-center desktop:justify-between justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <animated.img
              src="/PD2.jpg"
              alt="Profile Picture"
              className=" shadow-xl rounded-full w-64 h-64 object-cover mx-auto"
              style={fadeIn as { [key: string]: SpringValue<string | number> }}
            />
          </div>
          <div className="charcoalGray dark:text-White desktop:w-1/2 lato italic tracking-[0.07rem] text-shadow-2xs desktop:px-0 px-[10vw] aboutTxt">
            <animated.p style={fadeIn} className=" mb-6">
              Hello! I'm Partha, a dynamic frontend developer with a fiery
              passion for crafting stunning and functional web experiences. With
              a strong foundation in React, Tailwind CSS, and UI/UX design, I am
              driven to create intuitive and responsive websites that not only
              captivate users but also push the boundaries of what's possible.
            </animated.p>
            <animated.p style={fadeIn} className="mb-6">
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
