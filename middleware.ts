import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const { geo } = request

  //   const geo = request.geo

  //   geo {
  //     city: 'San Miguel de Tucumán',
  //     country: 'AR',
  //     latitude: '-26.8249',
  //     longitude: '-65.2237',
  //     region: 'T'
  //   }

  const latitude = geo?.latitude || ''
  const longitude = geo?.longitude || ''
  const city = geo?.city || ''

  response.headers.set('headersLatitude', latitude)
  response.headers.set('headersLongitude', longitude)
  response.headers.set('city', city)

  return response
}
