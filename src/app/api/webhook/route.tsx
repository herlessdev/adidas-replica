// app/api/webhook/route.ts
import { Payment } from "mercadopago";
import { mercadopago } from "@/libs/mercadopago";

export async function POST(request: Request) {
  const body = await request.json();

  const paymentId = body.data?.id;
  if (!paymentId) return new Response("Missing ID", { status: 400 });

  const payment = await new Payment(mercadopago).get({ id: paymentId });

  if (payment.status === "approved") {
    console.log("💰 Pago aprobado:", payment.id);
    // Guardar en DB, actualizar estado, enviar email, etc.
  }

  return new Response(null, { status: 200 });
}