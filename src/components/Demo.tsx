"use client"

import type React from "react"
import { useState } from "react"
import { CloudArrowUpIcon, PlayIcon, SparklesIcon } from "@heroicons/react/24/outline"

const Demo = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleUpload = () => {
    if (selectedFile) {
      alert(`Đang phân tích video: ${selectedFile.name}`)
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-teal-50/30 dark:from-gray-900 dark:via-emerald-950/30 dark:to-teal-950/30"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-teal-400/20 to-cyan-500/20 rounded-full blur-3xl animate-float delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-700 mb-6">
            <SparklesIcon className="w-4 h-4" />
            Live Demo
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Trải nghiệm trực tiếp
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Khám phá các tính năng của RescueChat và cảm nhận sức mạnh của AI trong cứu hộ
          </p>
        </div>

        {/* Video Upload Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-emerald-100 dark:border-emerald-800">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
              <span className="text-2xl">🚁</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Thử nghiệm AI nhận diện nạn nhân
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tải lên video drone của bạn để AI phân tích và nhận diện người gặp nạn trong tình huống khẩn cấp
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-2 border-dashed border-emerald-200 dark:border-emerald-700 rounded-2xl p-8 text-center bg-emerald-50/50 dark:bg-emerald-900/20">
                <input type="file" id="video-upload" accept="video/*" onChange={handleFileChange} className="hidden" />
                <label
                  htmlFor="video-upload"
                  className="cursor-pointer flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/30 dark:to-teal-500/30 rounded-full flex items-center justify-center">
                    <CloudArrowUpIcon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium text-lg mb-1">
                      Chọn video để tải lên
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">MP4, MOV hoặc AVI (tối đa 100MB)</p>
                  </div>
                </label>

                {selectedFile && (
                  <div className="mt-6 p-4 bg-white dark:bg-gray-700 rounded-xl border border-emerald-100 dark:border-emerald-800">
                    <p className="font-medium text-gray-900 dark:text-white mb-1">{selectedFile.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={handleUpload}
                disabled={!selectedFile}
                className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white py-4 rounded-xl font-medium disabled:opacity-50 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <SparklesIcon className="w-5 h-5" />
                Phân tích video
              </button>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-emerald-800/30">
              {previewUrl ? (
                <video src={previewUrl} controls className="w-full h-full object-contain" />
              ) : (
                <div className="h-full flex items-center justify-center text-white p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <PlayIcon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <p className="text-lg font-medium text-emerald-400 mb-2">Video preview</p>
                    <p className="text-gray-400 max-w-xs mx-auto">
                      Tải lên video drone để xem AI phân tích và nhận diện nạn nhân trong thời gian thực
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo
