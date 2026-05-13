"use client"
import React from 'react'

import { cn } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";
import { DecorIcon } from '@/components/ui/docker-icon';
import AnimatedContent from './AnimateVerticleContent';

type Testimonial = {
    quote: string;
    name: string;
    role: string;
};

const testimonials: Testimonial[] = [
    {
        quote:
            "Gaurav delivered exactly what I needed. The website is fast, clean, and easy to use. Highly recommended!",
        name: "Rahul Sharma",
        role: "Startup Founder"
    },
    {
        quote:
            "Working with Gaurav was smooth and professional. He understood my requirements quickly and built a great solution.",
        name: "Aman Verma",
        role: "Small Business Owner"
    },
    {
        quote:
            "Amazing experience! The design and performance of the project exceeded my expectations.",
        name: "Neha Gupta",
        role: "Product Manager"
    },
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className='bg-white px-4 md:px-12 py-16'>
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
                    <div className='text-[#FF9330] font-bold text-lg mb-6'>Testimonials</div>
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
                            Client Feedback
                        </h1>
                    </div>
                </AnimatedContent>
            </div>
            <div
            >
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
                    delay={0.3}
                >
                    <div className="mx-auto mt-12 grid w-full max-w-5xl gap-8 md:grid-cols-3 md:gap-6" >
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                index={index}
                                key={testimonial.name}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                </AnimatedContent>
            </div>

        </section>

    );
}

function TestimonialCard({
    testimonial,
    index,
    className,
    ...props
}: React.ComponentProps<"figure"> & {
    testimonial: Testimonial;
    index: number;
}) {
    const { quote, name, role } = testimonial;

    return (
        <figure
            className={cn(
                "relative flex flex-col  gap-4 px-8 pt-8 pb-4 mb-18 bg-gray-50 shadow-xs md:translate-y-[calc(3rem*var(--t-card-index))]",
                className
            )}
            style={
                {
                    "--t-card-index": index,
                } as React.CSSProperties
            }
            {...props}
        >
            <div className="absolute -inset-y-4 -left-px w-px bg-border" />
            <div className="absolute -inset-y-4 -right-px w-px bg-border" />
            <div className="absolute -inset-x-4 -top-px h-px bg-border" />
            <div className="absolute -right-4 -bottom-px -left-4 h-px bg-border" />
            <DecorIcon className="size-3.5" position="top-left" />

            <blockquote className="flex gap-4">
                <QuoteIcon aria-hidden="true" className="size-6 shrink-0 stroke-1 " />

                <p className="flex-1 font-normal ">
                    {quote}
                </p>
            </blockquote>

            <figcaption className="flex items-center justify-end gap-0">
                <div className="flex items-center justify-end gap-2 text-base text-muted-foreground leading-relaxed">
                    <cite className="font-medium text-sm not-italic">
                        {name}
                        <p className="text-sm">({role})</p>
                    </cite>
                </div>

            </figcaption>
        </figure>
    );
}