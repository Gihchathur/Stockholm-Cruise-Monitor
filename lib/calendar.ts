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

function getWeatherIcon(
  code: number
) {
  if (code === 0) return '☀'

  if ([1, 2, 3].includes(code))
    return '☁'

  if (
    [
      51, 53, 55, 61, 63, 65,
      80, 81, 82,
    ].includes(code)
  )
    return '🌧'

  if (
    [71, 73, 75].includes(code)
  )
    return '❄'

  if ([95].includes(code))
    return '⛈'

  return '☁'
}

function getWeatherCondition(
  code: number
) {
  if (code === 0)
    return 'Clear'

  if ([1, 2, 3].includes(code))
    return 'Cloudy'

  if (
    [
      51, 53, 55, 61, 63, 65,
      80, 81, 82,
    ].includes(code)
  )
    return 'Rain'

  if (
    [71, 73, 75].includes(code)
  )
    return 'Snow'

  if ([95].includes(code))
    return 'Storm'

  return 'Unknown'
}

function getWeatherForDate(
  weatherData: any,
  date: string
) {
  if (!weatherData?.daily) {
    return {
      condition:
        'Unavailable',
      temp: '--',
      icon: '☁',
    }
  }

  const normalized =
    normalizeDate(date)

  const index =
    weatherData.daily.time.findIndex(
      (d: string) =>
        d === normalized
    )

  if (index === -1) {
    return {
      condition:
        'Unavailable',
      temp: '--',
      icon: '☁',
    }
  }

  const code =
    weatherData.daily
      .weathercode[index]

  const temp =
    Math.round(
      weatherData.daily
        .temperature_2m_max[
        index
      ]
    )

  return {
    condition:
      getWeatherCondition(
        code
      ),

    temp,

    icon: getWeatherIcon(
      code
    ),
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