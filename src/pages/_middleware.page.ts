import { NextResponse } from 'next/server'

export async function middleware(req: any) {
  return NextResponse.next()

  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}
