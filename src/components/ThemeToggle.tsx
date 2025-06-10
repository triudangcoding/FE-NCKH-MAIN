"use client"

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 dark:from-emerald-500 dark:to-cyan-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-teal-400 dark:from-emerald-400 dark:to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Icons */}
      <div className="relative z-10">
        <SunIcon
          className={`h-6 w-6 text-white transition-all duration-500 ${
            theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        />
        <MoonIcon
          className={`absolute inset-0 h-6 w-6 text-white transition-all duration-500 ${
            theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          }`}
        />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
    </button>
  )
}
