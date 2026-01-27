"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'INÍCIO', href: '/' },
        { name: 'SOBRE NÓS', href: '/sobre' },
        { name: 'SERVIÇOS', href: '/servicos' },
        { name: 'BLOG', href: '/blog' },
        { name: 'CONTATO', href: '/#contato' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-[#0B1120] border-b border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-24 items-center justify-between">
                    <div className="flex items-center shrink-0">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-32 h-12">
                                <Image
                                    src="/assets/logo.png"
                                    alt="PPDiniz Consultoria"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Centered & Styled */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-12 mx-auto">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-serif font-medium tracking-wide text-gray-300 hover:text-[#D4AF37] transition-colors uppercase"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Spacer to balance the layout since we centered nav manually or we can use justify-center on nav if we change flex structure */}
                    <div className="hidden md:block w-32" />


                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-muted-foreground hover:text-primary"
                        >
                            <span className="sr-only">Abrir menu</span>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-border">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-base font-medium text-foreground hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Button className="w-full">Fale Conosco</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
