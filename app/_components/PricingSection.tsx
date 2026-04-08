"use client";
import { cn } from "@/lib/utils";
import * as PricingCard from "@/components/pricing-card";
import { CheckCircle2, Users, Briefcase, Building, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function PricingSection() {
    return (
        <section id="prices" className='bg-[#FFE9D9] px-4 md:px-12 py-16'>
            <motion.div
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.12 } },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <div className='text-[#FF9330] font-bold text-lg mb-6'>Pricing</div>
                <motion.div
                    variants={{ hidden: { x: -60, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.80, ease: "easeOut" } } }}
                    className="relative flex items-center gap-4 ml-2"
                >
                    <div className='absolute md:h-18 md:w-18 w-12 h-12 rounded-full bg-[#FFB646] -left-4 -top-2 z-0 pointer-events-none' />
                    <h1 className="text-4xl md:text-6xl font-bold text-black-800 relative z-10">
                        Stay chill and <br /> pick your plan
                    </h1>
                </motion.div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.12 } },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <motion.div variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 1.25, ease: "easeOut" } } }} className="grid w-full gap-4 md:grid-cols-3 mt-12">
                    {plans.map((plan, index) => (
                        <PricingCard.Card
                            className={cn("w-full max-w-full", index === 1 && "md:scale-105")}
                            key={plan.name}
                        >
                            <PricingCard.Header isPopular={index === 1}>
                                <PricingCard.Plan>
                                    <PricingCard.PlanName>
                                        {plan.icon}
                                        <span>{plan.name}</span>
                                    </PricingCard.PlanName>
                                    {plan.badge && (
                                        <PricingCard.Badge>{plan.badge}</PricingCard.Badge>
                                    )}
                                </PricingCard.Plan>
                                <PricingCard.Price>
                                    <PricingCard.MainPrice>{plan.price}</PricingCard.MainPrice>
                                </PricingCard.Price>
                                {plan.badge && (
                                    <a href="#contact" className='block text-center text-lg font-medium bg-[#FFB646] border border-black rounded w-full py-1 hover:bg-[#FFB646]/40'>
                                        Choose Plan
                                        <ArrowUpRight className='ml-1 inline text-orange-500' size={18} />
                                    </a>
                                )}
                                {!plan.badge && (
                                    <a href="#contact" className='block text-center text-lg font-medium text-black bg-transparent border border-black hover:bg-[#FFB646]/40 rounded w-full py-1 duration-300'>
                                        Get Started
                                        <ArrowUpRight className='ml-1 inline text-orange-500' size={18} />
                                    </a>
                                )}


                            </PricingCard.Header>

                            <PricingCard.Body>
                                <PricingCard.Description>
                                    {plan.description}
                                </PricingCard.Description>
                                <PricingCard.List>
                                    {plan.features.map((item) => (
                                        <PricingCard.ListItem className="text-xs" key={item}>
                                            <CheckCircle2 aria-hidden="true" className="size-4 text-foreground" />
                                            <span>{item}</span>
                                        </PricingCard.ListItem>
                                    ))}
                                </PricingCard.List>
                            </PricingCard.Body>
                        </PricingCard.Card>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.12 } },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <motion.div
                    variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 1.25, ease: "easeOut" } } }}
                    className='mt-18 items-center justify-center flex mx-auto'
                >
                    <motion.div transition={{ duration: 0.18, ease: "easeOut" }} className='rounded-lg  gap-6 flex flex-col transition duration-300 text-center'>
                        <a href="#contact" className=' border rounded-lg px-2 py-1 text-sm border-orange-500 hover:bg-orange-500/10 transition duration-300 flex items-center gap-1'>
                            Need a custom plan?
                            <ArrowUpRight className='inline text-orange-500' size={16} />
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

const plans = [
    {
        icon: (
            <Users
            />
        ),
        description: "Perfect for simple websites",
        name: "Basic Plan",
        price: "₹2,999 – ₹5,999",
        features: [
            "Simple Static Website",
            "Responsive Design (Mobile Friendly)",
            "Clean & Modern UI",
            "Up to 4 Pages",
            "Basic SEO Setup",
            "Deployment Included",
        ],
    },
    {
        icon: (
            <Briefcase
            />
        ),
        description: "Best for growing businesses",
        name: "Standard Plan",
        badge: "Popular",
        price: "₹7,999 – ₹12,999",
        features: [
            "Full-Stack Web Application",
            "Frontend + Backend Development",
            "Database Integration",
            "Dynamic Pages & Features",
            "Authentication (Login/Signup)",
            "API Integration",
            "Responsive & Optimized Design",
            "Deployment Included",
        ],
    },
    {
        icon: (
            <Building
            />
        ),
        name: "Premium Plan",
        description: "For advanced and scalable projects",
        price: "₹15,000+",
        features: [
            "Everything in Standard Plan",
            "Fully Custom & Scalable Solution",
            "Advanced Features & Integrations",
            "Admin Dashboard / Panel",
            "Payment Integration (if needed)",
            "Advanced UI/UX + Animations",
            "Performance & SEO Optimization",
            "Priority Support",
            "Deployment + Ongoing Guidance",
        ],
    },
];
