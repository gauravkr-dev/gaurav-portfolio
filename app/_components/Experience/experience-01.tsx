import { CodeXmlIcon, LightbulbIcon } from "lucide-react"

import type { ExperienceItemType } from "@/app/_components/Experience/work-experience"
import { WorkExperience } from "@/app/_components/Experience/work-experience"

export function Experience01() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <div className="container mx-auto">
        <h2 className="text-muted-foreground" style={{ fontFamily: "var(--font-geist-mono)" }}>
          Experience
        </h2>

        <WorkExperience
          className="bg-transparent *:screen-line-bottom"
          experiences={EXPERIENCE}
        />
      </div>
    </div>
  )
}

const EXPERIENCE: ExperienceItemType[] = [
  {
    id: "syncinfo",
    companyName: "SyncInfo",
    companyLogo: "/favicon.png",
    companyWebsite: "http://localhost:3000",
    positions: [
      {
        id: "2",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "05.2026",
        },
        employmentType: "Part-time",
        icon: <CodeXmlIcon />,
        description: `- Built and deployed a production-grade embeddable AI chatbot widget SDK served via CDN.
- Implemented a full RAG pipeline with concurrent crawling, domain filtering, and zero-downtime re-crawls powered by Firecrawl.
- Optimized widget bundle size by ~72% by migrating from React to Preact.
- Architected the full stack using Next.js, tRPC, Drizzle ORM, Neon PostgreSQL, and Inngest.
- Integrated pgvector for semantic similarity search with cosine similarity thresholds.
- Designed and implemented streaming AI responses for real-time chat experience.`,
        skills: [
          "Next.js",
          "Better Auth",
          "TypeScript",
          "Docker",
          "tRPC",
          "Google Cloud",
          "React",
          "Tailwind CSS",
          "Node.js",
          "Project Management",
          "Preact", "pgvector", "Neon", "Inngest", "Drizzle ORM", "Vercel"
        ],
      },
      {
        id: "1",
        title: "Founder",
        employmentPeriod: {
          start: "05.2026",
        },
        employmentType: "Part-time",
        icon: <LightbulbIcon />,
        description: `- Founded SyncInfo, a B2B SaaS platform enabling businesses to embed AI-powered chat assistants into any website via a single script tag.
- Sole decision-maker across product, engineering, design, and go-to-market strategy.`,
        skills: ["Business Ownership", "Business Law", "Business Tax"],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "freelance",
    companyName: "Freelance",
    companyLogo: "/gaurav.jpeg",
    companyWebsite: "https://gauravkr-dev.vercel.app",
    positions: [
      {
        id: "1",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "12.2025",
        },
        employmentType: "Part-time",
        icon: <CodeXmlIcon />,
        description:
          "- Built and deployed modern full-stack web applications.\n- Integrated AI Features, APIs, databases, and authentication systems.\n- Optimized application performance, scalability, and user experience.",
        skills: [
          "Next.js",
          "Strapi",
          "Better Auth",
          "TypeScript",
          "Docker",
          "tRPC",
          "Google Cloud",
          "React",
          "Tailwind CSS",
          "Node.js",
          "Project Management",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
]
