import { NextRequest, NextResponse } from 'next/server'

function unauthorized() {
  return NextResponse.json(
    {
      error: 'Unauthorized: missing or invalid API key',
    },
    { status: 401 },
  )
}

export function middleware(request: NextRequest) {
  const expectedKey = process.env.INTERNAL_API_KEY

  if (!expectedKey) {
    return NextResponse.json(
      {
        error: 'Server misconfigured: INTERNAL_API_KEY is not set',
      },
      { status: 500 },
    )
  }

  const xApiKey = request.headers.get('x-api-key')
  const authorization = request.headers.get('authorization')
  const bearerToken = authorization?.startsWith('Bearer ')
    ? authorization.slice(7)
    : null

  if (xApiKey === expectedKey || bearerToken === expectedKey) {
    return NextResponse.next()
  }

  return unauthorized()
}

export const config = {
  matcher: ['/api/:path*'],
}
