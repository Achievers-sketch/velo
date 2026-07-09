# Smart Contracts

The contract workspace in this repository currently includes the core escrow implementation and supporting abstractions.

## Escrow Contract

The escrow contract implements a simple HTLC-style release flow. It locks stablecoin funds from a buyer and allows them to be transferred to a seller only when the correct secret is revealed.

## HTLC Core

The HTLC core crate provides shared types and interfaces used by the escrow contract and future contract components.

## Atomic Swap

The atomic swap crate is present as a scaffold for additional conditional settlement primitives and may be extended as the product evolves.

## Operational Notes

- contract state should remain simple and auditable,
- contract behavior should be documented clearly,
- release and refund paths should be validated carefully before deployment.
