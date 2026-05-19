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

function getTheme(
  visitors: number
) {
  if (visitors < 1000) {
    return {
      bg: 'from-[#11998e] to-[#38ef7d]',
      glow: 'bg-emerald-300/30',
    }
  }

  if (visitors < 2000) {
    return {
      bg: 'from-[#f7971e] to-[#ffd200]',
      glow: 'bg-yellow-300/30',
    }
  }

  if (visitors < 2400) {
    return {
      bg: 'from-[#ff8008] to-[#ffb347]',
      glow: 'bg-orange-300/30',
    }
  }

  return {
    bg: 'from-[#ff512f] to-[#dd2476]',
    glow: 'bg-pink-500/30',
  }
}

export default function CalendarDay({
  day,
  onClick,
}: any) {
  const theme = getTheme(
    day.visitors
  )

  return (
    <button
      onClick={onClick}
      className={`
        relative
        overflow-hidden
        rounded-[28px]
        px-5
        py-4
        text-white
        shadow-[0_12px_40px_rgba(0,0,0,0.28)]
        active:scale-[0.98]
        transition-all
        bg-gradient-to-br
        ${theme.bg}
      `}
    >
      {/* glow */}
      <div
        className={`
          absolute
          -top-10
          -right-10
          w-24
          h-24
          rounded-full
          blur-3xl
          ${theme.glow}
        `}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-white/[0.04]" />

      <div className="relative z-10">
        {/* HEADER */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/70">
              {day.date}
            </p>

            <h2 className="text-[52px] font-black leading-none tracking-tight mt-3">
              {formatVisitors(
                day.visitors
              )}
            </h2>

            <p className="text-sm text-white/80 mt-1">
              visitors
            </p>
          </div>

          <div className="flex flex-col items-end">
            <div className="text-3xl">
              {
                day.weather
                  .icon
              }
            </div>

            <p className="text-base font-bold mt-1">
              {
                day.weather
                  .temp
              }°
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-black/15 px-3 py-1.5 rounded-xl backdrop-blur-xl border border-white/10">
            <span className="text-xs">
              🚢
            </span>

            <span className="text-xs font-semibold">
              {
                day.ships
                  .length
              }{' '}
              ships
            </span>
          </div>

          <div className="bg-white/15 px-3 py-1.5 rounded-xl backdrop-blur-xl border border-white/10">
            <span className="text-xs font-semibold">
              {
                day.weather
                  .condition
              }
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}