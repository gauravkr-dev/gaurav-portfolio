/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import AnimatedContent from './AnimateVerticleContent';

const AboutSection = () => {
    return (
        <section id="about" className='bg-white px-4 md:px-12 py-16 overflow-hidden'>
            <div
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
                    <div className='text-[#FF9330] font-bold text-lg mb-6'>About</div>
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
                        <div className='absolute md:h-18 md:w-18 w-12 h-12 rounded-full bg-[#FFB646] -left-4 -top-2 z-0 pointer-events-none' />
                        <h1 className="text-4xl md:text-6xl font-bold text-black-800 relative z-10">
                            Get to Know Me
                        </h1>
                    </div>
                </AnimatedContent>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Left side */}
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
                    <div className='w-full h-auto'>
                        <img src="/About.svg" alt="About Image" className="w-full h-auto max-w-full" />
                    </div>
                </AnimatedContent>
                {/* Right side */}
                <div
                    className='flex flex-col justify-center items-start'
                >
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
                        delay={0.3}
                    >

                        <div
                            className="relative flex items-center gap-4"
                        >
                            {/* <div className='absolute md:h-16 md:w-16 w-12 h-12 rounded-full bg-[#FFB646] -left-7 -top-3 z-0 pointer-events-none' /> */}
                            <h1 className="text-2xl md:text-3xl font-medium text-black-800 relative z-10">
                                Full Stack Web Developer
                            </h1>
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
                        delay={0.4}
                    >
                        <div
                            className='mt-4'
                        >
                            <h2 className="text-lg md:text-xl text-gray-800 mt-4">
                                I’m Gaurav, a passionate full-stack developer focused on building modern, scalable, and user-friendly web applications. I enjoy turning complex ideas into simple, real-world solutions that people actually love to use.
                            </h2>
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
                        delay={0.4}
                    >
                        <div
                            className=''
                        >
                            <h2 className="text-lg md:text-xl text-gray-800 mt-4">
                                I work across both frontend and backend, creating seamless digital experiences with clean design and efficient performance. My approach is not just about writing code, but about solving problems and delivering value through technology.
                            </h2>
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
                        delay={0.4}
                    >
                        <div
                            className=''
                        >
                            <h2 className="text-lg md:text-xl text-gray-800 mt-4">
                                I’m constantly learning and exploring new technologies to stay ahead and improve my craft. My goal is to build impactful products and collaborate on ideas that make a difference.
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
                            className='justify-end flex w-full items-center md:justify-end'
                        >
                            <div
                                className='mt-4 md:text-right'
                            >
                                <div className='rounded-lg  gap-6 flex flex-col transition duration-300 text-center'>
                                    <p className='text-lg text-orange-500 flex items-center gap-1'>
                                        1.5+ years of experience
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
