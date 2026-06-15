import { Button } from '@/components/ui/button'
import { Lightbulb, Link, Mail, MapPin, Mars, Phone } from 'lucide-react'
import React from 'react'
import { CurrentLocalTimeItem } from './current-local-time-item'
import { Link001 } from '@/components/linkAnimation'

const GeneralInformationView = () => {
    return (
        <div className="mt-10 flex items-start justify-center  gap-2 flex-col text-sm"
            style={{ fontFamily: "var(--font-geist-mono)" }}>
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="rounded-lg bg-transparent border border-neutral-400/60">
                    <Lightbulb />
                </Button>
                <span className="text-muted-foreground flex items-center gap-2">
                    Founder of{" "}
                    <Link001
                        href="http://localhost:3000"
                        className="text-foreground"
                    >
                        @SyncInfo
                    </Link001>
                </span>
            </div>
            <div className="flex items-start justify-center gap-2 sm:gap-4 flex-col sm:flex-row">
                <div className="flex items-start justify-center gap-2 flex-col">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="rounded-lg bg-transparent border border-neutral-400/60">
                            <MapPin />
                        </Button>
                        <span className="text-muted-foreground">
                            <Link001
                                href="https://www.google.com/maps/place/Nalanda,+Bihar,+India/@25.1356762,85.4222651,12z/data=!3m1!4b1!4m5!3m4!1s0x39f2e6cfae7a9d9f:0x9c8c8b9a1a1a1a1!8m2!3d25.1356762!4d85.4222651"
                                className="text-foreground"
                            >
                                Nalanda, Bihar, India
                            </Link001>
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="rounded-lg bg-transparent border border-neutral-400/60">
                            <Phone />
                        </Button>
                        <span className="text-muted-foreground">
                            <Link001
                                href="tel:+911234567890"
                                className="text-foreground"
                            >
                                +91 977 157 0572
                            </Link001>
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="rounded-lg bg-transparent border border-neutral-400/60">
                            <Link />
                        </Button>
                        <span className="text-muted-foreground">
                            <Link001 href="https://gauravkr-dev.vercel.app" className="text-foreground">
                                gauravkr-dev.vercel.app
                            </Link001>
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
                        <Button variant="outline" size="icon" className="rounded-lg bg-transparent border border-neutral-400/60">
                            <Mail />
                        </Button>
                        <span className="text-muted-foreground">
                            <Link001
                                href="mailto:gauravlabs.dev@gmail.com"
                                className="text-foreground"
                            >
                                gauravlabs.dev@gmail.com
                            </Link001>
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="rounded-lg bg-transparent border border-neutral-400/60">
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
