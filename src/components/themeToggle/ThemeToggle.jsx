"use client";

import Image from "next/image";
import Styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  
  return (
    <div className={Styles.container} onClick={toggle}style={
      theme === "dark"
        ? { background: "white" }
        : { background: "#0f172a" }
    }>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={Styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
