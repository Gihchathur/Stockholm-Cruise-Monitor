export interface CruiseDay {
  date: string
  visitors: number
  ships: number
  weather: string
  level: 'low' | 'medium' | 'high' | 'extreme'
}

export interface CruiseShip {
  shipName: string
  arrival: string
  departure: string
  passengers: number
}