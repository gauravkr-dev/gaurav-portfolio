/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import AnimatedContent from './AnimateVerticleContent'

const EducationSection = () => {
    return (
        <section id="education" className='bg-[#FFE9D9] px-4 md:px-12 py-16'>
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
                    <div className='text-[#FF9330] font-bold text-lg mb-6'>Education</div>
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
                            My Education
                        </h1>
                    </div>
                </AnimatedContent>
            </div>

            <div
            >
                <div
                    className='grid grid-cols-1 md:grid-cols-2 md:gap-6'
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
                        delay={0.3}
                    >
                        <div
                            className="flex gap-2 mt-12 flex-col border rounded-lg p-4 bg-gray-50 border-orange-500 transition duration-300"
                        >
                            <div className='flex items-center gap-4'>
                                <img src="/iit_guwahati.png" alt="IIT Guwahati" className='w-16 h-16 object-contain' />
                                <div className='flex flex-col gap-1'>
                                    <p className='text-xl font-medium'>Indian Institute of Technology, Guwahati</p>
                                    <p className='hidden md:block'>Bachelor in Data Science and Artificial Intelligence</p>
                                </div>
                            </div>
                            <div>
                                <p className='md:hidden'>Bachelor in Data Science and Artificial Intelligence</p>
                            </div>
                            <div className='flex items-center gap-4 justify-end'>
                                <p>(2025 - Present)</p>
                            </div>
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
                        delay={0.5}
                    >
                        <div
                            className="flex gap-2 mt-12 flex-col border rounded-lg p-4 bg-gray-50 border-orange-500 transition duration-300"
                        >
                            <div className='flex items-center gap-4'>
                                <img src="/kls_college.png" alt="KLS College" className='w-16 h-16 object-contain rounded-full' />
                                <div className='flex flex-col gap-1'>
                                    <p className='text-xl font-medium'>KLS College Nawada, Bihar</p>
                                    <p className=''>Mathematics and Science</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 justify-end mt-2'>
                                <p>(2022 - 2024)</p>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    )
}

export default EducationSection
