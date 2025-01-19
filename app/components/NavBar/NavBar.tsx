// app/components/NavBar.tsx
import { Link } from "@remix-run/react";

export default function NavBar() {
  return (
    <nav className="bg-[#003f5c] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-[#6fbdbf] transition">
            ViajesApp
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/blog" className="hover:text-[#6fbdbf] transition">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/store" className="hover:text-[#6fbdbf] transition">
              Tienda
            </Link>
          </li>
          <li>
            <Link to="/guides" className="hover:text-[#6fbdbf] transition">
              Guías
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#6fbdbf] transition">
              Sobre mí
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
