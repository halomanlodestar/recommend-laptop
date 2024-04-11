"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
const NextThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider defaultTheme={"system"}>{children}</ThemeProvider>;
};

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className={"text-xl cursor-pointer rounded-md border p-2"}
    >
      {mounted && theme === "dark" ? <MdOutlineDarkMode /> : <CiLight />}
    </button>
  );
};

export default NextThemeProvider;
