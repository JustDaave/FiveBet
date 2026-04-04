create extension if not exists pgcrypto;

create table if not exists public.game_reports (
  id uuid primary key default gen_random_uuid(),
  report_id text not null unique,
  game_key text not null,
  player_id text,
  server_id text,
  session_id text,
  round_id text,
  bet_amount numeric(18, 8) not null default 0,
  payout_amount numeric(18, 8) not null default 0,
  net_amount numeric(18, 8) not null default 0,
  currency text not null,
  result text,
  metadata jsonb,
  raw_payload jsonb,
  occurred_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_game_reports_game_key_occurred_at
  on public.game_reports (game_key, occurred_at desc);

create index if not exists idx_game_reports_player_id_occurred_at
  on public.game_reports (player_id, occurred_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_game_reports_updated_at on public.game_reports;

create trigger trg_game_reports_updated_at
before update on public.game_reports
for each row
execute function public.set_updated_at();