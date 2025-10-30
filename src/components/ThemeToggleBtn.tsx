type ThemeToggleBtnProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ThemeToggleBtn({
  darkMode,
  setDarkMode,
}: ThemeToggleBtnProps) {
  return (
    <section className="desktop:rounded-[1.5vw] rounded-[5vw] bg-gradient-to-r from-cyan-300 to-Orange desktop:p-[0.16vw] p-[0.7vw]">
      <div
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="cursor-pointer2 kumbh ultrasmallestTxt desktop:w-[7vw] w-[22vw] desktop:h-[2.1vw] h-[7vw] bg-gray-300 desktop:rounded-[1.5vw] rounded-[5vw] flex"
      >
        <section onClick={() => setDarkMode(!darkMode)} className="relative">
          <div
            className={`transition-all duration-400 ease-in-out z-0 absolute top-1/2 -translate-y-1/2 ${
              darkMode
                ? "desktop:translate-x-[3.6vw] translate-x-[11vw]"
                : "desktop:translate-x-[0.1vw]"
            } desktop:w-[3.4vw] w-[11vw] desktop:h-[1.9vw] h-[6.9vw] bg-White brightness-150 flex items-center justify-center leading-0 desktop:rounded-[1.5vw] rounded-[5vw] cursor-pointer2`}
          ></div>
        </section>

        <span
          className={`pointer-events-none desktop:w-[3.5vw] w-[11vw] h-full z-10 desktop:rounded-[2vw] cursor-pointer flex justify-center items-center font-semibold leading-0 desktop:tracking-[0.12vw] tracking-[0.3vw]`}
        >
          <p className="brightness-200 text-Black75 dark:text-Black75">Light</p>
        </span>

        <span className="!transition-none pointer-events-none desktop:w-[3.5vw] w-[11vw] h-full z-10 desktop:rounded-[2vw] cursor-pointer flex justify-center items-center  leading-0 font-semibold desktop:tracking-[0.12vw] tracking-[0.3vw]">
          <p className="brightness-200 text-Black75 dark:text-Black75">Dark</p>
        </span>
      </div>
    </section>
  );
}
