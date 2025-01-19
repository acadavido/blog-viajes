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
  const { image, title, description } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <img
          className="w-full h-64 object-cover rounded-t-lg"
          src={image}
          alt={title}
        />
        <div className="py-4">
          <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
          <div className="mt-6 text-black">{description}</div>
        </div>
      </div>
    </div>
  );
}
