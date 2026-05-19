interface Props {
  visitors: number
  ships: number
  weather?: any
}

export default function StickyStats({
  visitors,
  ships,
  weather,
}: Props) {
  return (
    <div className="sticky top-2 z-40 mb-5 md:hidden">
      <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-slate-400 uppercase">
            Visitors
          </p>

          <p className="text-xl font-black">
            {visitors.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-[10px] text-slate-400 uppercase">
            Ships
          </p>

          <p className="text-xl font-black">
            {ships}
          </p>
        </div>

        <div className="text-center">
          <div className="text-xl">
            {weather?.icon}
          </div>

          <p className="text-xs">
            {weather?.temp}°
          </p>
        </div>
      </div>
    </div>
  )
}