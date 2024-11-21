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
    <FlowbiteNavbar
      theme={customNavbarTheme(undefined)}
      className={`transition-shadow duration-300 ${
        shadow > scrollThreshold
          ? "shadow-[0_0px_5px_2px_rgba(212,212,212,1)]"
          : ""
      }`}
    >
      {/* <div className='w-[120px]'><Logo /></div> */}
      <Logo />
      <FlowbiteNavbar.Collapse>
        <div className="flex flex-row gap-x-16">
          {navbarList.map((page) => (
            <FlowbiteNavbar.Link as={Link} href={page.link} key={page.name}>
              <Typography
                customClassName={`hover:border-primary-400 hover:border-b-2  text-base ${
                  pathname === page.link ? "border-b-2 border-primary-700" : ""
                }`}
                color="dark"
              >
                {page.name}
              </Typography>
            </FlowbiteNavbar.Link>
          ))}
        </div>
      </FlowbiteNavbar.Collapse>
      <Button size="s" color="primary" href="/connexion">
        Connexion
      </Button>
    </FlowbiteNavbar>
  );
};
