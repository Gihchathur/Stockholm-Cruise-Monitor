'use client'

import { motion } from 'framer-motion'

import { X } from 'lucide-react'

export default function CruiseDrawer({
  day,
  onClose,
}: any) {
  if (!day) return null

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-end">
      <motion.div
        initial={{
          x: 500,
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: 500,
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
        }}
        className="w-full md:w-[520px] bg-slate-950 p-8 overflow-y-auto border-l border-white/10"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-black">
              {day.date}
            </h2>

            <p className="text-slate-400 mt-3">
              Estimated Visitors:{' '}
              {day.visitors.toLocaleString()}
            </p>

            <div className="mt-4 flex items-center gap-3 text-lg">
              <span className="text-3xl">
                {day.weather.icon}
              </span>

              <span>
                {day.weather.condition}
              </span>

              <span>
                {day.weather.temp}°C
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="hover:rotate-90 transition"
          >
            <X size={32} />
          </button>
        </div>

        <div className="mt-10 space-y-5">
          {day.ships.map(
            (ship: any, index: number) => (
              <div
                key={index}
                className="glass rounded-3xl p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {ship.shipName}
                    </h3>

                    <div className="mt-5 space-y-2 text-slate-300">
                      <p>
                        Arrival:{' '}
                        {ship.arrival}
                      </p>

                      <p>
                        Departure:{' '}
                        {ship.departure}
                      </p>

                      <p>
                        Passengers:{' '}
                        {ship.passengers.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="text-5xl">
                    🚢
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </motion.div>
    </div>
  )
}