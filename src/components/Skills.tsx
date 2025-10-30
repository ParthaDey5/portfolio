import React from "react";

const skills: string[] = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "React",
  "API Integration",
  "Accessibility",
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="min-h-screen dark:text-White dark:bg-Dark-grayish-blue desktop:py-[10vw] py-[20vw] bg-Light-grayish-blue text-primary transition-colors duration-300 ease-in"
    >
      <div className="max-w-4xl mx-auto desktop:px-6 px-[7vw]">
        <h3 className="extraBigTxt bg-gradient-to-r from-cyan-500 via-violet-300 to-orange-500 bg-clip-text text-transparent font-bold desktop:mb-[2vw] mb-[5vw] inline-block">
          Skills
        </h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((s, i) => (
            <div
            key={i}
            className="h-full desktop:rounded-[0.5vw] rounded-[1vw]  desktop:p-[0.2vw] p-[0.5vw] bg-gradient-to-r from-cyan-400 to-Orange">
              <div
                
                className="desktop:px-[1.5vw] px-[2vw] desktop:py-[0.7vw] py-[1.3vw] tracking-wider bg-primary text-light desktop:rounded-[0.5vw] rounded-[1vw] cursor-pointer2 shadow hover:bg-accent hover:text-primary transition"
              >
                {s}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
