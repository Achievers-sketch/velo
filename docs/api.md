# API Guide

The API layer in Velo provides a lightweight service interface for agent-assisted and application-driven flows.

## Runtime

The API is implemented with Fastify and is intended to expose payment-aware routes for cash-related requests.

## Routes

- `GET /health` for health checks
- `GET /api/v1/cash/agents` for provider discovery concepts
- `POST /api/v1/cash/request` for request creation
- `GET /api/v1/cash/request/:id` for request status polling

## Payment Gate

The current implementation uses an x402-style challenge mechanism. When a valid payment header is not present, the API returns a challenge payload rather than allowing unrestricted access.

## Configuration

The API reads environment variables from the local environment or `.env` file. The most important values include the port, merchant address, and network configuration.
