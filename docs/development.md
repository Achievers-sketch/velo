# Development Guide

This guide covers day-to-day development for contributors working on the Velo repository.

## Prerequisites

- Node.js 20+
- npm 10+
- Rust toolchain
- wasm target for Soroban contracts
- access to a Stellar testnet account

## Workspace Setup

```bash
git clone https://github.com/Nullifier-Systems/velo.git
cd velo
npm install
cp apps/api/.env.example apps/api/.env
cp mobile/backend/.env.example mobile/backend/.env
```

## Running the stack

```bash
npm run dev
```

## Working on Contracts

```bash
cd contracts
cargo build --workspace
cargo test --workspace
```

## Working on the API

```bash
npm run dev:api
```

## Working on the Frontend

```bash
npm run dev:frontend
```
