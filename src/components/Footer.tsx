"use client"

import { CodeBracketIcon, EnvelopeIcon, MapPinIcon, PhoneIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const Footer = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const footerLinks = {
    features: ["Sơ cứu AI", "Cảnh báo thiên tai", "Nhận diện drone", "Hỗ trợ 24/7"],
    support: ["Trung tâm trợ giúp", "Liên hệ", "Báo lỗi", "Góp ý"],
  }

  const teamMembers = [
    {
      name: "Võ Quốc Triệu",
      role: "Lead Developer",
      avatar: "/vo_quoc_trieu.jpg",
      facebook: "#",
      github: "#",
      specialty: "Full-stack Development & AI Architect",
      experience: "1+ years",
      gradient: "from-emerald-500 to-teal-600",
      emoji: "👨‍💻",
    },
    {
      name: "Lại Hữu Triệu",
      role: "FE, BE developer",
      avatar: "/lai_huu_trieu.jpg",
      facebook: "#",
      github: "#",
      specialty: "Full-stack Development",
      experience: "1+ years",
      gradient: "from-teal-500 to-cyan-600",
      emoji: "🤖",
    },
    {
      name: "Võ Văn Thành Tài",
      role: "Frontend Developer",
      avatar: "/placeholder.svg?height=120&width=120",
      facebook: "#",
      github: "#",
      specialty: "React & UI/UX Design",
      experience: "1+ years",
      gradient: "from-cyan-500 to-emerald-600",
      emoji: "🎨",
    },
    {
      name: "Đào Hữu Quang",
      role: "Backend developer",
      avatar: "/placeholder.svg?height=120&width=120",
      facebook: "#",
      github: "#",
      specialty: "Node.js & Database",
      experience: "1+ years",
      gradient: "from-emerald-500 to-cyan-600",
      emoji: "⚙️",
    },
    {
      name: "Khánh Hiền",
      role: "Frontend Developer",
      avatar: "/khanh_hien.png",
      facebook: "#",
      github: "#",
      specialty: "Cloud & Infrastructure",
      experience: "1+ years",
      gradient: "from-teal-500 to-emerald-600",
      emoji: "☁️",
    },
  ]

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 dark:bg-emerald-900 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-200 dark:bg-teal-900 rounded-full opacity-20 animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200 dark:bg-cyan-900 rounded-full opacity-10 animate-float"></div>
      </div>

      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-emerald-100 dark:fill-emerald-900 opacity-30"
          />
        </svg>
      </div>

      <div className="py-16 pt-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-700 mb-6">
                <SparklesIcon className="w-4 h-4" />
                Đội ngũ phát triển
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Những người hùng
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">đằng sau RescueChat</span>
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
                Kết hợp đam mê công nghệ với sứ mệnh cứu người - tạo nên những giải pháp AI thay đổi thế giới 🌟
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`group relative transform transition-all duration-500 hover:scale-105 ${
                    hoveredMember !== null && hoveredMember !== index
                      ? "opacity-30 blur-sm scale-95"
                      : "opacity-100 blur-0 scale-100"
                  }`}
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Glowing Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                  ></div>

                  {/* Card */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100 dark:border-emerald-800 group-hover:border-transparent overflow-hidden">
                    {/* Animated Border */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    >
                      <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-3xl"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Avatar with Glow Effect */}
                      <div className="relative mb-4 mx-auto w-24 h-24">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-md animate-pulse-glow`}
                        ></div>
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="relative w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg group-hover:border-transparent transition-all duration-500"
                        />
                        <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse flex items-center justify-center">
                          <span className="text-xs">{member.emoji}</span>
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-emerald-600 group-hover:to-teal-600 dark:group-hover:from-emerald-400 dark:group-hover:to-teal-400 transition-all duration-500">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{member.role}</p>
                      </div>

                      {/* Stats */}
                      <div className="space-y-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          <span className="font-medium">Chuyên môn:</span> {member.specialty}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          <span className="font-medium">Kinh nghiệm:</span> {member.experience}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <a
                          href={member.facebook}
                          className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                        >
                          <EnvelopeIcon className="w-4 h-4" />
                        </a>
                        <a
                          href={member.github}
                          className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
                        >
                          <CodeBracketIcon className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Floating Particles */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle"></div>
                      <div className="absolute bottom-4 left-2 w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle delay-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 border-t border-emerald-200 dark:border-emerald-800 pt-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  RescueChat
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Ứng dụng chatbot hỗ trợ sơ cứu và cứu hộ với công nghệ AI tiên tiến, mang đến hy vọng trong những tình
                huống khẩn cấp.
              </p>
              <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-3 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer">
                  <MapPinIcon className="w-4 h-4" />
                  <span>Duy Tân University</span>
                </div>
                <div className="flex items-center gap-3 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer">
                  <PhoneIcon className="w-4 h-4" />
                  <span>+84 396 157 376</span>
                </div>
                <div className="flex items-center gap-3 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer">
                  <EnvelopeIcon className="w-4 h-4" />
                  <span>quoctrieuzxc@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-3">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-6 text-lg">Tính năng</h4>
                <ul className="space-y-3">
                  {footerLinks.features.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-6 text-lg">Hỗ trợ</h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-emerald-200 dark:border-emerald-800 mt-12 pt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 animate-fade-in">
              &copy; 2024 RescueChat. Tất cả quyền được bảo lưu. Made with 💚 for humanity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
