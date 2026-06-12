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
        description: "BeBetter is a health and wellness platform designed to help users achieve their fitness goals through personalized workout plans and nutrition guidance.",
        technologies: ["Next.js", "Strapi", "Better Auth", "TypeScript", "Docker", "tRPC", "Google Cloud", "React", "Tailwind CSS", "Node.js"],
        link: "https://be-better-ai.vercel.app",
        githubLink: "https://github.com/gauravkr-dev/BeBetter.ai",
        image: "/BeBetter1.png",
    },
    {
        id: "groundup_pulse",
        name: "GroundUp Pulse",
        description: "GroundUp Pulse is a social impact platform that connects volunteers with local community initiatives. It enables users to discover meaningful opportunities to give back",
        technologies: ["Next.js", "Strapi", "Better Auth", "TypeScript", "Docker", "tRPC", "Google Cloud", "React", "Tailwind CSS", "Node.js"],
        link: "https://groundup-pulse.vercel.app",
        githubLink: "https://github.com/gauravkr-dev/GroundUp-Pulse",
        image: "/GroundUp.png",
    },
    {
        id: "nexflow",
        name: "NexFlow",
        description: "NexFlow is a workflow automation platform that streamlines business processes and enhances productivity. It allows users to create, manage, and optimize workflows with an intuitive drag-and-drop interface.",
        technologies: ["Next.js", "Strapi", "Better Auth", "TypeScript", "Docker", "tRPC", "Google Cloud", "React", "Tailwind CSS", "Node.js"],
        link: "https://nex-flow-five.vercel.app",
        githubLink: "https://github.com/gauravkr-dev/NexFlow",
        image: "/NexFlow2.png",
    }
]


