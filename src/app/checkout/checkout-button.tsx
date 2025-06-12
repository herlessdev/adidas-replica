"use client";

export default function CheckoutButton() {
  const handlePay = async () => {
    const res = await fetch("/api/checkout/mercadopago", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Producto de prueba",
        price: 100,
      }),
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
      Pagar con Mercado Pago
    </button>
  );
}