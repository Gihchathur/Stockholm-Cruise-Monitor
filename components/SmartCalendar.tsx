import CalendarDay from './CalendarDay'

export default function SmartCalendar({
  days,
  onSelectDay,
}: any) {
  return (
    <div>
      <h2 className="text-3xl font-black mb-8">
        Cruise Traffic Calendar
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {days.map((day: any, index: number) => (
          <CalendarDay
            key={index}
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