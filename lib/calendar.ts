import { getLevel } from './colors'

function parseCruiseDate(
  dateString: string
) {
  const cleaned = dateString
    .replace(
      /(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/,
      ''
    )
    .trim()

  return new Date(cleaned)
}

function normalizeDate(
  date: string
) {
  const parsed =
    parseCruiseDate(date)

  return parsed
    .toISOString()
    .split('T')[0]
}

function getWeatherForDate(
  weatherData: any,
  date: string
) {
  if (!weatherData?.list) {
    return {
      condition: 'Unknown',
      temp: '--',
      icon: '☁',
    }
  }

  const normalized =
    normalizeDate(date)

  const target =
    weatherData.list.find(
      (item: any) => {
        const weatherDate =
          item.dt_txt.split(' ')[0]

        return (
          weatherDate === normalized
        )
      }
    )

  if (!target) {
    return {
      condition: 'Unknown',
      temp: '--',
      icon: '☁',
    }
  }

  const condition =
    target.weather[0].main

  const temp = Math.round(
    target.main.temp
  )

  let icon = '☁'

  if (condition === 'Clear')
    icon = '☀'

  if (condition === 'Rain')
    icon = '🌧'

  if (condition === 'Clouds')
    icon = '☁'

  if (condition === 'Snow')
    icon = '❄'

  return {
    condition,
    temp,
    icon,
  }
}

export function generateCalendarDays(
  cruises: any[],
  weatherData: any
) {
  const grouped: Record<
    string,
    any[]
  > = {}

  ;(cruises || []).forEach(
    (cruise) => {
      const date =
        cruise.rawDate

      if (!grouped[date]) {
        grouped[date] = []
      }

      grouped[date].push(cruise)
    }
  )

  const today = new Date()

  today.setHours(0, 0, 0, 0)

  return Object.entries(grouped)
    .filter(([date]) => {
      const parsed =
        parseCruiseDate(date)

      return parsed >= today
    })
    .map(([date, ships]) => {
      const visitors =
        ships.reduce(
          (
            sum: number,
            ship: any
          ) =>
            sum +
            ship.passengers *
              0.75,
          0
        )

      const weather =
        getWeatherForDate(
          weatherData,
          date
        )

      return {
        date,
        ships,
        visitors:
          Math.floor(visitors),
        level: getLevel(
          visitors,
          weather.condition
        ),
        weather,
      }
    })
    .sort(
      (a, b) =>
        parseCruiseDate(
          a.date
        ).getTime() -
        parseCruiseDate(
          b.date
        ).getTime()
    )
}