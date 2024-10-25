"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
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
          <div className="flex-shrink-0">
            <a href="#">
              <img
                src="/image/logo.png"
                alt="Logo"
                className="h-16 w-16"
              />
            </a>
          </div>

          <div className="flex-grow">
            <Menu setActive={setActive} >
              <a href="#about">A propos</a>
              <a href="#truc">Produits</a>
              <MenuItem setActive={setActive} active={active} item="Tutoriel">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Habillement"
                    href="#"
                    src="/image/clothes.jpg"
                    description="Craquez pour la douceur du crochet, pour un look incomparable."
                  />
                  <ProductItem
                    title="Raphia"
                    href="#"
                    src="/image/raphia.jpg"
                    description="Adoptez la tendance raphia crocheté et soyez éco-responsable."
                  />
                  <ProductItem
                    title="Decoration"
                    href="#"
                    src="/image/deco.jpg"
                    description="Apportez une touche chaleureuse et artisanale à votre intérieur."
                  />
                  <ProductItem
                    title="Peluche"
                    href="#"
                    src="/image/peluche.png"
                    description="Craquez pour nos adorables peluches en crochet, douces et faites main."
                  />
                </div>
              </MenuItem>
            </Menu>
          </div>

          <div className="flex-shrink-0">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
              <a href="#contact">Contacter </a>
            </button>
          </div>
        </nav>
      )}
    </>

  );
}
