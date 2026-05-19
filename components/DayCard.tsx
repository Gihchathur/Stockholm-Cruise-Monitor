import { getLevelColor } from '@/lib/colors'
import { motion } from 'framer-motion'

export default function DayCard({
  day,
}: any) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        y: -5,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        p-6
        bg-gradient-to-br
        ${getLevelColor(day.level)}
        shadow-2xl
        min-h-[220px]
      `}
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold">
          {day.date}
        </h3>

        <div className="mt-5">
          <p className="text-5xl font-black">
            {day.visitors.toLocaleString()}
          </p>

          <p className="text-lg opacity-90 mt-1">
            Visitors
          </p>
        </div>

        <div className="mt-8 space-y-2 text-lg">
          <p>🚢 {day.ships} Ships</p>

          <p>
            {day.weather === 'Sunny'
              ? '☀'
              : day.weather === 'Cloudy'
              ? '☁'
              : '🌧'}{' '}
            {day.weather}
          </p>
        </div>
      </div>
    </motion.div>
  )
}