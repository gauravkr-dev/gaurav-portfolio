"use client";
import { ThemeToggleButton } from '@/components/theme'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CommandSearchWrapper from './CommandSearch'
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <div className={`fixed top-0 left-0 right-0 z-50 max-w-4xl mx-auto ${scrolled ? 'bg-background backdrop-blur-sm' : ''}`}>
            <div className="flex items-center justify-between py-4 max-w-4xl mx-auto px-3">
                <div className="flex items-center gap-4">
                    {/* <a href="#home" className="text-2xl font-bold mr-1 md:mr-6" aria-label="Gaurav Kumar">GK</a> */}
                    <Link href="/" className="text-2xl font-bold mr-1 md:mr-6" aria-label="Gaurav Kumar">
                        <Image src="/gaurav_logo21.png" alt="Gaurav Kumar" width={38} height={38} className="rounded-full text-orange-500" />
                    </Link>
                    <Link href="/projects" className="text-muted-foreground hover:text-foreground duration-200" aria-label="Gaurav Kumar">Projects</Link>
                    <Link href="/#contact" className="text-muted-foreground hover:text-foreground duration-200" aria-label="Gaurav Kumar">Contact</Link>
                    <Link href="/blogs" className="text-muted-foreground hover:text-foreground duration-200" aria-label="Gaurav Kumar">Blogs</Link>
                </div>
                <div className="flex items-center">
                    <div>
                        <CommandSearchWrapper />
                    </div>
                    <div>
                        <ThemeToggleButton />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
