import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { token, amount, description, customer } = await req.json();

    const response = await fetch(
      `https://${process.env.NEXT_PUBLIC_OPENPAY_MODE}-api.openpay.mx/v1/${process.env.NEXT_PUBLIC_OPENPAY_MERCHANT_ID}/charges`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(`${process.env.OPENPAY_PRIVATE_KEY}:`).toString("base64")}`,
        },
        body: JSON.stringify({
          source_id: token,
          method: "card",
          amount,
          currency: "MXN",
          description,
          device_session_id: "tu_session_id",
          customer,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.description || "Error en el pago");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error en el pago:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}