"use client"

import type React from "react"
import { useState } from "react"
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline"

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Xin chào! Tôi là RescueChat AI. Bạn cần hỗ trợ gì?", isBot: true },
  ])
  const [inputValue, setInputValue] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    setMessages([...messages, { text: inputValue, isBot: false }])
    setInputValue("")

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Tôi đang xử lý yêu cầu của bạn. Trong trường hợp khẩn cấp, vui lòng gọi 115.",
          isBot: true,
        },
      ])
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl mb-4 w-80 sm:w-96 overflow-hidden border border-emerald-100 dark:border-emerald-800 animate-fade-in">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium">RescueChat AI</h3>
                <div className="flex items-center gap-1 text-xs text-white/80">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.isBot
                        ? "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none border border-emerald-100 dark:border-emerald-800"
                        : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-br-none"
                    } shadow-lg`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 dark:border-gray-700 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Nhập câu hỏi của bạn..."
              className="flex-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl w-10 h-10 flex items-center justify-center hover:shadow-lg transition-all"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {/* Chat Bubble Button */}
      <button
        onClick={toggleChat}
        className="group relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all hover:scale-110"
      >
        <ChatBubbleLeftRightIcon className="w-8 h-8" />
        <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
        <span className="relative z-10">
        </span>
      </button>
    </div>
  )
}

export default ChatBubble
