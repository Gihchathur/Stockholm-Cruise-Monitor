export default function Header() {
  return (
    <header className="mb-12">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center text-3xl">
          🚢
        </div>

        <div>
          <h1 className="text-6xl font-black gradient-text">
            Stockholm Cruise Monitor
          </h1>

          <p className="text-slate-400 mt-2 text-lg">
            Real-time cruise visitor intelligence
          </p>
        </div>
      </div>
    </header>
  )
}