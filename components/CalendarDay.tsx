'use client'

import { motion } from 'framer-motion'

import { getLevelColor } from '@/lib/colors'

export default function CalendarDay({
  day,
  onClick,
}: any) {
  return (
    <motion.button
      whileTap={{
        scale: 0.97,
      }}
      onClick={onClick}
      className={`
        rounded-3xl
        p-4
        text-left
        bg-gradient-to-br
        ${getLevelColor(day.level)}
        shadow-xl
      `}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm opacity-80">
            {day.date}
          </p>

          <h3 className="text-4xl font-black mt-3">
            {day.visitors >= 1000
                ? `${(
                    day.visitors / 1000
                    ).toFixed(1)}K`
                : day.visitors}
          </h3>

          <p className="opacity-80 mt-1">
            visitors
          </p>
        </div>

        <div className="text-right">
          <div className="text-2xl">
            {day.weather.icon}
          </div>

          <p className="text-sm mt-1">
            {day.weather.temp}
            °
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm">
        <span>
          🚢{' '}
          {day.ships.length}
        </span>

        <span>
          {
            day.weather
              .condition
          }
        </span>
      </div>
    </motion.button>
  )
}