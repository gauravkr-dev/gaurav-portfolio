export type PortfolioStat = {
    value: string
    label: string
    icon?: "projects" | "contributions" | "tech" | "school"
}

const GITHUB_USERNAME = "gauravkr-dev"

// Change these manually whenever needed
const PROJECTS_COUNT = 6
const TECH_COUNT = 15

export async function getPortfolioStats(): Promise<PortfolioStat[]> {
    try {
        const response = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
            {
                next: {
                    revalidate: 60 * 60 * 12, // 12 hours
                },
            }
        )

        const data = await response.json()

        const totalContributions =
            data?.total?.[0]?.count ??
            data?.contributions?.reduce(
                (sum: number, item: { count: number }) => sum + item.count,
                0
            ) ??
            0

        return [
            {
                value: `${PROJECTS_COUNT}+`,
                label: "Projects Shipped",
                icon: "projects",
            },
            {
                value: `${totalContributions.toLocaleString()}+`,
                label: "GitHub Contributions",
                icon: "contributions",
            },
            {
                value: `${TECH_COUNT}+`,
                label: "Technologies",
                icon: "tech",
            },
            {
                value: "IIT Guwahati",
                label: "DS and AI Student",
                icon: "school",
            },
        ]
    } catch {
        return [
            {
                value: `${PROJECTS_COUNT}+`,
                label: "Projects Shipped",
            },
            {
                value: "2000+",
                label: "GitHub Contributions",
            },
            {
                value: `${TECH_COUNT}+`,
                label: "Technologies",
            },
            {
                value: "IITG",
                label: "IIT Guwahati",
            },
        ]
    }
}
