"use client"

import { useState, useEffect } from "react"
import { Bars3Icon, XMarkIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { ThemeToggle } from "./ThemeToggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: "home", label: "Trang chủ", href: "#home", emoji: "🏠" },
    { id: "features", label: "Tính năng", href: "#features", emoji: "✨" },
    { id: "demo", label: "Demo", href: "#demo", emoji: "🎮" },
    { id: "team", label: "Đội ngũ", href: "#team", emoji: "👥" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border-b border-emerald-200/50 dark:border-emerald-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection("home")} className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <SparklesIcon className="w-6 h-6 text-white relative z-10" />
                <div className="`absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`"></div>
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent ${
                    !isScrolled && "text-white dark:text-white"
                  }`}
                >
                  RescueChat
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">AI Rescue Bot</span>
              </div>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? isScrolled
                        ? "text-emerald-700 dark:text-emerald-300 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 shadow-lg"
                        : "text-white bg-white/20 backdrop-blur-sm shadow-lg"
                      : isScrolled
                        ? "text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                        : "text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base">{item.emoji}</span>
                    {item.label}
                  </span>

                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse shadow-lg"></div>
                  )}

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                <span>🚀</span>
                Book a demo
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
                  : "text-white hover:bg-white/10 backdrop-blur-sm"
              }`}
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-emerald-200/50 dark:border-emerald-800/50 p-6 mt-4">
            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 flex items-center gap-3 ${
                    activeSection === item.id
                      ? "text-emerald-700 dark:text-emerald-300 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 border-l-4 border-emerald-500 shadow-lg"
                      : "text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                  }`}
                >
                  <span className="text-lg">{item.emoji}</span>
                  {item.label}
                </button>
              ))}

              <button className="w-full mt-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-4 py-3 rounded-2xl text-sm font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                <span>🚀</span>
                Dùng thử ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
