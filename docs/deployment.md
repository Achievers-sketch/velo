# Deployment Guide

Velo is currently structured for local development and staged deployment rather than a single monolithic production rollout.

## Environment Configuration

Use environment files for local development and configure deployment-specific values in the hosting platform.

## Contract Deployment

Soroban contract deployment should be handled carefully and recorded in the shared contract registry. The contract addresses should be centralized in the shared package rather than duplicated across the repository.

## Service Deployment

The API and mobile backend services should be deployed with explicit environment configuration and monitoring. The current repository expects environment variables for ports, merchant settings, and network configuration.

## Release Checklist

- verify contract build output,
- update the shared contract registry,
- run tests,
- confirm environment variables,
- review logs and failover behavior before launch.
