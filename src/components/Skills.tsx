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
    <section id="skills" className="min-h-screen dark:text-White dark:bg-Dark-grayish-blue desktop:py-[10vw] py-[20vw] bg-Light-grayish-blue text-primary">
      <div className="max-w-4xl mx-auto desktop:px-6 px-[6vw]">
        <h3 className="extraBigTxt font-bold desktop:mb-[2vw] mb-[5vw] border-b-4 border-accent inline-block">
          Skills
        </h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((s, i) => (
            <span
              key={i}
              className="desktop:px-[1.5vw] px-[2vw] desktop:py-[1vw] py-[1.3vw] tracking-wider bg-primary text-light desktop:rounded-[0.5vw] rounded-[1vw] cursor-pointer2 shadow hover:bg-accent hover:text-primary transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
