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
    <section className="!max-w-screen overflow-x-hidden">
      <div
        className={`desktop:hidden z-[99999] fixed inset-y-0 right-0 w-[85vw] px-[7vw] dark:bg-Black75/80 bg-Light-grayish-blue ${
          navMenu ? "translate-x-0" : "translate-x-[85vw]"
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
        className="max-w-screen border-b-[0.2vw] dark:border-b-gray-400 border-b-gray-200 desktop:px-[2vw] desktop:py-[1.3vw] py-[3.5vw] fixed top-0 w-full bg-Light-grayish-blue dark:bg-blue-600 backdrop-blur z-50"
      >
        <ul className="desktop:gap-[3vw] justify-end desktop:visible desktop:flex hidden">
          {navItems.map(({ id, label, Icon }) => (
            <li
              key={id}
              onClick={() => handleScroll(id)}
              className={`group font-semibold flex items-center justify-center desktop:gap-[0.3vw] !cursor-pointer2 transition hover:text-Grayish-blue hover:dark:text-Grayish-blue ${
                active === id
                  ? "active text-Black75 dark:text-Pale-orange"
                  : "text-Black75 dark:text-White"
              }`}
            >
              <Icon className="desktop:w-[1.4vw] aspect-square fill-Black75 dark:fill-White text-White dark:text-Black75 group-hover:fill-Grayish-blue group-hover:dark:fill-Grayish-blue transition" />
              {label}
            </li>
          ))}
        </ul>
        <div className="max-w-screen flex justify-end px-[6vw] desktop:hidden">
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
