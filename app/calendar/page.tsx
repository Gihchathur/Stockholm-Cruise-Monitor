import Header from '@/components/Header'
import MobileNav from '@/components/MobileNav'

export default function CalendarPage() {
  return (
    <main className="min-h-screen px-4 pt-6 pb-32">
      <Header />

      <div className="glass rounded-3xl p-6">
        <h1 className="text-4xl font-black">
          Cruise Calendar
        </h1>

        <p className="text-slate-400 mt-3">
          Monthly traffic forecasting
          and cruise schedule
          overview.
        </p>
      </div>

      <MobileNav />
    </main>
  )
}