import articles from "@/data/articles";
import { slugify } from "@/utils/slugify";
import { notFound } from "next/navigation";
import Product from "./product";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProductPage({ params }: any) {
  const { slug } = await params;
  const product = articles.find((article) => slugify(article.name) === slug);
  const dictionary = await import(`@/locales/es.json`).then(
    (module) => module.default?.["dynamic-slug"]
  );

  if (!product) return notFound();

  return <Product dictionary={dictionary} product={product} />;
}
