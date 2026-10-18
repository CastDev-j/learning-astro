import { cn } from "@/lib/cn";
import React, { type FC } from "react";

interface config {
  pathname: string;
}
const NavBar: FC<config> = ({ pathname }) => {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/clientes/pagina/1", label: "Clientes" },
    { href: "/island", label: "Islas" },
  ];

  return (
    <header className={cn("w-full flex justify-center my-4")}>
      <nav>
        <ul className="flex gap-6 flex-wrap justify-center">
          {links.map((link) => (
            <li key={link.href} className="list-none">
              <a
                className={cn(
                  "text-xl px-5 py-3 border-b-2 transition-colors hover:border-b-waikawa-gray-700 hover:text-waikawa-gray-700",
                  link.href === pathname
                    ? "border-b-waikawa-gray-700 text-waikawa-gray-700"
                    : "border-transparent",
                )}
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
