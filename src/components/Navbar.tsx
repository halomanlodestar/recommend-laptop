import React from "react";
import navItems from "@/data/nav-items";
import { ThemeSwitch } from "./Providers/NextThemeProvider";

const Navbar = () => {
  return (
    <header
      className={
        "w-full h-20 sticky top-0 border-b bg-background flex items-center justify-between px-10"
      }
    >
      <nav>Logo</nav>
      <nav className={"flex space-x-5 items-center"}>
        <ul className={"flex space-x-5 text-sm"}>
          {navItems.map((item, index) => (
            <li key={item.title}>
              <a
                href={item.href}
                className={
                  "text-foreground hover:text-primary transition-colors duration-200"
                }
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Navbar;
