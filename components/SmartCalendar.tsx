import CalendarDay from './CalendarDay'

export default function SmartCalendar({
  days,
  onSelectDay,
}: any) {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-black">
          Traffic Forecast
        </h2>

        <p className="text-sm text-slate-400">
          Next 14 days
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {days.map((day: any) => (
          <CalendarDay
            key={day.date}
            day={day}
            onClick={() =>
              onSelectDay(day)
            }
          />
        ))}
      </div>
    </div>
  )
}