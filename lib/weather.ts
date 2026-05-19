export async function getWeatherForecast() {
  try {
    const apiKey =
      process.env.OPENWEATHER_API_KEY

    if (!apiKey) {
      console.error(
        'Missing OpenWeather API key'
      )

      return null
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Stockholm&units=metric&appid=${apiKey}`
    )

    if (!response.ok) {
      console.error(
        'Weather API failed:',
        response.status
      )

      return null
    }

    return await response.json()
  } catch (error) {
    console.error(
      'Weather fetch error:',
      error
    )

    return null
  }
}