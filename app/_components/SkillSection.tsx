/* eslint-disable @next/next/no-img-element */
"use client"
import { motion } from 'framer-motion'
import React from 'react'

const skills = [
    // Languages 
    { name: "JavaScript", slug: "javascript", category: "Language" },
    { name: "TypeScript", slug: "typescript", category: "Language" },
    { name: "Python", slug: "python", category: "Language" },
    { name: "C++", slug: "cplusplus", category: "Language" },
    { name: "C#", slug: "csharp", category: "Language" },

    // Frontend Skills
    { name: "HTML", slug: "html5", category: "Frontend" },
    { name: "CSS", slug: "css3", category: "Frontend" },
    { name: "React", slug: "react", category: "Frontend" },
    { name: "Next.js", slug: "nextjs", category: "Frontend" },
    { name: "Tailwind CSS", slug: "tailwindcss", category: "Frontend" },

    // Backend Skills
    { name: "Node.js", slug: "nodejs", category: "Backend" },
    { name: "Express.js", slug: "express", category: "Backend" },
    { name: "MongoDB", slug: "mongodb", category: "Backend" },
    { name: "Next.js", slug: "nextjs", category: "Backend" },
    { name: "PostgreSQL", slug: "postgresql", category: "Backend" },
    { name: "Firebase", slug: "firebase", category: "Backend" },
    { name: "Supabase", slug: "supabase", category: "Backend" },

    //Tools
    { name: "GitHub", slug: "github", category: "Tools" },
    { name: "Docker", slug: "docker", category: "Tools" },
    { name: "VS Code", slug: "vscode", category: "Tools" },
    { name: "Git", slug: "git", category: "Tools" },

]

const SkillSection = () => {
    return (
        <section id="skills" className='bg-[#F5F5F5] px-4 md:px-12 py-16'>
            <motion.div
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.12 } },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <div className='text-[#FF9330] font-bold text-lg mb-6'>Skills</div>
                <motion.div
                    variants={{ hidden: { x: -60, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.80, ease: "easeOut" } } }}
                    className="relative flex items-center gap-4 ml-2"
                >
                    <div className='absolute md:h-18 md:w-18 w-12 h-12 rounded-full bg-[#FFB646] -left-4 -top-2 z-0 pointer-events-none' />
                    <h1 className="text-4xl md:text-6xl font-bold text-black-800 relative z-10">
                        My Skills
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
                    variants={{ hidden: { x: -40, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 1.25, ease: "easeOut" } } }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'
                >
                    <motion.div transition={{ duration: 0.18, ease: "easeOut" }} className=' w-full p-4 rounded-lg  gap-6 flex flex-col transition duration-300'>
                        <div className='flex items-center justify-between text-orange-500 text-xl font-bold'>
                            <p>Languages</p>
                        </div>
                        <div className='flex flex-wrap items-center gap-4'>
                            {skills.filter(skill => skill.category === "Language").map((skill) => (
                                <div key={skill.slug} className='flex items-center gap-2 border border-[#FF9330] rounded-lg px-2 py-1'>
                                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug}/${skill.slug}-original.svg`} alt={`${skill.name} icon`} className='w-6 h-6' />
                                    <p className='text-gray-800'>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 0.18, ease: "easeOut" }} className=' w-full p-4 rounded-lg  gap-6 flex flex-col transition duration-300'>
                        <div className='flex items-center justify-between text-orange-500 text-xl font-bold'>
                            <p>Frontend</p>
                        </div>
                        <div className='flex flex-wrap items-center gap-4'>
                            {skills.filter(skill => skill.category === "Frontend").map((skill) => (
                                <div key={skill.slug} className='flex items-center gap-2 border border-[#FF9330] rounded-lg px-2 py-1'>
                                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug}/${skill.slug}-original.svg`} alt={`${skill.name} icon`} className='w-6 h-6' />
                                    <p className='text-gray-800'>{skill.name}</p>
                                </div>
                            ))}
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
                    variants={{ hidden: { x: -60, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 1.25, ease: "easeOut" } } }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'
                >
                    <motion.div transition={{ duration: 0.18, ease: "easeOut" }} className=' w-full p-4 rounded-lg  gap-6 flex flex-col transition duration-300'>
                        <div className='flex items-center justify-between text-orange-500 text-xl font-bold'>
                            <p>Backend</p>
                        </div>
                        <div className='flex flex-wrap items-center gap-4'>
                            {skills.filter(skill => skill.category === "Backend").map((skill) => (
                                <div key={skill.slug} className='flex items-center gap-2 border border-[#FF9330] rounded-lg px-2 py-1'>
                                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug}/${skill.slug}-original.svg`} alt={`${skill.name} icon`} className='w-6 h-6' />
                                    <p className='text-gray-800'>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 0.18, ease: "easeOut" }} className=' w-full p-4 rounded-lg  gap-6 flex flex-col transition duration-300'>
                        <div className='flex items-center justify-between text-orange-500 text-xl font-bold'>
                            <p>Tools</p>
                        </div>
                        <div className='flex flex-wrap items-center gap-4'>
                            {skills.filter(skill => skill.category === "Tools").map((skill) => (
                                <div key={skill.slug} className='flex items-center gap-2 border border-[#FF9330] rounded-lg px-2 py-1'>
                                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug}/${skill.slug}-original.svg`} alt={`${skill.name} icon`} className='w-6 h-6' />
                                    <p className='text-gray-800'>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default SkillSection
