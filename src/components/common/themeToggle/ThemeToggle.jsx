// ThemeToggle.jsx
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      onClick={toggle}
      style={{
        width: 70,
        height: 42,
        borderRadius: 28,
        background: dark ? "var(--primary-color)" : "var(--gray-color)",
        position: "relative",
        cursor: "pointer",
        transition: "background 0.3s ease",
        display: "flex",
        alignItems: "center",
        padding: "0 px",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "var(--tertiary-color)",
          color: dark ? "var(--secondary-color)" : "var(--primary-color)",
          position: "absolute",
          left: dark ? "30px" : "4px",
          transition: "left 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
        }}
      >
        {dark ? <IoMoon size={24}/> : <FiSun size={24}/>}
      </div>
    </div>
  );
}
