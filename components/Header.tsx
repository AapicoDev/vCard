import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            vCard Generator
          </Link>
          <div>
            <Link
              href="/about"
              className="text-gray-300 hover:text-lime-400 mx-3"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-lime-400 mx-3"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
