import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline"
import React, { useState } from "react"

const CtaBand = () => {
  // State cho chatbot
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  // Hàm mở chat và gửi lời chào hỏi đầu tiên
  const handleOpenChat = async () => {
    setShowChat(true)
    if (messages.length === 0) {
      setLoading(true)
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: "Xin chào! Tôi có thể giúp gì cho bạn?" })
        })
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        
        const data = await res.json()
        console.log('API response:', data)
        
        // Kiểm tra cấu trúc response
        const botMessage = data.reply || data.message || data.response || data.text || "Xin chào! Tôi có thể giúp gì cho bạn?"
        setMessages([{ sender: "bot" as const, text: botMessage }])
      } catch (error) {
        console.error('Error calling API:', error)
        setMessages([{ sender: "bot" as const, text: "Xin chào! Tôi có thể giúp gì cho bạn?" }])
      }
      setLoading(false)
    }
  }

  // Hàm gửi tin nhắn
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    const newMessages = [...messages, { sender: "user" as const, text: input }]
    setMessages(newMessages)
    setInput("")
    setLoading(true)
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      })
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      
      const data = await res.json()
      console.log('API response:', data)
      
      // Kiểm tra cấu trúc response
      const botMessage = data.reply || data.message || data.response || data.text || "Xin lỗi, đã có lỗi xảy ra."
      setMessages([...newMessages, { sender: "bot" as const, text: botMessage }])
    } catch (error) {
      console.error('Error calling API:', error)
      setMessages([...newMessages, { sender: "bot" as const, text: "Xin lỗi, đã có lỗi xảy ra." }])
    }
    setLoading(false)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/90 via-teal-500/90 to-cyan-500/90 dark:from-emerald-600/90 dark:via-teal-600/90 dark:to-cyan-600/90"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full opacity-10 blur-3xl animate-float delay-1000"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-white/20 rounded-2xl rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white/20 rounded-full animate-bounce-slow"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm mb-6">
            <SparklesIcon className="w-4 h-4" />
            Hành động ngay hôm nay
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Cùng chúng tôi cứu thêm nhiều người hôm nay
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Tham gia cộng đồng RescueChat để góp phần tạo nên một thế giới an toàn hơn. Mỗi phút trôi qua đều quan
            trọng!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative inline-flex items-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <span>🚀</span>
                Tạo tài khoản ngay
                <ArrowRightIcon className="w-5 h-5 group- hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group inline-flex items-center gap-3 bg-transparent text-white px-8 py-4 rounded-2xl text-lg font-semibold border border-white/30 hover:bg-white/10 transition-all duration-300">
              <span>💬</span>
              Liên hệ tư vấn
            </button>
          </div>
        </div>
      </div>

      {/* Chatbot Floating Button & Popup */}
      <div className="fixed bottom-8 right-8 z-50">
        {!showChat && (
          <button
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-4 shadow-lg flex items-center gap-2 transition-all"
            onClick={handleOpenChat}
          >
            <SparklesIcon className="w-6 h-6" />
            Chatbot
          </button>
        )}
        {showChat && (
          <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-emerald-200">
            <div className="bg-emerald-600 text-white px-4 py-3 flex items-center justify-between">
              <span className="font-semibold">RescueChat Bot</span>
              <button onClick={() => setShowChat(false)} className="text-white hover:text-gray-200">✕</button>
            </div>
            <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`px-3 py-2 rounded-lg max-w-[70%] text-sm ${msg.sender === "user" ? "bg-emerald-100 text-emerald-900" : "bg-white text-gray-800 border border-emerald-100"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && <div className="text-xs text-gray-400">Đang trả lời...</div>}
            </div>
            <form onSubmit={handleSend} className="p-3 border-t bg-white flex gap-2">
              <input
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                type="text"
                placeholder="Nhập tin nhắn..."
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={loading}
                autoFocus
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold disabled:opacity-50"
                disabled={loading || !input.trim()}
              >Gửi</button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

export default CtaBand
