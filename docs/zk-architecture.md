# Zero-Knowledge and Privacy Architecture

Velo’s architecture anticipates privacy-preserving identity and credential flows. The current repository focuses on the payment and escrow primitives, but it is structured so that future work can integrate zero-knowledge verifiers and nullifier-based privacy mechanisms without disrupting the main payment flow.

## Design Goals

- keep settlement logic on-chain and auditable,
- preserve user privacy where appropriate,
- avoid coupling the payment layer to specific identity systems,
- maintain a path for future credential verification.

## Current State

The present repository exposes the core escrow workflow and a shared contract registry. Zero-knowledge components are referenced conceptually and should be implemented carefully once the supporting primitives are ready.
