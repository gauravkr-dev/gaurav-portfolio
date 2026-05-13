"use client"

import AnimatedContent from "./AnimateVerticleContent";

/* eslint-disable @next/next/no-img-element */

const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#how-i-work", label: "How I Work" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#education", label: "Education" },
];


export function Footer() {
    return (
        <section id="footer" className='bg-[#FFE9D9] px-4 md:px-12 overflow-hidden'>
            <footer className="w-full">
                <div className="flex flex-col gap-6 py-6">
                    <div
                        className="flex items-center justify-between"
                    >
                        <AnimatedContent
                            distance={-100}
                            direction="horizontal"
                            reverse={false}
                            duration={0.8}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <div
                                className="flex items-center gap-2">
                                <img src="/gaurav_logo21.png" alt="Gaurav" className="h-12 w-12" />
                            </div>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={100}
                            direction="horizontal"
                            reverse={false}
                            duration={0.8}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >

                            <div
                                className="relative flex items-center gap-4 ml-2"
                            >
                                <div className='absolute md:h-12 md:w-12 w-8 h-8 rounded-full bg-[#FFB646] -left-4 -top-1 z-0 pointer-events-none' />
                                <h1 className="text-2xl md:text-4xl font-bold text-black-800 relative z-10">
                                    Let&apos;s work together
                                </h1>
                            </div>
                        </AnimatedContent>
                    </div>

                    <nav>
                        <ul className="flex flex-wrap gap-4 font-medium  text-sm md:gap-6">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a className="text-black hover:text-orange-500" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-black py-4 text-sm">
                    <p className="text-black">&copy; {new Date().getFullYear()} Gaurav</p>

                    <p className="inline-flex items-center gap-1 text-black">
                        <span>Built by</span>
                        <a
                            aria-label="Gaurav's Portfolio"
                            className="inline-flex items-center gap-1 text-black hover:text-orange-500 hover:underline"
                            href={"https://gauravkr-dev.vercel.app/"}
                        >
                            <img
                                alt="Gaurav"
                                className="size-4 rounded-full"
                                height="auto"
                                src="https://avatars.githubusercontent.com/u/232183048?v=4"
                                width="auto"
                            />
                            Gaurav
                        </a>
                    </p>
                </div>
            </footer>
        </section>

    );
}
