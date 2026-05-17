"use client";

import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { cn } from "@/lib/utils";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-50">
      <div className="border-opacity-40 bg-opacity-80 fixed top-0 left-1/2 h-18 w-full -translate-x-1/2 rounded-none border border-white bg-white shadow-lg shadow-black/3 backdrop-blur-sm sm:top-6 sm:h-13 sm:w-xl sm:rounded-full dark:border-black/40 dark:bg-gray-950/75"></div>
      <nav className="fixed top-[0.15rem] left-1/2 flex h-12 -translate-x-1/2 py-2 sm:top-6 sm:h-[initial] sm:py-0">
        <ul className="flex w-88 flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <li
              key={link.hash}
              className="flex h-3/4 items-center justify-center"
            >
              <a
                href={link.hash}
                className={cn(
                  "hover:text-primary dark:hover:text-secondary-dark flex w-full items-center justify-center px-3 py-3 font-semibold transition dark:text-gray-500",
                  {
                    "text-primary dark:text-secondary-dark underline decoration-2 underline-offset-8":
                      activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
