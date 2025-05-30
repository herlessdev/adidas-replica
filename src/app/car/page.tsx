import CarClient from "./car";

export default async function Car() {
  const dictionary = await import(`@/locales/es.json`).then(
    (module) => module.default?.car
  );

  return (
    <CarClient dictionary={dictionary} />
  );
}
