"use client"

import type React from "react"
import { useEffect, useState } from "react"

const FontPreloader = ({ children }: { children: React.ReactNode }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    // Kiểm tra nếu fonts đã được tải
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true)
      })
    } else {
      // Fallback nếu document.fonts không được hỗ trợ
      setFontsLoaded(true)
    }

    // Fallback timer để đảm bảo UI hiển thị sau một khoảng thời gian
    const timer = setTimeout(() => {
      setFontsLoaded(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!fontsLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50 transition-colors duration-500">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-emerald-100 dark:border-emerald-900"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-emerald-500 dark:border-t-emerald-400 animate-spin"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 font-medium">Đang tải...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export default FontPreloader
