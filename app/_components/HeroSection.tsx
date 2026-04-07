/* eslint-disable @next/next/no-img-element */
import React from 'react'

const HeroSection = () => {
    return (
        <section id="hero" className='bg-[#FFE9D9] h-screen'>
            <div className='px-4 md:px-12'>
                {/* Header */}
                <div className='flex items-center justify-between py-4'>
                    <a href="#hero">
                        <img src="/gaurav_logo21.png" alt="Logo" className='w-12 h-12' />
                    </a>

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
                <div className='grid grid-cols-1 md:grid-cols-2 gap-18 md:gap-12 mt-6 md:mt-2'>
                    {/* Left side */}
                    <div className='flex flex-col justify-center items-start'>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-18 h-[1.2px] bg-black" />
                            <p className="font-bold text-black-800 text-2xl md:text-3xl">
                                Hello, I’m 👋
                            </p>
                        </div>
                        <div className="relative flex items-center gap-4 ml-2">
                            <div className='absolute md:h-28 md:w-28 w-18 h-18 rounded-full bg-[#FFB646] -left-4 -top-2 z-0 pointer-events-none' />
                            <h1 className="text-6xl md:text-8xl font-bold text-black-800 relative z-10">
                                Gaurav
                            </h1>
                        </div>
                        <div className='ml-2'>
                            <h1 className="text-6xl md:text-8xl font-bold text-black-800 ml-2">
                                Kumar
                            </h1>
                        </div>
                        <div>
                            <h2 className="text-xl md:text-3xl font-medium text-gray-800 mt-6">
                                Full-Stack Web Developer | Based in India
                            </h2>
                        </div>

                        <div className='flex flex-row items-center gap-8 mt-12'>
                            <div>
                                <a href="#contact" className='text-lg font-medium hover:text-black hover:bg-transparent border border-black bg-black text-white rounded px-8 py-4 duration-300'>
                                    Hire Me
                                </a>
                            </div>
                            <div>
                                <a href="#projects" className='text-lg font-mediumtext-black bg-transparent border border-black hover:bg-black hover:text-white rounded px-8 py-4 duration-300'>
                                    My Work
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Right side */}
                    <div>
                        <img src="/gaurav.png" alt="Hero Image" className='w-full md:h-[80vh] h-[40vh] object-cover rounded' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
