// Front-end frameworks (React)
// https://docs.astro.build/en/guides/framework-components/
import React from "react";
import { cn } from "@/lib/cn";

interface Props {
  pathname: string;
}

const NavBar = ({ pathname }: Props) => {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/clientes/pagina/1", label: "Clientes" },
    { href: "/island", label: "Islas" },
  ];

  return (
    <nav className="w-full border-b border-waikawa-gray-200">
      <ul className="flex items-center gap-4">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm text-waikawa-gray-600 hover:text-waikawa-gray-900",
                  isActive && "font-medium text-waikawa-gray-900 underline",
                )}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
