"use client"
import React from 'react'

import { cn } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";
import { DecorIcon } from '@/components/ui/docker-icon';

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
            "Amazing experience! The design and performance of the project exceeded my expectations.",
        name: "Neha Gupta",
        role: "Product Manager"
    },
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className='mt-12'>
            <p className="text-muted-foreground mb-8" style={{ fontFamily: "var(--font-geist-mono)" }}>
                Testimonials
            </p>

            <div
            >
                <div className="mx-auto mt-12 grid w-full max-w-5xl md:grid-cols-2 md:gap-6" >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            index={index}
                            key={testimonial.name}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
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
                "relative flex flex-col  gap-4 px-8 pt-8 pb-4 mb-18 md:translate-y-[calc(3rem*var(--t-card-index))]",
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