import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { NavLink } from "./nav-link";

const navItems = [
  { href: "/posts", label: "Posts" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm opacity-0"
      style={{ animation: "fadeInDown 0.4s ease-out forwards" }}
    >
      <nav className="container mx-auto flex max-w-3xl items-center justify-between">
        <div className="transition-transform hover:scale-105 active:scale-95">
          <Link href="/" className="font-serif text-2xl font-bold">
            RM
          </Link>
        </div>

        <ul className="flex items-center gap-6 text-sm font-light sm:gap-10">
          {navItems.map((item, i) => (
            <li
              key={item.href}
              className="opacity-0"
              style={{
                animation: `fadeInDown 0.35s ease-out ${0.1 + i * 0.06}s forwards`,
              }}
            >
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>

        <div
          className="opacity-0"
          style={{ animation: "fadeIn 0.4s ease-out 0.3s forwards" }}
        >
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
