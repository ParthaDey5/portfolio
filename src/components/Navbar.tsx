import { useEffect, useState } from "react";
import IconHome from "../assets/images/home-icon.svg?react";
import IconAbout from "../assets/images/about-icon.svg?react";
import IconProjects from "../assets/images/projects-icon.svg?react";
import IconSkills from "../assets/images/skills-icon.svg?react";
import IconContact from "../assets/images/contact-icon.svg?react";
import IconMenu from "../assets/images/icon-menu.svg?react";
import IconClose from "../assets/images/icon-close.svg?react";

// Type for SVG React components imported via SVGR
type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface NavItem {
  id: string;
  label: string;
  Icon: SvgComponent;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", Icon: IconHome },
  { id: "about", label: "About", Icon: IconAbout },
  { id: "projects", label: "Projects", Icon: IconProjects },
  { id: "skills", label: "Skills", Icon: IconSkills },
  { id: "contact", label: "Contact", Icon: IconContact },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("home");
  const [navMenu, setNavMenu] = useState<boolean>(false);

  // IntersectionObserver to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="transition-colors duration-300 ease-in">
      <div
        className={`desktop:hidden z-[99999] fixed inset-y-0 right-0 w-[85vw] px-[7vw] dark:bg-Black75/80 bg-Light-grayish-blue ${
          navMenu ? "translate-x-0 shadow-[-0.5vw_0_4vw_rgba(0,0,0,0.07)]" : "translate-x-[85vw]"
        } transition duration-300 ease-out`}
      >
        <section className="flex justify-between items-start pt-[4.5vw]">
          <ul className="w-fit pt-[4rem] gap-[6vw] flex flex-col items-start justify-end">
            {navItems.map(({ id, label, Icon }) => (
              <li
                key={id}
                onClick={() => {
                  handleScroll(id), setNavMenu(false);
                }}
                className={`tracking-wider mediumbigTxt group font-semibold flex items-center justify-center gap-[1.2vw] !cursor-pointer2 transition hover:text-Grayish-blue hover:dark:text-Grayish-blue ${
                  active === id
                    ? "active text-Black75 dark:text-Pale-orange"
                    : "text-Black75 dark:text-White"
                }`}
              >
                <Icon className="w-[4.4vw] aspect-square fill-Black75 dark:fill-White text-White dark:text-Black75 group-hover:fill-Grayish-blue group-hover:dark:fill-Grayish-blue transition" />
                {label}
              </li>
            ))}
          </ul>
          <IconClose
            onClick={() => setNavMenu(!navMenu)}
            className="dark:text-Pale-orange text-Black75 w-[3.5vw] aspect-square"
          />
        </section>
      </div>
      <nav
        id="navLinks"
        className="max-w-screen w-[100vw] flex items-center justify-between border-b-[0.2vw] dark:border-b-gray-400 border-b-gray-200 desktop:px-[3vw] px-[5vw] desktop:h-[4.2vw] h-[13vw] fixed top-0 bg-Light-grayish-blue dark:bg-blue-600 backdrop-blur z-50"
      >
        <a href="/" className="cursor-pointer2 mediumTxt flex items-center montserrat font-bold dark:text-Pale-orange text-fuchsia-500 text-shadow-2xs tracking-widest"><p className="flex items-center bg-gradient-to-r from-cyan-500 via-violet-300 to-orange-500 bg-clip-text text-transparent mediumbigTxt font-extrabold desktop:mr-[0.4vw] mr-[0.8vw] tracking-widest">{'</>'}</p>DEV PARTHA</a>
        <ul className="h-full desktop:gap-[3vw] items-center justify-end desktop:visible desktop:flex hidden">
          {navItems.map(({ id, label, Icon }) => (
            <li
              key={id}
              onClick={() => handleScroll(id)}
              className={`tracking-wide mediumTxt group font-semibold flex items-center justify-center  transition hover:text-Grayish-blue hover:dark:text-Grayish-blue ${
                active === id
                  ? "active text-Black75 dark:text-Pale-orange"
                  : "text-Black75 dark:text-White"
              }`}
            >
              <span className="h-fit flex desktop:gap-[0.35vw] !cursor-pointer2">
              <Icon className="desktop:w-[1.4vw] aspect-square fill-Black75 dark:fill-White text-White dark:text-Black75 group-hover:fill-Grayish-blue group-hover:dark:fill-Grayish-blue transition" />
              {label}
              </span>
            </li>
          ))}
        </ul>
        <div className="max-w-screen flex justify-end desktop:hidden">
          <IconMenu
            onClick={() => setNavMenu(!navMenu)}
            className="cursor-pointer2 w-[4vw] aspect-square"
          />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
