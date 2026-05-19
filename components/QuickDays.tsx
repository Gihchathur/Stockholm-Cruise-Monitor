'use client'

function formatVisitors(
  visitors: number
) {
  if (visitors >= 1000) {
    return `${(
      visitors / 1000
    ).toFixed(1)}K`
  }

  return visitors.toString()
}

export default function QuickDays({
  days,
  onSelect,
}: any) {
  return (
    <div className="mb-8 overflow-x-auto no-scrollbar">
      <div className="flex gap-4 min-w-max pr-4">
        {days
          .slice(0, 7)
          .map((day: any) => (
            <button
              key={day.date}
              onClick={() =>
                onSelect(day)
              }
              className="
                relative
                overflow-hidden
                rounded-3xl
                p-5
                w-[170px]
                shrink-0
                text-left
                glass
                transition-all
                duration-300
                active:scale-95
              "
            >
              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5" />

              <div className="relative z-10">
                {/* top row */}
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400 font-medium">
                    {day.date.split(
                      ' '
                    )[0]}
                  </p>

                  <div className="text-2xl">
                    {
                      day.weather
                        .icon
                    }
                  </div>
                </div>

                {/* visitors */}
                <div className="mt-5">
                  <h3 className="text-5xl font-black tracking-tight text-white">
                    {formatVisitors(
                      day.visitors
                    )}
                  </h3>

                  <p className="text-sm text-slate-400 mt-1">
                    visitors
                  </p>
                </div>

                {/* bottom */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">
                      🚢
                    </span>

                    <span className="text-sm font-medium text-slate-300">
                      {
                        day.ships
                          .length
                      }
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-200">
                      {
                        day.weather
                          .temp
                      }
                      °
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
      </div>
    </div>
  )
}