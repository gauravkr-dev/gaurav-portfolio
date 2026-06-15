import { DecorIcon } from '@/components/ui/docker-icon';
import { cn } from '@/lib/utils';
import { QuoteIcon } from 'lucide-react';
import React from 'react'
import { quotes } from './footer-quots-data';


const FooterQuotsView = () => {
    return (
        <div>
            <div className="mx-auto mt-24 w-full max-w-4xl px-4" >
                {quotes.map((quote, index) => (
                    <QuotsCard
                        index={index}
                        key={quote.text}
                        testimonial={{ name: quote.author, text: quote.text }}
                    />
                ))}
            </div>
        </div>
    )
}

export default FooterQuotsView


function QuotsCard({
    testimonial,
    index,
    className,
    ...props
}: React.ComponentProps<"figure"> & {
    testimonial: {
        text: string;
        name: string;
    };
    index: number;
}) {
    const { text, name } = testimonial;

    return (
        <figure
            className={cn(
                "relative flex flex-col  gap-4 px-8 pt-8 pb-4 mb-12 md:translate-y-[calc(3rem*var(--t-card-index))]",
                className
            )}
            style={
                {
                    "--t-card-index": index,
                } as React.CSSProperties
            }
            {...props}
        >
            <div className="absolute -inset-y-4 -left-px w-px dark:bg-border bg-neutral-400/60" />
            <div className="absolute -inset-y-4 -right-px w-px dark:bg-border bg-neutral-400/60" />
            <div className="absolute -inset-x-4 -top-px h-px dark:bg-border bg-neutral-400/60" />
            <div className="absolute -right-4 -bottom-px -left-4 h-px dark:bg-border bg-neutral-400/60" />
            <DecorIcon className="size-3.5" position="top-left" />

            <blockquote className="flex gap-4">
                <QuoteIcon aria-hidden="true" className="size-6 shrink-0 stroke-1 " />

                <p className="flex-1 font-normal ">
                    {text}
                </p>
            </blockquote>

            <figcaption className="flex items-center justify-end gap-0">
                <div className="flex items-center justify-end gap-2 text-base text-muted-foreground leading-relaxed">
                    <cite className="font-medium text-sm not-italic">
                        ~ {name}
                    </cite>
                </div>

            </figcaption>
        </figure>
    );
}