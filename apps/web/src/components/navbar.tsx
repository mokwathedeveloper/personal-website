import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Portfolio
        </Link>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/projects" className="hover:text-primary">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
