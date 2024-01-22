import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  console.log('aaa')
  try {
    const { searchParams } = new URL(req.url)

    return NextResponse.json('gola')
  } catch (error) {
    console.log('[Product]', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500
    })
  }
}
