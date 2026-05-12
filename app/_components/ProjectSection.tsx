/* eslint-disable @next/next/no-img-element */
"use client"
import { ArrowUpRight, Eye } from 'lucide-react'
import React from 'react'
import AnimatedContent from './AnimateVerticleContent'
const ProjectSection = () => {
    return (
        <section id="projects" className='bg-[#FFE9D9] px-4 md:px-12 py-16'>
            <div className='w-full'>
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
                    <div className='text-[#FF9330] font-bold text-lg mb-6'>Portfolio</div>
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
                        className="relative flex items-center gap-4 ml-2"
                    >
                        <div className='absolute md:h-18 md:w-18 w-12 h-12 rounded-full bg-[#FFB646] -left-4 -top-2 z-0 pointer-events-none' />
                        <h1 className="text-4xl md:text-6xl font-bold text-black-800 relative z-10">
                            My Recent Work
                        </h1>
                    </div>
                </AnimatedContent>
            </div>

            <div className='w-full'>
                <div
                    className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'
                >
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
                        delay={0}
                    >
                        <div className=' w-full rounded-lg  gap-6 flex flex-col transition duration-300'>
                            <div className='flex items-center'>
                                <img src="/groundup_pulse.png" alt="GroundUp Pulse" className='w-full h-full object-contain border rounded-lg shadow-sm' />
                            </div>
                            <div className='flex flex-col items-start gap-2'>
                                <div className='flex items-center justify-between flex-row w-full'>
                                    <div className='text-xl font-medium text-orange-500'>GroundUp Pulse</div>
                                    <div className='flex items-center gap-4'>
                                        <a href="https://groundup-pulse.vercel.app/" target="_blank" rel="noopener noreferrer" className=' border rounded-lg px-2 py-0.5 text-sm border-orange-500 hover:bg-orange-500/10 transition duration-300 flex items-center gap-1'>
                                            <Eye className='inline text-orange-500' size={16} />
                                            View
                                        </a>
                                        <a href="https://github.com/gauravkr-dev/GroundUp-Pulse" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className=' text-sm border rounded-lg px-2 py-0.5 border-orange-500 hover:bg-orange-500/10 transition duration-300 flex items-center gap-1'>
                                            <img src="/Github.svg" alt="GitHub" className='h-4 w-4' />
                                            Code
                                        </a>
                                    </div>
                                </div>

                                <p className=''>Connects citizens with authorities for faster issue resolution.</p>
                            </div>
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
                        delay={0.2}
                    >
                        <div className=' w-full rounded-lg  gap-6 flex flex-col transition duration-300'>
                            <div className='flex items-center'>
                                <img src="/BeBetter.png" alt="BeBetter.ai" className='w-full h-full object-contain border rounded-lg shadow-sm' />
                            </div>
                            <div className='flex flex-col items-start gap-2'>
                                <div className='flex items-center justify-between flex-row w-full'>
                                    <div className='text-xl font-medium text-orange-500'>BeBetter.ai</div>
                                    <div className='flex items-center gap-4'>
                                        <a href="https://be-better-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className=' border rounded-lg px-2 py-0.5 text-sm border-orange-500 hover:bg-orange-500/10 transition duration-300 flex items-center gap-1'>
                                            <Eye className='inline text-orange-500' size={16} />
                                            View
                                        </a>
                                        <a href="https://github.com/gauravkr-dev/BeBetter.ai" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className=' text-sm border rounded-lg px-2 py-0.5 border-orange-500 hover:bg-orange-500/10 transition duration-300 flex items-center gap-1'>
                                            <img src="/Github.svg" alt="GitHub" className='h-4 w-4' />
                                            Code
                                        </a>
                                    </div>
                                </div>

                                <p className=''>Intelligent Career Growth Platform</p>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
            <div className='w-full'>
                <div
                    className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'
                >
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
                        delay={0.2}
                    >
                        <div className=' w-full rounded-lg  gap-6 flex flex-col transition duration-300'>
                            <div className='flex items-center'>
                                <img src="/NexFlow.png" alt="NexFlow" className='w-full h-full object-contain border rounded-lg shadow-sm' />
                            </div>
                            <div className='flex flex-col items-start gap-2'>
                                <div className='flex items-center justify-between flex-row w-full'>
                                    <div className='text-xl font-medium text-orange-500'>NexFlow</div>
                                    <div className='flex items-center gap-4'>
                                        <a href="https://nex-flow-five.vercel.app/" target="_blank" rel="noopener noreferrer" className=' border rounded-lg px-2 py-0.5 text-sm border-orange-500 hover:bg-orange-500/10 transition duration-300 flex items-center gap-1'>
                                            <Eye className='inline text-orange-500' size={16} />
                                            View
                                        </a>
                                        <a href="https://github.com/gauravkr-dev/NexFlow" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className=' text-sm border rounded-lg px-2 py-0.5 border-orange-500 hover:bg-orange-500/10 transition duration-300 flex items-center gap-1'>
                                            <img src="/Github.svg" alt="GitHub" className='h-4 w-4' />
                                            Code
                                        </a>
                                    </div>
                                </div>

                                <p className=''>The AI-ready home for team communication.</p>
                            </div>
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
                        <div className=' w-full rounded-lg  gap-6 flex flex-col transition duration-300'>
                            <div className='flex items-center'>
                                <img src="/open_source.png" alt="Open Source" className='w-full h-full object-contain border rounded-lg shadow-sm' />
                            </div>
                            <div className='flex flex-col items-start gap-2'>
                                <div className='flex items-center justify-between flex-row w-full'>
                                    <div className='text-xl font-medium text-orange-500'>Open Source</div>
                                    <div className='flex items-center gap-4'>
                                        <a href="https://github.com/p2plabsxyz/peersky-browser" target="_blank" rel="noopener noreferrer" className=' border rounded-lg px-2 py-0.5 text-sm border-orange-500 hover:bg-orange-500/10 transition duration-300 flex items-center gap-1'>
                                            <Eye className='inline text-orange-500' size={16} />
                                            View
                                        </a>
                                        <a href="https://github.com/p2plabsxyz/peersky-browser" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className=' text-sm border rounded-lg px-2 py-0.5 border-orange-500 hover:bg-orange-500/10 transition duration-300 flex items-center gap-1'>
                                            <img src="/Github.svg" alt="GitHub" className='h-4 w-4' />
                                            Code
                                        </a>
                                    </div>
                                </div>

                                <p className="">
                                    Contributing to open source projects and fostering a collaborative development environment.
                                </p>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
            <div className='w-full'>
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
                    delay={0}
                >
                    <div
                        className='mt-8 items-center justify-center flex mx-auto'
                    >
                        <div className='rounded-lg  gap-6 flex flex-col transition duration-300 text-center'>
                            <a href="https://github.com/gauravkr-dev" target="_blank" rel="noopener noreferrer" className=' border rounded-lg px-2 py-0.5 text-sm border-orange-500 hover:bg-orange-500/10 transition duration-300 flex items-center gap-1'>
                                View More on GitHub
                                <ArrowUpRight className='inline text-orange-500' size={16} />
                            </a>
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    )
}

export default ProjectSection
