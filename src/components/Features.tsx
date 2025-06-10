import {
  HeartIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline"

const Features = () => {
  const features = [
    {
      icon: HeartIcon,
      title: "Sơ cứu AI thông minh",
      description: "Hướng dẫn sơ cứu từng bước với AI được đào tạo bởi các chuyên gia y tế hàng đầu.",
      badge: "AI-Powered",
      gradient: "from-emerald-500 to-teal-500",
      emoji: "🚑",
      stats: "12K+ ca cứu hộ",
    },
    {
      icon: GlobeAltIcon,
      title: "Cảnh báo thiên tai",
      description: "Theo dõi và cảnh báo thiên tai real-time, giúp bạn chuẩn bị và ứng phó kịp thời.",
      badge: "Real-time",
      gradient: "from-teal-500 to-cyan-500",
      emoji: "🌍",
      stats: "24/7 monitoring",
    },
    {
      icon: VideoCameraIcon,
      title: "AI Vision Drone",
      description: "Công nghệ computer vision tiên tiến phân tích video drone để phát hiện và cứu hộ nạn nhân.",
      badge: "Computer Vision",
      gradient: "from-cyan-500 to-emerald-500",
      emoji: "🚁",
      stats: "99% accuracy",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Chat đa ngôn ngữ",
      description: "Hỗ trợ chat bằng nhiều ngôn ngữ, đảm bảo không có rào cản ngôn ngữ trong cứu hộ.",
      badge: "Multilingual",
      gradient: "from-emerald-500 to-cyan-500",
      emoji: "💬",
      stats: "50+ languages",
    },
    {
      icon: ShieldCheckIcon,
      title: "Bảo mật tuyệt đối",
      description: "Mã hóa end-to-end và tuân thủ các tiêu chuẩn bảo mật y tế quốc tế.",
      badge: "Secure",
      gradient: "from-teal-500 to-emerald-500",
      emoji: "🔒",
      stats: "ISO 27001",
    },
    {
      icon: SparklesIcon,
      title: "Học máy thích ứng",
      description: "AI liên tục học hỏi và cải thiện từ mỗi ca cứu hộ để trở nên chính xác hơn.",
      badge: "Machine Learning",
      gradient: "from-cyan-500 to-teal-500",
      emoji: "✨",
      stats: "Self-improving",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/50 to-teal-50/50 dark:from-gray-900 dark:via-emerald-950/50 dark:to-teal-950/50"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-teal-400/20 to-cyan-500/20 rounded-full blur-3xl animate-float delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-700 mb-6">
            <SparklesIcon className="w-4 h-4" />
            Tính năng đột phá
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Công nghệ cứu hộ
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">thế hệ mới</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Kết hợp AI, Machine Learning và Computer Vision để tạo ra hệ thống cứu hộ thông minh nhất thế giới 🌟
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10 transition-all duration-500 border border-emerald-100 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-600 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 text-2xl">{feature.emoji}</div>
                  </div>

                  <span className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-700">
                    {feature.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{feature.description}</p>

                {/* Stats */}
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  {feature.stats}
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300">
            <span>🚀</span>
            Khám phá tất cả tính năng
            <SparklesIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features
