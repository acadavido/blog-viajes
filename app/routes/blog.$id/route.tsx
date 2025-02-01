import { useLoaderData } from "@remix-run/react";
import blogs from "~/blogs";

export const loader = async ({ params }: { params: { id: string } }) => {
  const blog = blogs.find((b) => b.id === params.id);
  if (!blog) {
    throw new Response("Not Found", { status: 404 });
  }
  return blog;
};

export default function Blog() {
  const { image, title, text, recommendations, price } =
    useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto py-12 px-4 lg:px-8">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">
        {title}
      </h1>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Imagen destacada */}
        <img className="w-full h-96 object-cover" src={image} alt={title} />

        {/* Contenido */}
        <div className="p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <div
            className="text-lg text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: text }}
          />

          {/* Sección de recomendaciones */}
          {recommendations && recommendations.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800">
                Recomendaciones
              </h3>
              <ul className="mt-4 space-y-2">
                {recommendations.map((rec: string, index: number) => (
                  <li
                    key={index}
                    className="bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition duration-200"
                  >
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sección de precios */}
          {price && (
            <div className="mt-8 p-6 bg-blue-100 rounded-lg text-blue-900 shadow-md">
              <h3 className="text-2xl font-bold">Costo estimado</h3>
              <p className="text-lg mt-2 font-semibold">{price}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
