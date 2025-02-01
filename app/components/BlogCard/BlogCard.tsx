import { Link } from "@remix-run/react";
import { BlogDto } from "./Blog.dto";



export default function BlogCard({ id, image, title, description }: BlogDto) {
  return (
    <div className="max-w-xs rounded-2xl overflow-hidden shadow-md bg-gray-50 border border-gray-200">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-700 text-sm mt-2">{description}</p>
      </div>
      <div className="px-6 py-2">
        <button className="text-indigo-500 hover:text-indigo-700 text-sm font-semibold">
          <Link to={`/blog/${id}`}>Leer más</Link>
        </button>
      </div>
    </div>
  );
}
