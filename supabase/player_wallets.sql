create extension if not exists pgcrypto;

create table if not exists public.player_wallets (
  id uuid primary key default gen_random_uuid(),
  player_id text not null unique,
  oxa_network text not null,
  oxa_to_currency text not null,
  oxa_track_id text not null unique,
  oxa_address text not null,
  oxa_raw jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_player_wallets_updated_at on public.player_wallets;

create trigger trg_player_wallets_updated_at
before update on public.player_wallets
for each row
execute function public.set_updated_at();
