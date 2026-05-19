interface Props {
  visitors: number
  ships: number
}

export default function SummaryCards({
  visitors,
  ships,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <div className="glass glow rounded-3xl p-8">
        <p className="text-slate-400 text-lg">
          Upcoming Visitors
        </p>

        <h2 className="text-6xl font-black mt-3">
          {visitors.toLocaleString()}
        </h2>
      </div>

      <div className="glass rounded-3xl p-8">
        <p className="text-slate-400 text-lg">
          Upcoming Cruise Ships
        </p>

        <h2 className="text-6xl font-black mt-3">
          {ships}
        </h2>
      </div>
    </div>
  )
}