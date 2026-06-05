/* eslint-disable @next/next/no-img-element */
"use client"
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import React from 'react'

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
    { name: "PostgreSQL", slug: "postgresql", category: "Backend" },
    { name: "Socket.io", slug: "socketio", category: "Backend" },
    { name: "tRPC", slug: "trpc", category: "Backend" },
    { name: "CloudFlare", slug: "cloudflare", category: "Backend" },
    { name: "Firebase", slug: "firebase", category: "Backend" },
    { name: "Supabase", slug: "supabase", category: "Backend" },

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
        <section id="skills" className='mt-12 mb-12'>
            <div style={{ fontFamily: "var(--font-geist-mono)" }}>
                <p className="text-muted-foreground">Tech Stack</p>
            </div>
            <div className='flex flex-wrap items-center gap-4 mt-4'>
                {skills.map((skill) => (
                    <Tooltip key={`${skill.category}-${skill.slug}`} >
                        <TooltipTrigger asChild>
                            <div key={`${skill.category}-${skill.slug}`} className='flex items-center gap-2 border border-border rounded-lg p-2 group'>
                                <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug}/${skill.slug}-original.svg`} alt={`${skill.name} icon`} className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-200' />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{skill.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>

        </section>
    )
}

export default SkillSection
