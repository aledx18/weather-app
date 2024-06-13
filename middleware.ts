import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const { geo, url, nextUrl, redirect } = request

  console.log('url', url)
  console.log('nextUrl', nextUrl)
  console.log('redirect', redirect)
  const latitude = geo?.latitude || 'unknown'
  const longitude = geo?.longitude || 'unknown'

  response.headers.set('x-latitude', latitude)
  response.headers.set('x-longitude', longitude)

  return response
}
