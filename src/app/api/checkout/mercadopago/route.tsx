import { NextRequest } from "next/server";
import { Preference } from "mercadopago";
import { mercadopago } from "@/libs/mercadopago";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const preference = await new Preference(mercadopago).create({
    body: {
      items: body?.items,
      back_urls: {
        success: `${process.env.APP_URL}/success`,
        failure: `${process.env.APP_URL}/failure`,
        pending: `${process.env.APP_URL}/pending`,
      },
      auto_return: "approved",
      notification_url: `${process.env.APP_URL}/api/webhook`,
    },
  });

  return Response.json({ init_point: preference.init_point });
}
