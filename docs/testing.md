# Testing Guide

Velo should be tested at both the application and contract level.

## Application Testing

The API workspace currently exposes Vitest-based test scripts. Contributors should add tests for routes, middleware behavior, and shared utilities.

## Contract Testing

The Rust workspace should be validated with Cargo tests and contract build checks.

## Recommended Workflow

```bash
npm run test
cd contracts && cargo test --workspace
```

## Testing Principles

- test the behavior that contributors and users rely on,
- keep tests deterministic,
- prefer small targeted tests over brittle end-to-end scenarios when appropriate,
- document any known limitations or skipped coverage clearly.
