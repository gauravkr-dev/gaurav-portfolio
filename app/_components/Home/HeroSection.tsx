import Image from 'next/image'
import React from 'react'
import GeneralInformationView from './general-information-view'
import { getPortfolioStats } from '@/lib/get-portfolio-stats'
import SocialLinks from './social-link'
import TextFlipView from './text-flip-view'

const HeroSection = async () => {
    const stats = await getPortfolioStats()
    return (
        <section>
            <div className="mt-28 flex items-center justify-start gap-3">
                <Image src="/gaurav.jpeg" alt="Gaurav Kumar" width={64} height={64} className="rounded-lg border border-border" />
                <div >
                    <h1 className="text-3xl font-semibold text-foreground flex items-center gap-1">
                        Gaurav Kumar
                        <span className="text-blue-500 mt-1" title="Verified Developer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M9.592 3.2a6 6 0 0 1-.495.399c-.298.2-.633.338-.985.408c-.153.03-.313.043-.632.068c-.801.064-1.202.096-1.536.214a2.71 2.71 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a6 6 0 0 1-.068.632c-.07.352-.208.687-.408.985c-.087.13-.191.252-.399.495c-.521.612-.782.918-.935 1.238c-.353.74-.353 1.6 0 2.34c.153.32.414.626.935 1.238c.208.243.312.365.399.495c.2.298.338.633.408.985c.03.153.043.313.068.632c.064.801.096 1.202.214 1.536a2.71 2.71 0 0 0 1.655 1.655c.334.118.735.15 1.536.214c.319.025.479.038.632.068c.352.07.687.209.985.408c.13.087.252.191.495.399c.612.521.918.782 1.238.935c.74.353 1.6.353 2.34 0c.32-.153.626-.414 1.238-.935c.243-.208.365-.312.495-.399c.298-.2.633-.338.985-.408c.153-.03.313-.043.632-.068c.801-.064 1.202-.096 1.536-.214a2.71 2.71 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536c.025-.319.038-.479.068-.632c.07-.352.209-.687.408-.985c.087-.13.191-.252.399-.495c.521-.612.782-.918.935-1.238c.353-.74.353-1.6 0-2.34c-.153-.32-.414-.626-.935-1.238a6 6 0 0 1-.399-.495a2.7 2.7 0 0 1-.408-.985a6 6 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.71 2.71 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a6 6 0 0 1-.632-.068a2.7 2.7 0 0 1-.985-.408a6 6 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.71 2.71 0 0 0-2.34 0c-.32.153-.626.414-1.238.935m6.781 6.663a.814.814 0 0 0-1.15-1.15l-4.85 4.85l-1.596-1.595a.814.814 0 0 0-1.15 1.15l2.17 2.17a.814.814 0 0 0 1.15 0z" clipRule="evenodd" /></svg>
                        </span>

                    </h1>
                    <TextFlipView />
                </div>
            </div>
            <p className="mt-6 text-muted-foreground">
                I build modern full-stack web applications from idea to deployment, focusing on performance, scalability, and exceptional user experiences.
                Powered by{" "}
                <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary link-underline"
                >
                    TypeScript
                </a>
                ,{" "}
                <a
                    href="https://react.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary link-underline"
                >
                    Next.js
                </a>
                ,{" "}
                <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary link-underline"
                >
                    React
                </a>
                , and{" "}
                <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary link-underline"
                >
                    Tailwind CSS
                </a>
                .
            </p>

            <GeneralInformationView />
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                    stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-start border border-border rounded-lg p-4 gap-1">
                            <div className="text-muted-foreground mb-2">
                                {
                                    stat.icon === "school" && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 1L0 4.5l2 .9v1.7c-.6.2-1 .8-1 1.4s.4 1.2 1 1.4v.1l-.9 2.1C.8 13 1 14 2.5 14s1.7-1 1.4-1.9L3 10c.6-.3 1-.8 1-1.5s-.4-1.2-1-1.4V5.9L7.5 8L15 4.5zm4.4 6.5l-4.5 2L5 8.4v.1c0 .7-.3 1.3-.8 1.8l.6 1.4v.1c.1.4.2.8.1 1.2c.7.3 1.5.5 2.5.5c3.3 0 4.5-2 4.5-3z" /></svg>
                                    )
                                }
                                {
                                    stat.icon === "projects" && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2M5 6h14v2H5zm2-4h10v2H7z" /></svg>
                                    )
                                }
                                {
                                    stat.icon === "contributions" && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M6 21V9a9 9 0 0 0 9 9" /></g></svg>
                                    )
                                }
                                {
                                    stat.icon === "tech" && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.504 7.501H7.5v10.003h10.003z" /><path fill="currentColor" d="M21.505 5.5v-2h-2v-2h-2.001v2h-2v-2h-2.001v2h-2v-2H9.501v2h-2v-2H5.5v2h-2v2h-2v2.001h2v2h-2v2.001h2v2h-2v2.001h2v2h-2v2.001h2v2h2v2.001h2.001v-2h2v2h2.001v-2h2v2h2.001v-2h2v2h2.001v-2h2v-2h2.001v-2.001h-2v-2h2v-2.001h-2v-2h2V9.501h-2v-2h2V5.5zm-2 14.004H5.5V5.501h14.003z" /></svg>
                                    )
                                }
                            </div>
                            <h3 className="font-medium">{stat.value}</h3>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                    ))
                }
            </div>
            <SocialLinks />
        </section>
    )
}

export default HeroSection
