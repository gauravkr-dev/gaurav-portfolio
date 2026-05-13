"use client"
/* eslint-disable @next/next/no-img-element */
import { Send } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import AnimatedContent from './AnimateVerticleContent'

const HeroSection = () => {
    return (
        <section id="hero" className='bg-[#FFE9D9] h-screen overflow-hidden'>
            <div className='px-4 md:px-12'>
                {/* Header */}
                <div className='flex items-center justify-between py-4'>
                    <Link href="/">
                        <img src="/gaurav_logo21.png" alt="Logo" className='w-12 h-12' />
                    </Link>

                    <div className='flex space-x-4 text-gray-800'>
                        <div className='text-black text-sm hover:text-orange-600'>
                            <a href="/gaurav_resume.pdf" target="_blank" rel="noopener noreferrer">
                                Resume
                            </a>
                        </div>

                        <span className='text-black text-sm'>|</span>

                        <div className='text-black text-sm hover:text-orange-600'>
                            <a href="#projects" >Projects</a>
                        </div>

                        <span className='text-black text-sm'>|</span>

                        <div className='text-black text-sm hover:text-orange-600'>
                            <a href="#contact" >Contact</a>
                        </div>

                    </div>
                </div>

                {/* Main Content */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-18 md:gap-0 mt-6 md:mt-2'>
                    {/* Left side (staggered children) */}
                    <div
                        className='flex flex-col justify-center items-start'
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
                                className="flex items-center gap-4 mb-4"
                            >
                                <div className="w-18 h-[1.2px] bg-black" />
                                <p className="font-bold text-black-800 text-2xl md:text-3xl">
                                    Hello, I’m 👋
                                </p>
                            </div>

                        </AnimatedContent>

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
                            delay={0.1}
                        >
                            <div
                                className="relative flex items-center gap-4 ml-2"
                            >
                                <div className='absolute md:h-28 md:w-28 w-18 h-18 rounded-full bg-[#FFB646] -left-4 -top-2 z-0 pointer-events-none' />
                                <h1 className="text-6xl md:text-8xl font-bold text-black-800 relative z-10">
                                    Gaurav
                                </h1>
                            </div>
                        </AnimatedContent>


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
                            delay={0.2}
                        >
                            <div
                                className='ml-2'
                            >
                                <h1 className="text-6xl md:text-8xl font-bold text-black-800 ml-2">
                                    Kumar
                                </h1>
                            </div>
                        </AnimatedContent>

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
                            delay={0.3}
                        >
                            <div
                                className='mt-4'
                            >
                                <h2 className="text-xl md:text-3xl font-medium text-gray-800 mt-4">
                                    Full-Stack Web Developer | Based in India
                                </h2>
                            </div>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            duration={0.8}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0.4}
                        >
                            <div
                                className='flex flex-row items-center gap-8 w-full mt-12'
                            >
                                <div>
                                    <a href="https://cal.com/gaurav-kumar-dev/web-development-consultation" target="_blank" rel="noopener noreferrer" className='text-lg font-medium bg-[#FFB646] border border-black rounded px-8 py-4 hover:bg-[#FFB646]/40'>
                                        Book a Free Consultation
                                        <Send className='ml-2 inline text-orange-500' size={18} />
                                    </a>
                                </div>

                            </div>
                        </AnimatedContent>
                    </div>
                    {/* Right side */}
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
                        >
                            <img src="/gaurav.png" alt="Hero Image" className='w-full md:h-[80vh] h-auto object-cover rounded' />
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
