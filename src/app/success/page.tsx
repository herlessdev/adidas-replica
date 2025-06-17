/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const itemsJSON = searchParams.get("items"); // query param
  const items = itemsJSON ? JSON.parse(decodeURIComponent(itemsJSON)) : [];

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">¡Gracias por tu compra!</h1>
      <p className="mb-6">Resumen del pedido:</p>
      <ul className="space-y-2">
        {items.map((item: any, index: number) => (
          <li key={index} className="border-b pb-2">
            <strong>{item.title}</strong> — Cantidad: {item.quantity} — Precio: S/{item.unit_price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default function SuccessPage() {
  return (
    <Suspense fallback={<p className="p-8">Cargando...</p>}>
      <SuccessContent />
    </Suspense>
  );
}