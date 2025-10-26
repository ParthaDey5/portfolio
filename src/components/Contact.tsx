import React from "react";
import IconContact from "../assets/images/contact-icon.svg?react";
import Github from "..//assets/images/github.svg?react";
import Frontedmentor from "..//assets/images/frontendmentor.svg?react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen transition-all duration-700 ease-linear desktop:py-[10vw] py-[20vw] dark:bg-Dark-grayish-blue dark:text-light text-center"
    >
      <h2 className="bg-gradient-to-r from-cyan-500 to-Orange bg-clip-text text-transparent bigTxt desktop:tracking-[0.3vw] brightness-115">
        GET IN TOUCH
      </h2>
      <h3 className="extraBigTxt desktop:tracking-[0.5vw] tracking-[0.5vw] bg-gradient-to-r from-cyan-500 via-violet-300 to-orange-500 bg-clip-text text-transparent font-bold desktop:mb-[4vw] mb-[6vw] inline-block">
        CONTACT
      </h3>
      <section className="flex flex-col items-start desktop:gap-[0.4vw] gap-[0.8vw] desktop:px-[5vw] px-[6vw]">
        <p className="dark:text-gray-300 midnightBlue bigTxt desktop:tracking-[0.04vw] tracking-[0.04vw] font-bold">
          Get in Touch!
        </p>
        <p className="text-left dark:text-White midnightBlue mediumbigTxt font-medium desktop:tracking-[0.05vw] tracking-[0.1vw]">
          Feel free to get in touch with me. Let's build something together!
        </p>
        <a
          href="mailto:p.com"
          className="group kumbh desktop:mt-[2vw] mt-[4vw] cursor-pointer2 w-fit flex items-center desktop:gap-[0.5vw] gap-[1.5vw]
             text-primary font-semibold
             transition-transform duration-200 ease-out
             hover:scale-105"
        >
          <IconContact
            className="desktop:w-[1.4vw] w-[5vw] aspect-square dark:fill-cyan-300 fill-accent
    transition-transform duration-300 ease-linear group-hover:fill-Orange dark:group-hover:fill-Orange"
            style={{ transform: "scale(var(--scale))" }}
          />
          <p className="tracking-wider dark:text-White mediumbigTxt">
            MAIL
            </p>
        </a>
        <section className="desktop:mt-[1vw] mt-[4vw] flex desktop:gap-[1.6vw] gap-[4vw]">
          <a
            className="cursor-pointer2 desktop:mt-[1vw]"
            href="https://github.com/ParthaDey5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="desktop:w-[2.2vw] w-[5vw] aspect-square dark:fill-White fill-accent dark:hover:fill-Orange hover:fill-Orange hover:scale-110 duration-300" />
          </a>
          <a
            className="cursor-pointer2 desktop:mt-[1vw]"
            href="https://www.frontendmentor.io/profile/ParthaDey5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Frontedmentor className="desktop:w-[2.2vw] w-[5vw] aspect-square dark:fill-White fill-accent dark:hover:fill-Orange hover:fill-Orange hover:scale-110 duration-300" />
          </a>
        </section>
      </section>
    </section>
  );
};

export default Contact;
