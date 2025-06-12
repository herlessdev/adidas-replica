import { mercadopago } from "@/libs/mercadopago";
import { Payment } from "mercadopago";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const paymentId = body.data?.id;

    if (!paymentId) {
      return new Response("Missing ID", { status: 400 });
    }

    const payment = await new Payment(mercadopago).get({ id: paymentId });

    if (payment.status === "approved") {
      console.log("💰 Pago aprobado:", payment.id);
      // Guardar en DB, actualizar estado, etc.
    }

    return new Response("OK", { status: 200 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("❌ Error en webhook:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}