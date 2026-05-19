export async function getWeatherForecast() {
  try {
    const response = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=59.3293&longitude=18.0686&daily=weathercode,temperature_2m_max&timezone=Europe%2FStockholm'
    )

    if (!response.ok) {
      return null
    }

    return await response.json()
  } catch (error) {
    console.error(error)

    return null
  }
}