"use client"
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

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
                            <a href="#resume" >Resume</a>
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
                    <motion.div
                        variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.12 } },
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className='flex flex-col justify-center items-start'
                    >
                        <motion.div
                            variants={{ hidden: { x: -40, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } } }}
                            className="flex items-center gap-4 mb-4"
                        >
                            <div className="w-18 h-[1.2px] bg-black" />
                            <p className="font-bold text-black-800 text-2xl md:text-3xl">
                                Hello, I’m 👋
                            </p>
                        </motion.div>

                        <motion.div
                            variants={{ hidden: { x: -60, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" } } }}
                            className="relative flex items-center gap-4 ml-2"
                        >
                            <div className='absolute md:h-28 md:w-28 w-18 h-18 rounded-full bg-[#FFB646] -left-4 -top-2 z-0 pointer-events-none' />
                            <h1 className="text-6xl md:text-8xl font-bold text-black-800 relative z-10">
                                Gaurav
                            </h1>
                        </motion.div>

                        <motion.div
                            variants={{ hidden: { x: -60, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" } } }}
                            className='ml-2'
                        >
                            <h1 className="text-6xl md:text-8xl font-bold text-black-800 ml-2">
                                Kumar
                            </h1>
                        </motion.div>

                        <motion.div
                            variants={{ hidden: { x: -40, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } } }}
                            className='mt-4'
                        >
                            <h2 className="text-xl md:text-3xl font-medium text-gray-800 mt-4">
                                Full-Stack Web Developer | Based in India
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } } }}
                            className='flex flex-row items-center gap-8 mt-12'
                        >
                            <div>
                                <a href="#contact" className='text-lg font-medium bg-[#FFB646] border border-black rounded px-8 py-4 hover:bg-[#FFB646]/40'>
                                    Hire Me
                                    <ArrowUpRight className='ml-1 inline text-orange-500' size={18} />
                                </a>
                            </div>
                            <div>
                                <a href="#projects" className='text-lg font-medium text-black bg-transparent border border-black hover:bg-[#FFB646]/40 rounded px-8 py-4 duration-300'>
                                    My Work
                                    <ArrowUpRight className='ml-1 inline text-orange-500' size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                    {/* Right side */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <motion.img src="/gaurav.png" alt="Hero Image" className='w-full md:h-[80vh] h-[40vh] object-cover rounded' initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.25 }} />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
