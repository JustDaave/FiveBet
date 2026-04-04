import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FiveBet API Docs',
  description: 'API documentation for FiveBet wallet, payout, and game reporting routes.',
}

export default function DocsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 text-sm leading-6 text-slate-900">
      <h1 className="mb-2 text-3xl font-bold">FiveBet API Documentation</h1>
      <p className="mb-8 text-slate-700">
        Base path: <strong>/api</strong>
      </p>

      <section className="mb-8 rounded-xl border border-slate-200 bg-white/70 p-5">
        <h2 className="mb-3 text-xl font-semibold">Authentication</h2>
        <p className="mb-3 text-slate-700">
          All API routes are protected by one private key set in{' '}
          <strong>INTERNAL_API_KEY</strong>.
        </p>
        <p className="text-slate-700">Send it in either header:</p>
        <ul className="mt-2 list-disc pl-6 text-slate-700">
          <li>
            <strong>x-api-key</strong>: YOUR_KEY
          </li>
          <li>
            <strong>authorization</strong>: Bearer YOUR_KEY
          </li>
        </ul>
      </section>

      <section className="mb-8 rounded-xl border border-slate-200 bg-white/70 p-5">
        <h2 className="mb-3 text-xl font-semibold">1) Create player wallet</h2>
        <p>
          <strong>POST</strong> /api/player-wallets
        </p>
        <p className="mt-2 text-slate-700">Body:</p>
        <pre className="mt-2 overflow-auto rounded bg-slate-900 p-3 text-xs text-slate-100">
{`{
  "playerId": "player-123",
  "network": "BTC",
  "toCurrency": "USDT",
  "autoWithdrawal": false,
  "callbackUrl": "https://your-domain.com/callback",
  "email": "player@example.com",
  "orderId": "ORD-12345",
  "description": "Player wallet creation"
}`}
        </pre>
      </section>

      <section className="mb-8 rounded-xl border border-slate-200 bg-white/70 p-5">
        <h2 className="mb-3 text-xl font-semibold">2) Payout to internal player wallet</h2>
        <p>
          <strong>POST</strong> /api/payout/internal
        </p>
        <p className="mt-2 text-slate-700">Body:</p>
        <pre className="mt-2 overflow-auto rounded bg-slate-900 p-3 text-xs text-slate-100">
{`{
  "playerId": "player-123",
  "amount": 5,
  "currency": "BTC",
  "network": "BTC",
  "callbackUrl": "https://your-domain.com/callback",
  "memo": "Memo123",
  "description": "Internal payout"
}`}
        </pre>
      </section>

      <section className="mb-8 rounded-xl border border-slate-200 bg-white/70 p-5">
        <h2 className="mb-3 text-xl font-semibold">3) Payout to external wallet</h2>
        <p>
          <strong>POST</strong> /api/payout/external
        </p>
        <p className="mt-2 text-slate-700">Body:</p>
        <pre className="mt-2 overflow-auto rounded bg-slate-900 p-3 text-xs text-slate-100">
{`{
  "address": "RECEIVER_ADDRESS",
  "amount": 5,
  "currency": "BTC",
  "network": "BTC",
  "callbackUrl": "https://your-domain.com/callback",
  "memo": "Memo123",
  "description": "External payout"
}`}
        </pre>
      </section>

      <section className="mb-8 rounded-xl border border-slate-200 bg-white/70 p-5">
        <h2 className="mb-3 text-xl font-semibold">4) Check internal wallet/payment info</h2>
        <p>
          <strong>GET</strong> /api/player-wallets/:playerId/balance
        </p>
        <p className="mt-2 text-slate-700">
          Uses the player&apos;s stored OxaPay <strong>track_id</strong> from Supabase.
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-slate-200 bg-white/70 p-5">
        <h2 className="mb-3 text-xl font-semibold">5) Report game results from your server</h2>
        <p>
          <strong>POST</strong> /api/game-reports
        </p>
        <p className="mt-2 text-slate-700">
          Accepts either a single report object or a <strong>reports</strong> array. Each report must include a unique
          <strong> reportId</strong> so retried posts remain idempotent.
        </p>
        <p className="mt-2 text-slate-700">Body:</p>
        <pre className="mt-2 overflow-auto rounded bg-slate-900 p-3 text-xs text-slate-100">
{`{
  "reportId": "round-blackjack-0001",
  "game": "blackjack",
  "playerId": "player-123",
  "serverId": "main-city-server",
  "sessionId": "session-456",
  "roundId": "round-456",
  "betAmount": 500,
  "payoutAmount": 1000,
  "currency": "chips",
  "result": "win",
  "occurredAt": "2026-04-04T18:22:00.000Z",
  "metadata": {
    "tableId": "blackjack-a",
    "dealerHand": [10, 8],
    "playerHand": [1, 10]
  }
}`}
        </pre>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white/70 p-5">
        <h2 className="mb-3 text-xl font-semibold">Notes</h2>
        <ul className="list-disc pl-6 text-slate-700">
          <li>These routes are server-side Next.js API endpoints.</li>
          <li>You can call them from external services as long as they can reach your deployed domain.</li>
          <li>Game reports are stored in Supabase for later aggregation into live stats, leaderboards, and recent activity.</li>
          <li>Keep INTERNAL_API_KEY private and rotate it if leaked.</li>
        </ul>
      </section>
    </main>
  )
}
