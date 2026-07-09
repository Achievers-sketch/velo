# Mobile Application

The mobile application provides a lightweight experience for users to reach the claim flow and interact with payment requests.

## Frontend

The frontend is a React + Vite application. It currently provides a simple home screen and a claim page that can render a request based on the route ID.

## Backend

The retail backend is a separate Fastify service designed to hold the matching and coordination logic for the broader retail experience.

## Design Goals

- keep the experience simple for first-time users,
- support QR-based claim links,
- avoid requiring a heavy wallet experience at the first interaction,
- preserve the option for later integration with richer identity and commerce flows.
