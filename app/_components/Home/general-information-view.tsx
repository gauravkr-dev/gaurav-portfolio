import Text3DFlip from '@/components/text-3d-flip'
import { Button } from '@/components/ui/button'
import { Lightbulb, Link, Mail, MapPin, Mars, Phone } from 'lucide-react'
import React from 'react'
import { CurrentLocalTimeItem } from './current-local-time-item'

const GeneralInformationView = () => {
    return (
        <div className="mt-8 flex items-start justify-center  gap-2 flex-col text-sm"
            style={{ fontFamily: "var(--font-geist-mono)" }}>
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="rounded-lg">
                    <Lightbulb />
                </Button>
                <span className="text-muted-foreground">
                    Founder of{" "}
                    <a
                        href="https://www.helloworld.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors mx-1 text-foreground"
                    >
                        <Text3DFlip
                            as="span"
                            className="inline-flex"
                            textClassName="bg-background text-foreground"
                            flipTextClassName="bg-background text-foreground"
                            rotateDirection="top"
                            staggerDuration={0.03}
                            staggerFrom="first"
                            transition={{ type: "spring", damping: 25, stiffness: 160 }}
                        >
                            @SyncInfo
                        </Text3DFlip>
                    </a>
                </span>
            </div>
            <div className="flex items-start justify-center gap-2 sm:gap-4 flex-col sm:flex-row">
                <div className="flex items-start justify-center gap-2 flex-col">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="rounded-lg">
                            <MapPin />
                        </Button>
                        <span className="text-muted-foreground">

                            <a
                                href="https://www.google.com/maps/place/Nalanda,+Bihar,+India/@25.1356762,85.4222651,12z/data=!3m1!4b1!4m5!3m4!1s0x39f2e6cfae7a9d9f:0x9c8c8b9a1a1a1a1!8m2!3d25.1356762!4d85.4222651"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors mx-1 text-foreground"
                            >
                                <Text3DFlip
                                    as="span"
                                    className="inline-flex"
                                    textClassName="bg-background text-foreground"
                                    flipTextClassName="bg-background text-foreground"
                                    rotateDirection="top"
                                    staggerDuration={0.03}
                                    staggerFrom="first"
                                    transition={{ type: "spring", damping: 25, stiffness: 160 }}
                                >
                                    Nalanda, India
                                </Text3DFlip>
                            </a>
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="rounded-lg">
                            <Phone />
                        </Button>
                        <span className="text-muted-foreground">
                            <a
                                href="tel:+911234567890"
                                className="transition-colors mx-1 text-foreground"
                            >
                                <Text3DFlip
                                    as="span"
                                    className="inline-flex"
                                    textClassName="bg-background text-foreground"
                                    flipTextClassName="bg-background text-foreground"
                                    rotateDirection="top"
                                    staggerDuration={0.03}
                                    staggerFrom="first"
                                    transition={{ type: "spring", damping: 25, stiffness: 160 }}
                                >
                                    +91 977 157 0572
                                </Text3DFlip>
                            </a>
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="rounded-lg">
                            <Link />
                        </Button>
                        <span className="text-muted-foreground">
                            <a
                                href="https://gauravkr-dev.vercel.app"
                                className="transition-colors mx-1 text-foreground"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Text3DFlip
                                    as="span"
                                    className="inline-flex"
                                    textClassName="bg-background text-foreground"
                                    flipTextClassName="bg-background text-foreground"
                                    rotateDirection="top"
                                    staggerDuration={0.03}
                                    staggerFrom="first"
                                    transition={{ type: "spring", damping: 25, stiffness: 160 }}
                                >
                                    gauravkr-dev.vercel.app
                                </Text3DFlip>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="flex items-start justify-center gap-2 flex-col">
                    <div className="flex items-center gap-4">
                        <span className="">
                            <CurrentLocalTimeItem timeZone="Asia/Kolkata" />
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="rounded-lg">
                            <Mail />
                        </Button>
                        <span className="text-muted-foreground">
                            <a
                                href="mailto:gauravlabs.dev@gmail.com"
                                className="transition-colors mx-1 text-foreground"
                            >
                                <Text3DFlip
                                    as="span"
                                    className="inline-flex"
                                    textClassName="bg-background text-foreground"
                                    flipTextClassName="bg-background text-foreground"
                                    rotateDirection="top"
                                    staggerDuration={0.03}
                                    staggerFrom="first"
                                    transition={{ type: "spring", damping: 25, stiffness: 160 }}
                                >
                                    gauravlabs.dev@gmail.com
                                </Text3DFlip>
                            </a>
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="rounded-lg">
                            <Mars />
                        </Button>
                        <span className="text-foreground">
                            he/him
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralInformationView
