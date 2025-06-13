import { NextRequest } from "next/server";
import { Preference } from "mercadopago";
import { mercadopago } from "@/libs/mercadopago";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const preference = await new Preference(mercadopago).create({
    body: {
      items: [
        {
          id: "producto-123", // <--- Este es el campo requerido
          title: body.title,
          quantity: 1,
          unit_price: body.price,
          currency_id: "PEN",
        },
      ],
      back_urls: {
        success: `/success`,
        failure: `/failure`,
        pending: `/pending`,
      },
      auto_return: "approved",
      notification_url: `/api/webhook`,
    },
  });

  return Response.json({ init_point: preference.init_point });
}
