import { ArrowRightIcon, PlayIcon } from "@heroicons/react/24/outline"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-teal-500/10 to-cyan-400/20 dark:from-emerald-600/30 dark:via-teal-700/20 dark:to-cyan-600/30"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full opacity-20 blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-cyan-400 to-emerald-500 rounded-full opacity-15 blur-2xl animate-pulse-slow"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-32 right-1/4 w-16 h-16 border-2 border-emerald-400/30 dark:border-emerald-500/40 rounded-2xl rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full animate-bounce-slow opacity-60"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-700 shadow-lg backdrop-blur-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              AI-Powered Emergency Assistant
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-balance">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Cứu hộ
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">thông minh</span>
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 dark:from-teal-400 dark:via-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
                cứu sống
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl text-pretty">
              Chatbot AI hỗ trợ sơ cứu khẩn cấp, dự báo thiên tai và nhận diện nạn nhân qua drone.
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                {" "}
                Mang hy vọng đến mọi nơi! 🌱
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  <span>🚀</span>
                  Bắt đầu ngay
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white px-8 py-4 rounded-2xl text-lg font-semibold backdrop-blur-sm border border-emerald-200 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-300 shadow-lg">
                <PlayIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Xem Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Hỗ trợ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">99%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Chính xác</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">12K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Người dùng</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-[3rem] opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500 scale-110"></div>

              {/* Phone Container */}
              <div className="relative transform rotate-6 hover:rotate-3 transition-transform duration-700 hover:scale-105">
                <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-[2.5rem] overflow-hidden">
                    {/* Phone Screen */}
                    <div className="relative h-[650px] p-6">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center mb-6 text-xs text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-emerald-500 rounded-sm"></div>
                          <div className="w-4 h-2 bg-emerald-500 rounded-sm"></div>
                          <div className="w-4 h-2 bg-emerald-500 rounded-sm"></div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                          <span className="text-2xl">🚑</span>
                        </div>
                        <h3 className="font-bold text-emerald-600 dark:text-emerald-400 text-lg">RescueChat AI</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Emergency Assistant • Online</p>
                      </div>

                      {/* Chat Messages */}
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-end">
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-2xl rounded-br-md max-w-[80%] shadow-lg">
                            <p className="text-sm">🆘 Có người bị ngã xe máy, tôi cần làm gì?</p>
                          </div>
                        </div>

                        <div className="flex justify-start">
                          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-2xl rounded-bl-md max-w-[80%] shadow-lg">
                            <p className="text-sm text-gray-800 dark:text-gray-200">
                              🤖 Tôi sẽ hướng dẫn bạn từng bước:
                            </p>
                            <div className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <p>✅ 1. Kiểm tra ý thức nạn nhân</p>
                              <p>📞 2. Gọi cấp cứu 115</p>
                              <p>🩹 3. Sơ cứu cơ bản</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* AI Analysis Panel */}
                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-2xl p-4 border border-emerald-200 dark:border-emerald-700">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                            🚁 AI Drone Analysis
                          </span>
                        </div>
                        <div className="bg-gray-900 rounded-lg h-24 flex items-center justify-center mb-2">
                          <span className="text-emerald-400 text-xs">📹 Live Feed Processing...</span>
                        </div>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400">
                          ✨ Đã phát hiện 1 nạn nhân • Vị trí: 21.0285°N, 105.8542°E
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce-slow">
                <span className="text-white text-xl">🌱</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce-slow delay-500">
                <span className="text-white text-xl">💚</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
