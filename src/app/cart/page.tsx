import CartClient from "./cart";

export default async function Car() {
  const dictionary = await import(`@/locales/es.json`).then(
    (module) => module.default?.car
  );

  return (
    <CartClient dictionary={dictionary} />
  );
}
