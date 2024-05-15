import { NextResponse } from 'next/server'

export function middleware(request: any) {
  const response = NextResponse.next()
  response.headers.set('x-latitude', request.geo.latitude)
  response.headers.set('x-longitude', request.geo.longitude)
  return response
}
