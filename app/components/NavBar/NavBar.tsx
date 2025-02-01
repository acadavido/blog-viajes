// app/components/NavBar.tsx
import { Link } from "@remix-run/react";

export default function NavBar() {
  return (
    <nav className="bg-[rgb(4,140,140)] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-[rgb(84,132,135)] transition">
            Cadaviaje
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/blog"
              className="hover:text-[rgb(84,132,135)] transition"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/store"
              className="hover:text-[rgb(84,132,135)] transition"
            >
              Tienda
            </Link>
          </li>
          <li>
            <Link
              to="/guides"
              className="hover:text-[rgb(84,132,135)] transition"
            >
              Guías
            </Link>
          </li>
          <li>
            <Link
              to="/sobre-nosotras"
              className="hover:text-[rgb(84,132,135)] transition"
            >
              Sobre nosotras
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
