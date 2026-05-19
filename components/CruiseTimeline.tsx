export default function CruiseTimeline({
  days,
}: any) {
  const nextDay =
    days[0]

  if (!nextDay)
    return null

  return (
    <div className="glass rounded-3xl p-5 md:p-8 mb-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-4xl font-black">
            Next Arrival
          </h2>

          <p className="text-slate-400 mt-1 text-sm md:text-base">
            {nextDay.date}
          </p>
        </div>

        <div className="text-right">
          <p className="text-3xl md:text-5xl font-black">
            {nextDay.visitors.toLocaleString()}
          </p>

          <p className="text-slate-400 text-sm">
            visitors
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {nextDay.ships.map(
          (
            ship: any,
            index: number
          ) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-white/5 pb-3"
            >
              <div>
                <p className="text-lg md:text-2xl font-bold">
                  {
                    ship.shipName
                  }
                </p>

                <p className="text-slate-400 text-sm mt-1">
                  Departure:{' '}
                  {
                    ship.departure
                  }
                </p>
              </div>

              <div className="text-right">
                <p className="text-xl md:text-3xl font-black">
                  {ship.passengers.toLocaleString()}
                </p>

                <p className="text-slate-400 text-xs">
                  passengers
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}