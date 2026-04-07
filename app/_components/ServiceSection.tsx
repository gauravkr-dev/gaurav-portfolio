"use client"
import { motion } from 'framer-motion'
import React from 'react'


const ServiceSection = () => {
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
                <div className='text-[#FF9330] font-bold text-lg mb-6'>Services</div>
                <motion.div
                    variants={{ hidden: { x: -60, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.80, ease: "easeOut" } } }}
                    className="relative flex items-center gap-4 ml-2"
                >
                    <div className='absolute md:h-18 md:w-18 w-12 h-12 rounded-full bg-[#FFB646] -left-4 -top-2 z-0 pointer-events-none' />
                    <h1 className="text-4xl md:text-6xl font-bold text-black-800 relative z-10">
                        My specialties
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
            >
                <motion.div
                    variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 1.25, ease: "easeOut" } } }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'
                >
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.18, ease: "easeOut" }} className='border border-[#FF9330] w-full p-4 rounded-lg  gap-6 flex flex-col hover:bg-[#FF9330]/10 transition duration-300'>
                        <div className='flex items-center justify-between text-orange-500 text-xl font-bold'>
                            <p>Full-Stack Web Development</p>
                        </div>
                        <div>
                            <p>I build complete web applications from start to finish, handling both client-side and server-side logic. My focus is on creating fast, scalable, and reliable solutions that solve real business problems.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.18, ease: "easeOut" }} className='border border-[#FF9330] w-full p-4 rounded-lg  gap-6 flex flex-col hover:bg-[#FF9330]/10 transition duration-300'>
                        <div className='flex items-center justify-between text-orange-500 text-xl font-bold'>
                            <p>Frontend Development (UI/UX)</p>
                        </div>
                        <div>
                            <p>I design and develop responsive and visually appealing user interfaces with a strong focus on usability. Every interface is optimized for smooth interaction and consistent experience across all devices.
                            </p>
                        </div>
                    </motion.div>
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
            >
                <motion.div
                    variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 1.25, ease: "easeOut" } } }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'
                >
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.18, ease: "easeOut" }} className='border border-[#FF9330] w-full p-4 rounded-lg  gap-6 flex flex-col hover:bg-[#FF9330]/10 transition duration-300'>
                        <div className='flex items-center justify-between text-orange-500 text-xl font-bold'>
                            <p>Backend Development & API Integration</p>
                        </div>
                        <div>
                            <p>I develop secure and efficient backend systems that manage data, logic, and integrations. My goal is to ensure smooth performance, structured architecture, and seamless communication within applications.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.18, ease: "easeOut" }} className='border border-[#FF9330] w-full p-4 rounded-lg  gap-6 flex flex-col hover:bg-[#FF9330]/10 transition duration-300'>
                        <div className='flex items-center justify-between text-orange-500 text-xl font-bold'>
                            <p>Website Deployment & Optimization</p>
                        </div>
                        <div>
                            <p>I implement secure authentication systems and handle the complete deployment process. I ensure applications are optimized for performance, stability, and ready for real-world usage.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default ServiceSection
