# Design Decisions

This document records the high-level choices that shape the current Velo codebase.

## Separation of Settlement and Experience

The repository separates on-chain settlement logic from the user-facing experience. This keeps the smart contracts as the trust anchor while allowing the application layers to evolve independently.

## Modular Workspace Structure

The monorepo structure allows the API, frontend, mobile backend, shared package, and contracts to evolve in parallel while sharing common interfaces and metadata.

## Payment-Aware API Access

The API uses a lightweight payment challenge model to gate access and establish a path toward real payment-backed authorization.

## QR-Centric User Experience

The mobile frontend is designed around simplified claim flows that can be shared through links or QR codes.
