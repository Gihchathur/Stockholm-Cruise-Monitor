import { NextResponse } from 'next/server'

import { scrapeCruises } from '@/lib/scraper'
import { getWeatherForecast } from '@/lib/weather'

export async function GET() {
  try {
    const cruises =
      await scrapeCruises()

    console.log(
      'SCRAPED CRUISES:',
      cruises
    )

    const weather =
      await getWeatherForecast()

    return NextResponse.json({
      cruises,
      weather,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        cruises: [],
        weather: null,
      },
      {
        status: 200,
      }
    )
  }
}