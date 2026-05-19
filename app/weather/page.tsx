'use client'

import { useEffect, useState } from 'react'

import Header from '@/components/Header'
import MobileNav from '@/components/MobileNav'

import {
  CloudRain,
  Sun,
  Cloud,
  Wind,
} from 'lucide-react'

function getWeatherTheme(
  condition: string
) {
  const value =
    condition?.toLowerCase() || ''

  if (value.includes('rain')) {
    return {
      bg: 'from-[#396afc] to-[#2948ff]',
      icon: CloudRain,
    }
  }

  if (value.includes('sun')) {
    return {
      bg: 'from-[#f7971e] to-[#ffd200]',
      icon: Sun,
    }
  }

  if (value.includes('cloud')) {
    return {
      bg: 'from-[#757f9a] to-[#d7dde8]',
      icon: Cloud,
    }
  }

  return {
    bg: 'from-[#11998e] to-[#38ef7d]',
    icon: Wind,
  }
}

export default function WeatherPage() {
  const [days, setDays] =
    useState<any[]>([])

  const [loading, setLoading] =
    useState(true)

  async function loadData() {
    try {
      const res = await fetch(
        '/api/cruises'
      )

      const data =
        await res.json()

      const weatherArray =
        Object.entries(
            data.weather || {}
        ).map(
            ([date, value]: any) => ({
            date,
            ...value,
            })
        )

        setDays(weatherArray)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <main className="min-h-screen px-4 pt-6 pb-32 max-w-7xl mx-auto">
      <Header />

      {/* HERO */}
      <div className="relative overflow-hidden glass rounded-[34px] p-6 mb-6">
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                Stockholm
              </p>

              <h1 className="text-5xl font-black mt-3">
                Weather Forecast
              </h1>

              <p className="text-slate-400 mt-2">
                Cruise arrival weather
                intelligence
              </p>
            </div>

            <div className="text-7xl">
              🌤️
            </div>
          </div>
        </div>
      </div>

      {/* WEATHER GRID */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[...Array(6)].map(
            (_, i) => (
              <div
                key={i}
                className="h-[190px] rounded-[30px] glass animate-pulse"
              />
            )
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {days.map(
            (
              day: any,
              index: number
            ) => {
              const theme =
                getWeatherTheme(
                  day.condition
                )

              const Icon =
                theme.icon

              return (
                <div
                  key={index}
                  className={`
                    relative
                    overflow-hidden
                    rounded-[30px]
                    p-5
                    text-white
                    shadow-[0_20px_60px_rgba(0,0,0,0.28)]
                    bg-gradient-to-br
                    ${theme.bg}
                  `}
                >
                  {/* glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 blur-3xl rounded-full" />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-white/[0.04]" />

                  <div className="relative z-10">
                    {/* TOP */}
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                          {
                            day.date
                          }
                        </p>

                        <h2 className="text-6xl font-black mt-4 leading-none">
                          {
                            day.temp
                          }
                          °
                        </h2>

                        <p className="text-white/80 mt-2">
                          feels like{' '}
                          {
                            day.feelsLike ||
                            day.temp
                          }
                          °
                        </p>
                      </div>

                      <div className="flex flex-col items-end">
                        <Icon
                          size={
                            46
                          }
                          strokeWidth={
                            2.5
                          }
                        />

                        <p className="mt-3 text-lg font-bold">
                          {
                            day.condition
                          }
                        </p>
                      </div>
                    </div>

                    {/* divider */}
                    <div className="mt-6 h-px bg-white/15" />

                    {/* BOTTOM */}
                    <div className="mt-5 flex items-center justify-between">
                      <div className="bg-black/15 px-4 py-2 rounded-2xl backdrop-blur-xl border border-white/10">
                        <p className="text-xs text-white/70">
                          Wind
                        </p>

                        <p className="font-bold mt-1">
                          {
                            day.wind ||
                            '12 km/h'
                          }
                        </p>
                      </div>

                      <div className="bg-white/15 px-4 py-2 rounded-2xl backdrop-blur-xl border border-white/10">
                        <p className="text-xs text-white/70">
                          Rain
                        </p>

                        <p className="font-bold mt-1">
                          {
                            day.rain ||
                            '12%'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          )}
        </div>
      )}

      <MobileNav />
    </main>
  )
}