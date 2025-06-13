// app/api/webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Payment } from "mercadopago";
import { mercadopago } from "@/libs/mercadopago";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("🔔 Webhook recibido:", JSON.stringify(body));

    const paymentId = body.data?.id;
    if (!paymentId) {
      console.warn("❗ Webhook sin paymentId:", body);
      return NextResponse.json({ ok: true });
    }

    let payment;
    try {
      payment = await new Payment(mercadopago).get({ id: paymentId });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("❌ Error al obtener payment:", err.message);
      return NextResponse.json({ ok: true });
    }

    console.log("📄 Pago consultado:", payment);

    if (payment.status === "approved") {
      console.log("🏆 Pago aprobado:", payment.id);
      // ... lógica del pedido aquí ...
    } else {
      console.log("ℹ️ Estado del pago:", payment.status);
    }

    return NextResponse.json({ ok: true });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("🛑 Error general en webhook:", err);
    return NextResponse.json({ ok: true });
  }
}