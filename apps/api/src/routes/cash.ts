import type { FastifyInstance } from "fastify";

/**
 * GET  /api/v1/cash/agents        — find nearby cash providers ($0.001)
 * POST /api/v1/cash/request       — lock USDC via the escrow contract,
 *                                    return a claim_url + QR payload ($0.01)
 * GET  /api/v1/cash/request/:id   — poll a pending cash request (free)
 */
export async function cashRoutes(app: FastifyInstance) {
  app.get("/cash/agents", async (req, reply) => {
    const paid = await (app as any).requirePayment(req, reply, "0.001");
    if (!paid) return;

    // TODO: query real merchant registry (on-chain reputation + off-chain
    // location index). Stub data below for local dev only.
    return {
      agents: [
        { name: "Farmacia Guadalupe", distance_km: 0.3, tier: "Maestro" },
      ],
    };
  });

  app.post("/cash/request", async (req, reply) => {
    const paid = await (app as any).requirePayment(req, reply, "0.01");
    if (!paid) return;

    // TODO: call the escrow contract's lock() via Stellar SDK, then
    // return a real claim_url pointing at the mobile frontend's
    // /claim/:id route.
    reply.code(201).send({
      claim_url: "https://app.velo.cash/claim/mcr-stub",
      qr_payload: "velo://claim?request_id=mcr-stub",
      instructions: "TODO: wire up escrow lock()",
    });
  });

  app.get("/cash/request/:id", async (req) => {
    const { id } = req.params as { id: string };
    // TODO: read trade state from the escrow contract.
    return { id, status: "pending" };
  });
}
