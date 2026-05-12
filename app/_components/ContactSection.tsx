/* eslint-disable @next/next/no-img-element */
"use client"
import { Mail, MapPin, PhoneCall, Send } from 'lucide-react'
import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import { toast } from 'sonner';
import { Spinner } from '@/components/ui/spinner';
import AnimatedContent from './AnimateVerticleContent';

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", message: "", phone: "", subject: "" });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors = { name: "", email: "", message: "", phone: "", subject: "" };

        if (!name.trim()) newErrors.name = "Name is required";

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) newErrors.email = "Enter a valid email";
        }

        if (!message.trim()) newErrors.message = "Message is required";

        if (newErrors.name || newErrors.email || newErrors.message) {
            setErrors(newErrors);
            return;
        }

        setErrors({ name: "", email: "", message: "", phone: "", subject: "" });
        setIsSubmitting(true);

        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            setIsSubmitting(false);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
            .then(() => {
                (e.target as HTMLFormElement).reset();
                toast.success("You will get a response within 12-48 hours.");
                setName("");
                setEmail("");
                setPhone("");
                setSubject("");
                setMessage("");
                setIsSubmitting(false);
            })
            .catch(() => {
                setIsSubmitting(false);
                (e.target as HTMLFormElement).reset();
                setName("");
                setEmail("");
                setPhone("");
                setSubject("");
                setMessage("");
                setIsSubmitting(false);
                toast.error("Failed to send message. Please try again.");
            });


    }

    return (
        <section id="contact" className='bg-white px-4 md:px-12 py-24 overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                    {/* Left side */}
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
                            <div className='text-[#FF9330] font-bold text-lg mb-6'>Contact</div>
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
                                <div className='absolute md:h-24 md:w-24 w-16 h-16 rounded-full bg-[#FFB646] -left-6 -top-4 z-0 pointer-events-none' />
                                <h1 className="text-5xl md:text-[96px] leading-none font-bold text-black relative z-10">
                                    Let&apos;s <br />Connect
                                </h1>
                            </div>
                        </AnimatedContent>
                    </div>
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
                            delay={0.1}
                        >
                            <div
                                className='mt-8 items-center flex mx-auto'
                            >
                                <div className='rounded-lg  gap-3 flex flex-row items-start transition duration-300 text-center'>
                                    <Mail className="size-8" />
                                    <div className='flex flex-col items-start gap-0'>
                                        <h3 className='text-xl text-muted-foreground font-medium'>Email Me</h3>
                                        <p className='text-xl font-semibold'>gauravyd474@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>

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
                            delay={0.2}
                        >
                            <div
                                className='mt-8 items-center flex mx-auto'
                            >
                                <div className='rounded-lg  gap-3 flex flex-row items-start transition duration-300 text-center'>
                                    <PhoneCall className='size-8' />
                                    <div className='flex flex-col items-start gap-0'>
                                        <h3 className='text-xl text-muted-foreground font-medium'>Call Me</h3>
                                        <p className='text-xl font-semibold'>+91 9771570572</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
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
                            delay={0.3}
                        >
                            <div
                                className='mt-8 items-center flex mx-auto'
                            >
                                <div className='rounded-lg  gap-3 flex flex-row items-start transition duration-300 text-center'>
                                    <MapPin className='size-8' />
                                    <div className='flex flex-col items-start gap-0'>
                                        <h3 className='text-xl text-muted-foreground font-medium'>My Address</h3>
                                        <p className='text-xl font-semibold'>Nalanda, (India) 803109</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
                {/* Right side */}
                <AnimatedContent
                    distance={100}
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
                    <div
                        className='flex flex-col justify-center items-start'
                    >

                        <div
                            className="flex items-center gap-4 w-full"
                        >
                            <form className="w-full space-y-8" onSubmit={handleSubmit} noValidate>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                                        <input placeholder="Your name*" type="text" value={name} onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: "" })); }} id="name" name="name" className="w-full mt-1 p-4 border rounded-xl border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9330]" required />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm">{errors.name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
                                        <input placeholder="Your email*" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: "" })); }} id="email" name="email" className="w-full mt-1 p-4 border rounded-xl border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9330]" required />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm">{errors.email}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                                        <input placeholder="Your number" type="tel" value={phone} onChange={(e) => { setPhone(e.target.value); setErrors(prev => ({ ...prev, phone: "" })); }} id="phone" name="phone" className="w-full mt-1 p-4 border rounded-xl border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9330]" />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm">{errors.phone}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                                        <input placeholder="Your subject" type="text" value={subject} onChange={(e) => { setSubject(e.target.value); setErrors(prev => ({ ...prev, subject: "" })); }} id="subject" name="subject" className="w-full mt-1 p-4 border rounded-xl border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9330]" />
                                        {errors.subject && (
                                            <p className="text-red-500 text-sm">{errors.subject}</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 mt-8">Your Message</label>
                                    <textarea placeholder="Type your message*" value={message} onChange={(e) => { setMessage(e.target.value); setErrors(prev => ({ ...prev, message: "" })); }} id="message" name="message" className="w-full mt-1 p-4 border rounded-xl border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9330] resize-none h-48" required />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm">{errors.message}</p>
                                    )}
                                </div>
                                <button disabled={isSubmitting} type="submit" className="cursor-pointer mx-auto flex items-center justify-center bg-[#FFB646] border border-black rounded-xl px-8 py-4 hover:bg-[#FFB646]/90  max-w-max gap-4">{isSubmitting ? <span className="flex items-center flex-row justify-center gap-1"><Spinner /> Sending...</span> : "Send Message"}<Send className="text-center" size={16} /></button>
                            </form>
                        </div>

                    </div>
                </AnimatedContent>
            </div>
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
                    <div
                        className='mt-12 items-center justify-center flex mx-auto'
                    >
                        <div className='rounded-lg items-center gap-6 flex flex-row transition duration-300 text-center'>
                            <div className="w-18 h-[1.2px] bg-black" />
                            <p className='text-xl md:text-2xl font-semibold'>Follow Me</p>
                            <a href="https://github.com/gauravkr-dev" target="_blank" rel="noopener noreferrer" className='text-sm flex items-center gap-1'>
                                <img src="/Github.svg" alt="GitHub" className='h-7.5 w-7.5' />
                            </a>
                            <a href="https://www.linkedin.com/in/gaurav474/" target="_blank" rel="noopener noreferrer" className='text-sm flex items-center gap-1'>
                                <img src="/Linkedin.svg" alt="LinkedIn" className='h-8 w-8' />
                            </a>
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    )
}

export default ContactSection

