# Velo

Anonymous cash liquidity on Stellar. Built by Nullifier Systems.

## Repo map

```
velo/
├── contracts/         Rust/Soroban — escrow, atomic-swap, htlc-core (own CI, own release cadence)
├── apps/
│   └── api/            x402-metered agent API (Fastify)
├── mobile/
│   ├── frontend/         Consumer app (React/Vite, port 5181)
│   └── backend/          Retail matching engine (Fastify, port 3002)
└── packages/
    └── shared/            Contract addresses + shared TS types
```

## Prerequisites

- Node.js 20+ and npm 10+
- Rust toolchain + `wasm32-unknown-unknown` target (for contracts)
- [Soroban CLI](https://developers.stellar.org/docs/tools/developer-tools) (`stellar` / `soroban` binary)
- A funded Stellar testnet account (via [Friendbot](https://friendbot.stellar.org))

## First-time setup

```bash
git clone <your-repo-url> velo && cd velo
npm install                        # installs all workspaces
cp apps/api/.env.example apps/api/.env
cp mobile/backend/.env.example mobile/backend/.env
```

## Running everything locally

```bash
npm run dev              # runs all apps in parallel via turbo
# or individually:
npm run dev:api          # :3000
npm run dev:backend      # :3002
npm run dev:frontend     # :5181
```

## Contracts

```bash
cd contracts
cargo test                                  # unit tests, all crates
soroban contract build                      # build wasm
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/escrow.wasm \
  --network testnet \
  --source <your-identity>
```

After deploying, paste the resulting contract ID into
`packages/shared/src/index.ts` under `CONTRACTS.testnet` — every app
reads from that single file, so nothing else needs to change.

## Where to start

New here? Read in this order:
1. This README
2. `contracts/escrow/src/lib.rs` — the trust mechanism everything else depends on
3. `apps/api/src/routes/cash.ts` — how the agent API exposes it
4. `mobile/frontend/src/pages/ClaimQR.tsx` — how a user actually claims cash

## License

Proprietary — Nullifier Systems, Inc.
