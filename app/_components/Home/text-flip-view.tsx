    "use client"

    import { useRef } from "react"
    import { motion, useInView, usePageInView } from "motion/react"

    import { TextFlip } from "@/components/text-flip"

    const WORDS = ["Software Engineer", "Full Stack Developer", "Tech Enthusiast", "Open Source Contributor", "Lifelong Learner", "Problem Solver", "Team Player", "Innovator", "Creative Thinker", "Passionate Coder"]

    export default function TextFlipView() {
        const ref = useRef<HTMLDivElement>(null)
        const isPageInView = usePageInView()
        const isInView = useInView(ref)
        const play = isPageInView && isInView

        return (
            <div
                ref={ref}
                className="flex items-center gap-1.5 text-muted-foreground"
            >
                <span className="inline-grid">
                    {/* Placeholder for the tallest word */}
                    <span className="invisible col-start-1 row-start-1" aria-hidden>
                        {WORDS.reduce((a, b) => (a.length >= b.length ? a : b))}
                    </span>
                    <TextFlip
                        as={motion.span}
                        className="col-start-1 row-start-1 text-muted-foreground"
                        play={play}
                    >
                        {WORDS.map((word) => (
                            <span key={word}>{word}</span>
                        ))}
                    </TextFlip>
                </span>
            </div>
        )
    }
