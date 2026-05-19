export default function Header() {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <div className="text-3xl">
          🚢
        </div>

        <div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Cruise Monitor
          </h1>

          <p className="text-slate-400 text-sm mt-1">
            Stockholm arrivals
          </p>
        </div>
      </div>
    </div>
  )
}