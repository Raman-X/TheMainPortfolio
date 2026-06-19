"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "relative transition-colors hover:text-foreground",
        isActive ? "text-foreground font-medium" : "text-muted-foreground",
        className,
      )}
    >
      {children}
      <span
        className={cn(
          "absolute -bottom-1 left-0 h-px bg-foreground/60 transition-all duration-300",
          isActive ? "w-full" : "w-0",
        )}
      />
    </Link>
  );
}
