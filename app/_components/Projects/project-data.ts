type ProjectDataType = {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    link: string;
    githubLink?: string;
    image: string;
}

export const ProjectsData: ProjectDataType[] = [
    {
        id: "bebetter",
        name: "BeBetter.ai",
        description: "BeBetter.ai is an AI-powered career platform that offers AI mock interviews, resume analysis, mock tests, personalized feedback, and job listings to help users prepare for and secure better career opportunities.",
        technologies: ["Next.js", "Better Auth", "TypeScript", "tRPC", "React", "Tailwind CSS", "Node.js", "Gemini API", "Uploadthing", "Drizzle ORM", "Polar", "ImageKit", "Inngest", "vercel"],
        link: "https://be-better-ai.vercel.app",
        githubLink: "https://github.com/gauravkr-dev/BeBetter.ai",
        image: "/BeBetter1.png",
    },
    {
        id: "groundup_pulse",
        name: "GroundUp Pulse",
        description: "GroundUp Pulse is an AI-powered civic issue reporting platform that enables citizens to report local problems, automatically verifies reports, prioritizes issues, and connects them with the appropriate authorities for faster resolution.",
        technologies: ["Next.js", "Better Auth", "TypeScript", "Docker", "tRPC", "React", "Tailwind CSS", "Node.js", "Gemini API", "Uploadthing", "Drizzle ORM", "Socket.IO", "vercel"],
        link: "https://groundup-pulse.vercel.app",
        githubLink: "https://github.com/gauravkr-dev/GroundUp-Pulse",
        image: "/GroundUp.png",
    },
    {
        id: "nexflow",
        name: "NexFlow",
        description: "NexFlow is an AI-powered real-time collaboration platform that enables teams to communicate, collaborate, and stay productive through secure messaging, intelligent workflows, and smart AI assistance.",
        technologies: ["Next.js", "Kinde Auth", "TypeScript", "tRPC", "React", "Tailwind CSS", "Node.js", "Prisma ORM", "Uploadthing", "Cloudflare workers", "vercel"],
        link: "https://nex-flow-five.vercel.app",
        githubLink: "https://github.com/gauravkr-dev/NexFlow",
        image: "/NexFlow2.png",
    }
]


