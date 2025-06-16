"use client";

interface Props {
  items: {
    id: string;
    title: string;
    quantity: number;
    unit_price: number;
    currency_id: string;
  }[];
}

export default function CheckoutButton({ items }: Props) {
  const handlePay = async () => {
    const res = await fetch(`/api/checkout/mercadopago`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error al crear preferencia:", errorText);
      return;
    }

    const data = await res.json();
    window.location.href = data.init_point;
  };

  return (
    <button
      onClick={handlePay}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Pago
    </button>
  );
}
