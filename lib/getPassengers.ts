import { shipCapacities } from '@/data/shipCapacities'

export function getPassengers(
  shipName: string
) {
  return (
    shipCapacities[shipName] || 1500
  )
}

export function estimateVisitors(
  shipName: string
) {
  const capacity = getPassengers(shipName)

  const occupancyRate = 0.93
  const disembarkRate = 0.78

  return Math.floor(
    capacity *
      occupancyRate *
      disembarkRate
  )
}