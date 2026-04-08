/* eslint-disable @next/next/no-img-element */
"use client"
import { motion } from 'framer-motion'
import React from 'react'

const EducationSection = () => {
    return (
        <section id="services" className='bg-white px-4 md:px-12 py-16'>
            <motion.div
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.12 } },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <div className='text-[#FF9330] font-bold text-lg mb-6'>Education</div>
                <motion.div
                    variants={{ hidden: { x: -60, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.80, ease: "easeOut" } } }}
                    className="relative flex items-center gap-4 ml-2"
                >
                    <div className='absolute md:h-18 md:w-18 w-12 h-12 rounded-full bg-[#FFB646] -left-4 -top-2 z-0 pointer-events-none' />
                    <h1 className="text-4xl md:text-6xl font-bold text-black-800 relative z-10">
                        My Education
                    </h1>
                </motion.div>
            </motion.div>

            <motion.div
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.12 } },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className='grid grid-cols-1 md:grid-cols-2 md:gap-6'
            >
                <motion.div
                    variants={{ hidden: { x: -60, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.80, ease: "easeOut" } } }}
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
                </motion.div>
                <motion.div
                    variants={{ hidden: { x: 60, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.80, ease: "easeOut" } } }}
                    className="flex gap-2 mt-12 flex-col border rounded-lg p-4 bg-gray-50 border-orange-500 transition duration-300"
                >
                    <div className='flex items-center gap-4'>
                        <img src="/kls_college.png" alt="KLS College" className='w-16 h-16 object-contain rounded-full' />
                        <div className='flex flex-col gap-1'>
                            <p className='text-xl font-medium'>KLS College Nawada, Bihar</p>
                            <p className=''>Mathematics and Science</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 justify-end'>
                        <p>(2022 - 2024)</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default EducationSection
