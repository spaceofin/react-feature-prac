import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-gray-200 px-16 py-6 text-2xl font-bold">
      <nav className="flex gap-12">
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}
