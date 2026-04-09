"use client"
import React from 'react'
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section id="about" className='bg-white px-4 md:px-12 py-16 overflow-hidden'>
            <motion.div
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.12 } },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <div className='text-[#FF9330] font-bold text-lg mb-6'>About</div>
                <motion.div
                    variants={{ hidden: { x: -60, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.80, ease: "easeOut" } } }}
                    className="relative flex items-center gap-4 ml-2"
                >
                    <div className='absolute md:h-18 md:w-18 w-12 h-12 rounded-full bg-[#FFB646] -left-4 -top-2 z-0 pointer-events-none' />
                    <h1 className="text-4xl md:text-6xl font-bold text-black-800 relative z-10">
                        Get to Know Me
                    </h1>
                </motion.div>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Left side */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.25 }}
                    className='w-full h-auto'
                >
                    <motion.img src="/About.svg" alt="About Image" className="w-full h-auto max-w-full" initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.25 }} />
                </motion.div>
                {/* Right side */}
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
                        variants={{ hidden: { x: 60, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" } } }}
                        className="relative flex items-center gap-4"
                    >
                        {/* <div className='absolute md:h-16 md:w-16 w-12 h-12 rounded-full bg-[#FFB646] -left-7 -top-3 z-0 pointer-events-none' /> */}
                        <h1 className="text-2xl md:text-3xl font-medium text-black-800 relative z-10">
                            Full Stack Web Developer
                        </h1>
                    </motion.div>


                    <motion.div
                        variants={{ hidden: { x: 40, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } } }}
                        className='mt-4'
                    >
                        <h2 className="text-lg md:text-xl text-gray-800 mt-4">
                            I’m Gaurav, a passionate full-stack developer focused on building modern, scalable, and user-friendly web applications. I enjoy turning complex ideas into simple, real-world solutions that people actually love to use.
                        </h2>
                    </motion.div>
                    <motion.div
                        variants={{ hidden: { x: 40, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } } }}
                        className=''
                    >
                        <h2 className="text-lg md:text-xl text-gray-800 mt-4">
                            I work across both frontend and backend, creating seamless digital experiences with clean design and efficient performance. My approach is not just about writing code, but about solving problems and delivering value through technology.
                        </h2>
                    </motion.div>
                    <motion.div
                        variants={{ hidden: { x: 40, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } } }}
                        className=''
                    >
                        <h2 className="text-lg md:text-xl text-gray-800 mt-4">
                            I’m constantly learning and exploring new technologies to stay ahead and improve my craft. My goal is to build impactful products and collaborate on ideas that make a difference.
                        </h2>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.12 } },
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className='justify-end flex w-full items-center'
                    >
                        <motion.div
                            variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 1.25, ease: "easeOut" } } }}
                            className='mt-4'
                        >
                            <motion.div transition={{ duration: 0.18, ease: "easeOut" }} className='rounded-lg  gap-6 flex flex-col transition duration-300 text-center'>
                                <p className='text-lg text-orange-500 flex items-center gap-1'>
                                    1.5+ years of experience
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutSection
