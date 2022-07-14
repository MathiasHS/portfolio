import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import useDarkMode from "../../hooks/useDarkMode";

export default function DarkmodeToggle() {
  const [theme, setTheme] = useDarkMode();
  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <FaSun
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            window.location.reload(false);
          }}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            window.location.reload(false);
          }}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
}
