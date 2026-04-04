
  # Game Crypto Casino Website

  This is a code bundle for Game Crypto Casino Website. The original project is available at https://www.figma.com/design/GRQFOvqHBIhvipViMHynCY/Game-Crypto-Casino-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Wallet API (Supabase + OxaPay)

  The project now includes server API routes to manage player wallets and payouts.

  ### Required environment variables

  Create `.env.local` in the project root with:

  - `SUPABASE_URL`
  - `SUPABASE_SERVICE_ROLE_KEY`
  - `SUPABASE_PLAYER_WALLETS_TABLE` (optional, default: `player_wallets`)
  - `SUPABASE_GAME_REPORTS_TABLE` (optional, default: `game_reports`)
  - `INTERNAL_API_KEY` (required, protects all `/api/*` routes)
  - `OXAPAY_MERCHANT_API_KEY`
  - `OXAPAY_PAYOUT_API_KEY`
  - `OXAPAY_CALLBACK_URL` (optional fallback callback URL)
  - `OXAPAY_BASE_URL` (optional, default: `https://api.oxapay.com/v1`)

  ### Supabase schema

  Run SQL from `supabase/player_wallets.sql` and `supabase/game_reports.sql` in your Supabase SQL editor.

  ### Endpoints

  - `POST /api/player-wallets`
    - Creates an OxaPay static wallet for a player and stores `track_id` + address in Supabase.

  - `POST /api/payout/internal`
    - Pays out to the player's stored static address.

  - `POST /api/payout/external`
    - Pays out to any external wallet address.

  - `GET /api/player-wallets/:playerId/balance`
    - Looks up the player's `track_id` and returns OxaPay payment/wallet info.

  - `POST /api/game-reports`
    - Stores game round results posted by your game server in Supabase.
    - Accepts either one report object or a `reports` array.
    - Uses `reportId` as an idempotent unique key for retries.

  ### API auth

  All API endpoints require one private key via header:

  - `x-api-key: YOUR_INTERNAL_API_KEY`
  - or `Authorization: Bearer YOUR_INTERNAL_API_KEY`

  ### API docs page

  Open `/docs` in your app to view endpoint and payload documentation.
  