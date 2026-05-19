'use client'

import { useEffect, useState } from 'react'

import Header from '@/components/Header'
import MobileNav from '@/components/MobileNav'
import SmartCalendar from '@/components/SmartCalendar'

import { generateCalendarDays } from '@/lib/calendar'

export default function CalendarPage() {
  const [days, setDays] =
    useState<any[]>([])

  async function loadData() {
    const res = await fetch(
      '/api/cruises'
    )

    const data =
      await res.json()

    const generated =
      generateCalendarDays(
        data.cruises,
        data.weather
      )

    setDays(generated)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <main className="min-h-screen px-4 pt-6 pb-32">
      <Header />

      <div className="glass rounded-3xl p-6 mb-6">
        <h1 className="text-4xl font-black">
          Cruise Calendar
        </h1>

        <p className="text-slate-400 mt-2">
          Forecasted visitor traffic
          and cruise density.
        </p>
      </div>

      <SmartCalendar
        days={days}
        onSelectDay={() => {}}
      />

      <MobileNav />
    </main>
  )
}