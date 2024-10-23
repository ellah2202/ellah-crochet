"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useWindowSize } from "./UseWindowsSize";
import { HamburgerMenu } from "./MenuHamburger";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 border rounded-full" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { width = 0 } = useWindowSize();
  return (
    <>
      {width < 700 ? (
        <HamburgerMenu />
      ) : (
        <nav
          className={cn(
            "fixed top-10 inset-x-0 max-w-4xl mx-auto z-50 border rounded-full flex items-center justify-between px-4 bg-white",
            className
          )}
          style={{ borderColor: '#f997ea' }}
        >
          {/* Section pour le logo à gauche */}
          <div className="flex-shrink-0">
            <img
              src="/image/logo.png"
              alt="Logo"
              className="h-16 w-16"
            />
          </div>

          {/* Menu centré */}
          <div className="flex-grow">
            <Menu setActive={setActive} >
              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                  <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Products">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Algochurn"
                    href="#"
                    src="/image/img_cover.png"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="Algochurn"
                    href="#"
                    src="/image/img_cover.png"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="Algochurn"
                    href="#"
                    src="/image/img_cover.png"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="Algochurn"
                    href="#"
                    src="/image/img_cover.png"
                    description="Prepare for tech interviews like never before."
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Pricing">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/hobby">Hobby</HoveredLink>
                  <HoveredLink href="/individual">Individual</HoveredLink>
                  <HoveredLink href="/team">Team</HoveredLink>
                  <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>

          {/* Bouton Contacter à droite */}
          <div className="flex-shrink-0">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
              Contacter
            </button>
          </div>
        </nav>
      )}
    </>

  );
}
