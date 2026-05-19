'use client'

import { useEffect, useState } from 'react'

import Header from '@/components/Header'
import SummaryCards from '@/components/SummaryCards'
import SmartCalendar from '@/components/SmartCalendar'
import CruiseDrawer from '@/components/CruiseDrawer'
import CruiseTimeline from '@/components/CruiseTimeline'
import LoadingScreen from '@/components/LoadingScreen'
import MobileNav from '@/components/MobileNav'
import StickyStats from '@/components/StickyStats'
import QuickDays from '@/components/QuickDays'

import { generateCalendarDays } from '@/lib/calendar'

export default function Home() {
  const [loading, setLoading] =
    useState(true)

  const [days, setDays] =
    useState<any[]>([])

  const [selectedDay, setSelectedDay] =
    useState<any>(null)

  async function loadData() {
    try {
      setLoading(true)

      const res = await fetch(
        '/api/cruises'
      )

      const data =
        await res.json()

      const cruises =
        Array.isArray(
          data?.cruises
        )
          ? data.cruises
          : []

      const weather =
        data?.weather || null

      const generated =
        generateCalendarDays(
          cruises,
          weather
        )

      setDays(generated)
    } catch (error) {
      console.error(error)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 1200)
    }
  }

  useEffect(() => {
    loadData()

    const interval =
      setInterval(
        loadData,
        300000
      )

    return () =>
      clearInterval(interval)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  const nextCruiseDay =
    days[0]

  const totalVisitors =
    nextCruiseDay?.visitors || 0

  const totalShips =
    nextCruiseDay?.ships?.length ||
    0

  return (
    <main className="min-h-screen pb-28 px-4 md:px-10 pt-3 md:pt-8 max-w-7xl mx-auto">
      <StickyStats
        visitors={totalVisitors}
        ships={totalShips}
        weather={
          nextCruiseDay?.weather
        }
      />

      <Header />

      <div className="hidden lg:block">
        <SummaryCards
          visitors={totalVisitors}
          ships={totalShips}
        />
      </div>

      <QuickDays
        days={days}
        onSelect={setSelectedDay}
      />

      <SmartCalendar
        days={days}
        onSelectDay={
          setSelectedDay
        }
      />

      <CruiseDrawer
        day={selectedDay}
        onClose={() =>
          setSelectedDay(null)
        }
      />

      <MobileNav />
    </main>
  )
}