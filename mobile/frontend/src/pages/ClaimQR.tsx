import { useParams } from "react-router-dom";

export default function ClaimQR() {
  const { id } = useParams();
  return (
    <main>
      <h1>Claim {id}</h1>
      {/* TODO: fetch request status from GET /api/v1/cash/request/:id,
          render QR from qr_payload, show merchant instructions. No
          login required — this must work for a user who has never
          opened the app before. */}
    </main>
  );
}
