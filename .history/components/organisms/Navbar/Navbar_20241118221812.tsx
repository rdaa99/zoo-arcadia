"use client"; // Ajouter cette directive au début du fichier
import { Navbar as FlowbiteNavbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { Logo } from "@/components/atoms/Logo";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/molecules/Button";

import { customNavbarTheme } from "./theme";

export const Navbar = () => {
  const pathname = usePathname();
  const [shadow, setShadow] = useState<number>(0);
  const scrollThreshold = 50;

  const navbarList = [
    { name: "Accueil", link: "/" },
    { name: "Services", link: "/service" },
    { name: "Habitats", link: "/habitat" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-green-600 fixed w-full z-20 top-0 start-0 border-b border-brown-500 ${
        shadow > scrollThreshold ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Nature Navbar
        </span>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-green-500 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-green-600">
            {navbarList.map((page) => (
              <li key={page.name}>
                <a
                  href={page.link}
                  className={`block py-2 px-3 rounded ${
                    pathname === page.link
                      ? "text-white bg-blue-700"
                      : "text-gray-900 hover:bg-green-400"
                  } md:p-0 md:dark:text-blue-500 dark:text-white`}
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
