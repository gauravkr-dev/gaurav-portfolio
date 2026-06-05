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
    companyWebsite: "https://syncinfo.com",
    positions: [
      {
        id: "2",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "05.2026",
        },
        employmentType: "Part-time",
        icon: <CodeXmlIcon />,
        description: `- Integrated VNPAY-QR for secure transactions.
- Registered the e-commerce site with [online.gov.vn](https://online.gov.vn) for compliance.
- Developed online ordering to streamline purchases.
- Build and maintain ZaDark.com with Docusaurus, integrating AdSense.
- Develop and maintain the ZaDark extension for Zalo Web on Chrome, Safari, Edge, and Firefox — with 15,000+ active users via Chrome Web Store.`,
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
      },
      {
        id: "1",
        title: "Founder",
        employmentPeriod: {
          start: "05.2026",
        },
        employmentType: "Part-time",
        icon: <LightbulbIcon />,
        skills: ["Business Ownership", "Business Law", "Business Tax"],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "freelance",
    companyName: "Freelance",
    companyLogo: "/gaurav.jpeg",
    companyWebsite: "https://shadcncraft.com?atp=ncdai",
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
