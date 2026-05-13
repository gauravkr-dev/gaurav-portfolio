"use client";
import { SearchCheckIcon, PaletteIcon, CodeXmlIcon, RocketIcon } from "lucide-react";
import AnimatedContent from "./AnimateVerticleContent";

const data = [
    {
        title: 'Discovery',
        description: 'We start by understanding your business goals, target audience, and project requirements to create a clear roadmap and strategy for building the perfect digital solution.',
        icon: SearchCheckIcon,
    },
    {
        title: 'Design',
        description: 'Our design process focuses on creating clean, modern, and user-friendly interfaces that deliver an engaging experience while matching your brand identity perfectly.',
        icon: PaletteIcon,
    },
    {
        title: 'Development',
        description: 'Using modern technologies and scalable architecture, we develop fast, secure, and high-performance applications tailored to your business needs and future growth.',
        icon: CodeXmlIcon,
    },
    {
        title: 'Launch',
        description: 'Before launch, we carefully test and optimize everything to ensure smooth performance, reliability, and a successful deployment for your users and business.',
        icon: RocketIcon,
    },
];

export function PricingSection() {
    return (
        <section id="how-i-work" className='bg-white px-4 md:px-12 py-16'>
            <div
            >
                <AnimatedContent
                    distance={-100}
                    direction="horizontal"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                >
                    <div className='text-[#FF9330] font-bold text-lg mb-6'>Working Style</div>
                </AnimatedContent>
                <AnimatedContent
                    distance={-100}
                    direction="horizontal"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0.1}
                >
                    <div
                        className="relative flex items-center gap-4 ml-2"
                    >
                        <div className='absolute md:h-18 md:w-18 w-12 h-12 rounded-full bg-[#FFB646] -left-4 -top-2 z-0 pointer-events-none' />
                        <h1 className="text-4xl md:text-6xl font-bold text-black-800 relative z-10">
                            How I Work
                        </h1>
                    </div>
                </AnimatedContent>
            </div>
            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
            >

                <div className='mt-18 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10'>
                    {data.map((item, index) => (
                        <div key={index} className='rounded-[14px] bg-orange-200/80 p-0.5 pt-4 transition-all duration-300 hover:translate-y-[-2px] ease-in-out hover:bg-orange-200/100'>
                            <div className='relative flex  flex-col items-center rounded-xl bg-white p-6 pb-10'>
                                <div className='absolute -top-6 rounded-full bg-orange-600 p-3'>
                                    <item.icon className='size-6 text-white' />
                                </div>
                                <h3 className='mt-6 text-center text-lg md:text-xl font-medium'>{item.title}</h3>
                                <p className='mt-6 text-center'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedContent>
        </section>
    );
}

