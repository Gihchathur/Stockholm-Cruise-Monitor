export function getLevel(
  visitors: number,
  weather?: string
): 'low' | 'medium' | 'high' | 'extreme' {
  let adjustedVisitors =
    visitors

  if (weather === 'Rain') {
    adjustedVisitors *= 0.75
  }

  if (adjustedVisitors > 25000)
    return 'extreme'

  if (adjustedVisitors > 15000)
    return 'high'

  if (adjustedVisitors > 7000)
    return 'medium'

  return 'low'
}

export function getLevelColor(
  level: string
) {
  switch (level) {
    case 'extreme':
      return 'from-red-500 via-red-600 to-red-700'

    case 'high':
      return 'from-orange-400 via-orange-500 to-orange-600'

    case 'medium':
      return 'from-yellow-300 via-yellow-400 to-yellow-500'

    default:
      return 'from-emerald-400 via-emerald-500 to-emerald-600'
  }
}