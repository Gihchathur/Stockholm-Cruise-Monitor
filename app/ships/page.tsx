import Header from '@/components/Header'
import MobileNav from '@/components/MobileNav'

export default function ShipsPage() {
  return (
    <main className="min-h-screen px-4 pt-6 pb-32">
      <Header />

      <div className="glass rounded-3xl p-6">
        <h1 className="text-4xl font-black">
          Cruise Ships
        </h1>

        <p className="text-slate-400 mt-3">
          View all arriving ships,
          passenger capacity,
          schedules and details.
        </p>
      </div>

      <MobileNav />
    </main>
  )
}