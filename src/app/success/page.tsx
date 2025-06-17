"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type PaymentData = {
  id: string;
  status: string;
  transaction_amount: number;
  payment_method_id: string;
  payer: {
    email: string;
  };
};

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");

  const [payment, setPayment] = useState<PaymentData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPayment = async () => {
      if (!paymentId) return;

      try {
        const res = await fetch(`/api/mercadopago/payment/${paymentId}`);
        if (!res.ok) throw new Error("No se pudo obtener el resumen.");
        const data = await res.json();
        setPayment(data);
      } catch (err) {
        console.error(err);
        setError("Hubo un error al obtener el resumen del pago.");
      }
    };

    fetchPayment();
  }, [paymentId]);

  if (error) return <p>{error}</p>;
  if (!payment) return <p>Cargando resumen del pago...</p>;

  return (
    <section className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold text-green-600 mb-4">
        ✅ ¡Pago realizado con éxito!
      </h1>
      <ul className="space-y-2 text-gray-800">
        <li><strong>ID de Pago:</strong> {payment.id}</li>
        <li><strong>Estado:</strong> {payment.status}</li>
        <li><strong>Monto:</strong> S/ {payment.transaction_amount.toFixed(2)}</li>
        <li><strong>Método de pago:</strong> {payment.payment_method_id}</li>
        <li><strong>Email del comprador:</strong> {payment.payer.email}</li>
      </ul>
    </section>
  );
};

export default SuccessPage;
