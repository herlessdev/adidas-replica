import ClientPage from "./client-page";

export default async function CheckoutPage() {
  const dictionary = await import(`@/locales/es.json`).then(
    (module) => module.default?.["checkout"]
  );
  return <ClientPage dictionary={dictionary} />
}
