/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import AnimatedContent from './AnimateVerticleContent'

const skills = [
    // Languages 
    { name: "JavaScript", slug: "javascript", category: "Language" },
    { name: "TypeScript", slug: "typescript", category: "Language" },
    { name: "Python", slug: "python", category: "Language" },
    { name: "C++", slug: "cplusplus", category: "Language" },
    { name: "C", slug: "c", category: "Language" },

    // Frontend Skills
    { name: "HTML", slug: "html5", category: "Frontend" },
    { name: "CSS", slug: "css3", category: "Frontend" },
    { name: "React", slug: "react", category: "Frontend" },
    { name: "Next.js", slug: "nextjs", category: "Frontend" },
    { name: "Tailwind CSS", slug: "tailwindcss", category: "Frontend" },
    { name: "Vite", slug: "vite", category: "Frontend" },

    // Backend Skills
    { name: "Node.js", slug: "nodejs", category: "Backend" },
    { name: "Express.js", slug: "express", category: "Backend" },
    { name: "MongoDB", slug: "mongodb", category: "Backend" },
    { name: "Next.js", slug: "nextjs", category: "Backend" },
    { name: "PostgreSQL", slug: "postgresql", category: "Backend" },
    { name: "Firebase", slug: "firebase", category: "Backend" },
    { name: "Supabase", slug: "supabase", category: "Backend" },
    { name: "Socket.io", slug: "socketio", category: "Backend" },
    { name: "tRPC", slug: "trpc", category: "Backend" },
    { name: "CloudFlare", slug: "cloudflare", category: "Backend" },

    //Tools
    { name: "GitHub", slug: "github", category: "Tools" },
    { name: "Docker", slug: "docker", category: "Tools" },
    { name: "VS Code", slug: "vscode", category: "Tools" },
    { name: "Git", slug: "git", category: "Tools" },
    { name: "Vercel", slug: "vercel", category: "Tools" },
    { name: "Netlify", slug: "netlify", category: "Tools" },
    { name: "Postman", slug: "postman", category: "Tools" },
    { name: "Linux", slug: "linux", category: "Tools" },

]

const SkillSection = () => {
    return (
        <section id="skills" className='bg-[#F5F5F5] px-4 md:px-12 py-16'>
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
                    <div className='text-[#FF9330] font-bold text-lg mb-6'>Skills</div>
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
                            My Skills
                        </h1>
                    </div>
                </AnimatedContent>

            </div>

            <div
            >
                <div
                    className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'
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
                        <div className=' w-full p-4 rounded-lg  gap-6 flex flex-col transition duration-300'>
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
                        <div className=' w-full p-4 rounded-lg  gap-6 flex flex-col transition duration-300'>
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
                        </div>
                    </AnimatedContent>
                </div>
            </div>
            <div

            >
                <div
                    className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'
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
                        delay={0.5}
                    >
                        <div className=' w-full p-4 rounded-lg  gap-6 flex flex-col transition duration-300'>
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
                        delay={0.7}
                    >
                        <div className=' w-full p-4 rounded-lg  gap-6 flex flex-col transition duration-300'>
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
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    )
}

export default SkillSection
