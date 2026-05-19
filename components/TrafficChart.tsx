'use client'

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from 'recharts'

function formatVisitors(
  value: number
) {
  if (value >= 1000) {
    return `${(
      value / 1000
    ).toFixed(1)}K`
  }

  return value
}

export default function TrafficChart({
  days,
}: any) {
  const data = days
    .slice(0, 10)
    .map((day: any) => ({
      date:
        day.date.split(' ')[0],

      visitors:
        day.visitors,
    }))

  const peak =
    Math.max(
      ...data.map(
        (d: any) =>
          d.visitors
      )
    )

  return (
    <div className="relative overflow-hidden glass rounded-[32px] p-6 md:p-8 mb-8">
      {/* glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative z-10">
        {/* top */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Visitor Traffic
            </h2>

            <p className="text-slate-400 mt-2">
              Cruise activity forecast
            </p>
          </div>

          <div className="text-right">
            <p className="text-slate-400 text-sm">
              Peak Day
            </p>

            <p className="text-3xl font-black text-cyan-400">
              {formatVisitors(
                peak
              )}
            </p>
          </div>
        </div>

        {/* graph */}
        <div className="h-[280px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <AreaChart data={data}>
              <defs>
                <linearGradient
                  id="trafficGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#06b6d4"
                    stopOpacity={0.9}
                  />

                  <stop
                    offset="100%"
                    stopColor="#06b6d4"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="date"
                tick={{
                  fill: '#94a3b8',
                  fontSize: 12,
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  background:
                    '#0f172a',

                  border:
                    '1px solid rgba(255,255,255,0.08)',

                  borderRadius:
                    '16px',

                  color: 'white',
                }}
              />

              <Area
                type="monotone"
                dataKey="visitors"
                stroke="#22d3ee"
                strokeWidth={4}
                fill="url(#trafficGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}