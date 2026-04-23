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
  // Allow CORS preflight requests to pass without API key authentication.
  // Browsers send an OPTIONS preflight without custom headers like `x-api-key`,
  // so respond here to avoid 405 Method Not Allowed responses from the route.
  if (request.method === 'OPTIONS') {
    return NextResponse.json({}, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization,x-api-key',
      },
    })
  }

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
