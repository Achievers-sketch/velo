# Architecture

Velo is organized as a layered system that separates settlement primitives, integration services, and user experience.

## System Overview

The stack has three main layers:

- smart contracts for settlement and escrow logic,
- API services for orchestration and payment-challenge handling,
- mobile clients for user-facing claim and retail flows.

## Smart Contract Layer

The Soroban contracts provide the trust anchor for the platform. The escrow contract locks funds from a buyer until the release condition is met or the refund timeout elapses.

## API Layer

The API layer sits between clients and the contract layer. It exposes payment-aware endpoints and manages the external interface used by agents or client applications.

## Mobile Layer

The mobile application provides a lightweight claim experience and is designed to support QR-based handoff and simple user interaction.

## Flow Summary

1. A user requests a cash flow through the API layer.
2. The application prepares a contract-backed escrow flow.
3. Funds are locked in a Soroban contract.
4. A claimant completes the release condition or the flow expires for refund.
