export function estimateVisitors(
  capacity: number
) {
  const occupancyRate = 0.92
  const disembarkRate = 0.75

  return Math.floor(
    capacity *
      occupancyRate *
      disembarkRate
  )
}