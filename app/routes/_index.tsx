import type { MetaFunction } from "@remix-run/node";
import GenericSlider from "~/components/GenericSlider/GenericSlider";
import blogs from "~/blogs"
// Meta tags
export const meta: MetaFunction = () => {
  return [
    { title: "Blog de Viajes" },
    {
      name: "description",
      content: "Descubre los mejores artículos sobre viajes, guías y destinos.",
    },
  ];
};


export const loader = () => ({ blogs });
export default function Index() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Artículos Destacados
      </h1>
      <h1 className="text-2xl font-bold text-center my-8">Featured Blogs</h1>
      <GenericSlider items={blogs} />
    </main>
  );
}
