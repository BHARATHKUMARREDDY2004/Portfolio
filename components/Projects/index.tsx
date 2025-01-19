'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { sliderData } from '@/constants'

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sliderData.length)
  }, [])

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="slider h-screen relative">
        <div className="list relative h-full">
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${
                index === activeIndex ? 'opacity-100 z-[2]' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-30%" />
              <div className="absolute left-[5%] sm:left-[10%] top-[10%] sm:top-[20%] w-[90%] sm:w-[500px] max-w-[90%] sm:max-w-[80%] z-[2]">
                <p className="uppercase tracking-[5px] sm:tracking-[10px] text-sm sm:text-base animate-fadeIn">{slide.category}</p>
                <h2 className="text-4xl sm:text-6xl md:text-[100px] m-0 animate-fadeIn animation-delay-200">{slide.title}</h2>
                <p className="text-sm sm:text-base animate-fadeIn animation-delay-400">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4 sm:px-8 z-[2]">
          <button
            onClick={prevSlide}
            className="bg-white/30 w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-xl sm:text-2xl text-white transition-colors hover:bg-white hover:text-black flex items-center justify-center"
            aria-label="Previous slide"
          >
            <span className="transform -translate-x-px">←</span>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/30 w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-center text-xl sm:text-2xl text-white transition-colors hover:bg-white hover:text-black flex items-center justify-center"
            aria-label="Next slide"
          >
            <span className="transform translate-x-px">→</span>
          </button>
        </div>

        <div className="thumbnail absolute bottom-4 sm:bottom-[50px] z-[2] flex gap-2 sm:gap-[10px] w-full h-[100px] sm:h-[250px] px-4 sm:px-[50px] box-border overflow-auto justify-start sm:justify-center">
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className={`w-[80px] h-[100px] sm:w-[150px] sm:h-[220px] flex-shrink-0 transition-all duration-500 cursor-pointer relative ${
                index === activeIndex ? 'filter brightness-150' : 'filter brightness-50'
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-x-2 sm:inset-x-[10px] bottom-2 sm:bottom-[10px] text-xs sm:text-sm">Name Slider</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

