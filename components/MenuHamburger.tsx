"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { IconMenu4, IconX } from "@tabler/icons-react";

export function HamburgerMenu() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2 border rounded-full" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isServicesOpen, setServicesOpen] = useState(false);
    const [isProductsOpen, setProductsOpen] = useState(false);
    const [isPricingOpen, setPricingOpen] = useState(false);

    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-4xl mx-auto z-50 rounded-full flex items-center justify-between px-4",
                className
            )}
            style={{ borderColor: '#FFFFFF00' }}
        >
            {/* Section pour le logo à gauche */}
            <div className="flex-shrink-0">
            </div>

            {/* Menu pour les grands écrans */}
            <div className="hidden md:flex flex-grow justify-center">
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

            {/* Bouton Contacter pour les grands écrans */}
            <div className="hidden md:block flex-shrink-0">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
                    Contacter
                </button>
            </div>

            {/* Menu Hamburger pour les petits écrans */}
            <div className="md:hidden flex-shrink-0">
                <button
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    className="bg-pink-500 text-white p-2 rounded-full"
                >
                    {isMobileMenuOpen ? (
                        <IconX className="h-6 w-6" />
                    ) : (
                        <IconMenu4 className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Menu mobile */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 inset-x-0 bg-white border rounded-lg shadow-lg p-4">
                    <div className="flex flex-col space-y-4">
                        {/* Logo dans le menu mobile */}
                        <div className="flex-shrink-0">
                            <img
                                src="/image/logo.png"
                                alt="Logo"
                                className="h-16 w-16 mx-auto"
                            />
                        </div>

                        <a href="#about">A propos</a>
                        <a href="#truc">Produits</a>

                        {/* Sous-menu Pricing */}
                        <button
                            onClick={() => setPricingOpen(!isPricingOpen)}
                            className="text-left text-sm"
                        >
                            Tutoriel {isPricingOpen ? "-" : "+"}
                        </button>
                        {isPricingOpen && (
                            <div className="flex flex-col space-y-2 ml-4 text-sm">
                                <HoveredLink href="#">Habillement</HoveredLink>
                                <HoveredLink href="#">Raphia</HoveredLink>
                                <HoveredLink href="#">Decoration</HoveredLink>
                                <HoveredLink href="#">Peluche</HoveredLink>
                            </div>
                        )}

                        {/* Bouton Contacter dans le menu mobile */}
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-full mt-4">
                            Contacter
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
