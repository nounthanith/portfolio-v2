import React, { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };
    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);
  return (
    <div>
        {/* <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-800/40 backdrop-blur-md">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button> */}
    </div>
  )
}

export default ThemeToggle