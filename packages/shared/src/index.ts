/**
 * Single source of truth for deployed contract addresses.
 * apps/api, mobile/backend, and mobile/frontend all import from here —
 * never hardcode a contract address in app code.
 */
export const CONTRACTS = {
  testnet: {
    escrow: "SET_ME_AFTER_FIRST_DEPLOY",
    atomicSwapA: "SET_ME_AFTER_FIRST_DEPLOY",
    zkVerifierRegistry: "SET_ME_AFTER_FIRST_DEPLOY",
  },
  mainnet: {
    escrow: "",
    atomicSwapA: "",
    zkVerifierRegistry: "",
  },
} as const;

export type Network = keyof typeof CONTRACTS;

export interface CashRequest {
  id: string;
  claim_url: string;
  qr_payload: string;
  status: "pending" | "locked" | "released" | "refunded";
}
