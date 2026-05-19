'use client'

import { motion } from 'framer-motion'

import { getLevelColor } from '@/lib/colors'

export default function CalendarDay({
  day,
  onClick,
}: any) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        y: -5,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
      }}
      onClick={onClick}
      className={`
        text-left
        rounded-3xl
        p-6
        min-h-[260px]
        bg-gradient-to-br
        ${getLevelColor(day.level)}
        shadow-2xl
        relative
        overflow-hidden
      `}
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10">
        <h3 className="text-2xl font-black leading-tight">
          {day.date}
        </h3>

        <div className="mt-6">
          <p className="text-5xl font-black">
            {day.visitors.toLocaleString()}
          </p>

          <p className="mt-2 text-lg opacity-90">
            Visitors
          </p>
        </div>

        <div className="mt-8 space-y-3">
          <div className="flex items-center gap-2">
            <span>🚢</span>

            <span>
              {day.ships.length} Ships
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">
              {day.weather.icon}
            </span>

            <span>
              {day.weather.condition}
            </span>

            <span className="opacity-70">
              {day.weather.temp}°C
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  )
}