import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline"

const CtaBand = () => {
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
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
    </section>
  )
}

export default CtaBand
