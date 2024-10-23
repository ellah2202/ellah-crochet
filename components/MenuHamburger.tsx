'use client'

import { useState } from 'react'
import { Menu, X, Plus, Minus } from 'lucide-react'

export function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSelectorOpen, setIsSelectorOpen] = useState(false)

    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {isOpen && (
                <div className="absolute top-16 right-0 w-48 bg-background border border-border rounded-md shadow-lg p-4 transition-all duration-300 ease-in-out">
                    <nav>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-muted rounded-md">Option 1</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-muted rounded-md">Option 2</a>
                            </li>
                            <li>
                                <div className="relative">
                                    <button
                                        onClick={() => setIsSelectorOpen(!isSelectorOpen)}
                                        className="flex items-center justify-between w-full py-2 px-4 hover:bg-muted rounded-md"
                                        aria-expanded={isSelectorOpen}
                                    >
                                        <span>Selector</span>
                                        {isSelectorOpen ? (
                                            <Minus className="w-4 h-4" />
                                        ) : (
                                            <Plus className="w-4 h-4" />
                                        )}
                                    </button>
                                    {isSelectorOpen && (
                                        <ul className="mt-2 ml-4 space-y-2">
                                            <li>
                                                <a href="#" className="block py-1 px-4 hover:bg-muted rounded-md">Sub-option 1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-1 px-4 hover:bg-muted rounded-md">Sub-option 2</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-1 px-4 hover:bg-muted rounded-md">Sub-option 3</a>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    )
}