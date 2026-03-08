import { getServerEnv } from "@/lib/server-env";

type OxaPayHeaderType = "merchant" | "payout";

async function oxapayRequest<TResponse>(
  path: string,
  apiKeyType: OxaPayHeaderType,
  init?: RequestInit,
): Promise<TResponse> {
  const env = getServerEnv();
  const url = `${env.oxapayBaseUrl}${path}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(apiKeyType === "merchant"
      ? { merchant_api_key: env.oxapayMerchantApiKey }
      : { payout_api_key: env.oxapayPayoutApiKey }),
    ...(init?.headers ?? {}),
  };

  const response = await fetch(url, {
    ...init,
    headers,
    cache: "no-store",
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      (data && typeof data === "object" && "message" in data
        ? String((data as { message: unknown }).message)
        : undefined) ?? "Failed OxaPay request";
    throw new Error(`${message} (status ${response.status})`);
  }

  return data as TResponse;
}

export type OxaCreateStaticAddressPayload = {
  network: string;
  to_currency: string;
  auto_withdrawal?: boolean;
  callback_url?: string;
  email?: string;
  order_id?: string;
  description?: string;
};

export function createStaticAddress(payload: OxaCreateStaticAddressPayload) {
  return oxapayRequest<Record<string, unknown>>(
    "/payment/static-address",
    "merchant",
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
  );
}

export function getPaymentInformation(trackId: string) {
  return oxapayRequest<Record<string, unknown>>(
    `/payment/${encodeURIComponent(trackId)}`,
    "merchant",
    {
      method: "GET",
    },
  );
}

export type OxaPayoutPayload = {
  address: string;
  amount: number;
  currency: string;
  network: string;
  callback_url?: string;
  memo?: string;
  description?: string;
};

export function createPayout(payload: OxaPayoutPayload) {
  return oxapayRequest<Record<string, unknown>>("/payout", "payout", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
