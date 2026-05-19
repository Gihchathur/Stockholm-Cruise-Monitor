import * as cheerio from 'cheerio'

import { getPassengers } from './getPassengers'

export async function scrapeCruises() {
  const response = await fetch(
    'https://www.cruisemapper.com/ports/stockholm-port-59'
  )

  const html =
    await response.text()

  const $ = cheerio.load(html)

  const ships: any[] = []

  $('table tbody tr').each(
    (_, row) => {
      const cols =
        $(row).find('td')

      if (cols.length >= 3) {
        const rawDate =
          $(cols[0])
            .text()
            .replace(
              /(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/,
              ' $1'
            )
            .replace(
              /\s+/g,
              ' '
            )
            .trim()

        const shipName =
          $(cols[1])
            .text()
            .replace(
              /\s+/g,
              ' '
            )
            .trim()

        const departure =
          $(cols[2])
            .text()
            .replace(
              /\s+/g,
              ' '
            )
            .trim()

        ships.push({
          rawDate,
          shipName,
          arrival: rawDate,
          departure,
          passengers:
            getPassengers(
              shipName
            ),
        })
      }
    }
  )

  return ships
}