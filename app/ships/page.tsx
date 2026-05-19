'use client'

import { useEffect, useState } from 'react'

import Header from '@/components/Header'
import MobileNav from '@/components/MobileNav'

export default function ShipsPage() {
  const [ships, setShips] =
    useState<any[]>([])

  async function loadData() {
    const res = await fetch(
      '/api/cruises'
    )

    const data =
      await res.json()

    setShips(data.cruises || [])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <main className="min-h-screen px-4 pt-6 pb-32">
      <Header />

      <div className="glass rounded-3xl p-6 mb-6">
        <h1 className="text-4xl font-black">
          Cruise Ships
        </h1>

        <p className="text-slate-400 mt-2">
          Upcoming arrivals and
          passenger estimates.
        </p>
      </div>

      <div className="space-y-4">
        {ships.map(
          (
            ship: any,
            index
          ) => (
            <div
              key={index}
              className="glass rounded-3xl p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-black">
                    {
                      ship.shipName
                    }
                  </h2>

                  <p className="text-slate-400 mt-2">
                    {
                      ship.rawDate
                    }
                  </p>

                  <p className="text-slate-400">
                    Departure:{' '}
                    {
                      ship.departure
                    }
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-black">
                    {
                      ship.passengers
                    }
                  </p>

                  <p className="text-slate-400 text-sm">
                    passengers
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <MobileNav />
    </main>
  )
}