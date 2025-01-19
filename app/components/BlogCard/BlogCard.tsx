import { Link } from "@remix-run/react";
import { BlogDto } from "./Blog.dto";



export default function BlogCard({ id, image, title, description }: BlogDto) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
      <div className="px-6 py-2">
        <button className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold">
          <Link to={`/blog/${id}`}>Leer más</Link>
        </button>
      </div>
    </div>
  );
}
