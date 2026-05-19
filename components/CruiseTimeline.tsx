export default function CruiseTimeline({
  days,
}: any) {
  const nextDay =
    days[0]

  if (!nextDay)
    return null

  return (
    <div className="glass rounded-3xl p-8 mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-black">
            Next Cruise Arrivals
          </h2>

          <p className="text-slate-400 mt-2">
            {nextDay.date}
          </p>
        </div>

        <div className="text-right">
          <p className="text-5xl font-black">
            {nextDay.visitors.toLocaleString()}
          </p>

          <p className="text-slate-400">
            estimated visitors
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {nextDay.ships.map(
          (
            ship: any,
            index: number
          ) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-white/5 pb-4"
            >
              <div>
                <p className="text-2xl font-bold">
                  {
                    ship.shipName
                  }
                </p>

                <p className="text-slate-400 mt-1">
                  Departure:{' '}
                  {
                    ship.departure
                  }
                </p>
              </div>

              <div className="text-right">
                <p className="text-3xl font-black">
                  {ship.passengers.toLocaleString()}
                </p>

                <p className="text-slate-400">
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