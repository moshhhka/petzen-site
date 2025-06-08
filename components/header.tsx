"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Call once on mount to set initial state
    handleScroll()

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-yellow-500/90 backdrop-blur-md border-b border-yellow-600/20"
          : "bg-white/80 backdrop-blur-md border-b border-gray-200/20"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-black">Pet</span>
            <span className={scrolled ? "text-white" : "text-yellow-500"}>Zen</span>
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#home" className={`text-sm hover:opacity-80 ${scrolled ? "text-white" : "text-gray-700"}`}>
            Главная
          </Link>
          <Link href="#about" className={`text-sm hover:opacity-80 ${scrolled ? "text-white" : "text-gray-700"}`}>
            О нас
          </Link>
          <Link href="#services" className={`text-sm hover:opacity-80 ${scrolled ? "text-white" : "text-gray-700"}`}>
            Услуги
          </Link>
          <Link href="#app" className={`text-sm hover:opacity-80 ${scrolled ? "text-white" : "text-gray-700"}`}>
            Наше приложение
          </Link>
          <Link
            href="#testimonials"
            className={`text-sm hover:opacity-80 ${scrolled ? "text-white" : "text-gray-700"}`}
          >
            Блог
          </Link>
        </nav>
        <Link
          href="#"
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            scrolled ? "bg-white text-yellow-500 hover:bg-gray-100" : "bg-yellow-500 text-white hover:bg-yellow-600"
          }`}
        >
          Войти
        </Link>
      </div>
    </header>
  )
}
