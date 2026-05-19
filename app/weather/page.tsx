import Header from '@/components/Header'
import MobileNav from '@/components/MobileNav'

export default function WeatherPage() {
  return (
    <main className="min-h-screen px-4 pt-6 pb-32">
      <Header />

      <div className="glass rounded-3xl p-6">
        <h1 className="text-4xl font-black">
          Weather Forecast
        </h1>

        <p className="text-slate-400 mt-3">
          Stockholm cruise weather
          conditions and upcoming
          forecasts.
        </p>
      </div>

      <MobileNav />
    </main>
  )
}