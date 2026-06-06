"use client"
import { CalendarDays, Send } from 'lucide-react'
import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import { toast } from 'sonner';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
        <section id="contact" className='mt-12'>
            <div className="flex items-center justify-between mb-8">
                <p className="text-muted-foreground" style={{ fontFamily: "var(--font-geist-mono)" }}>
                    Contact Me
                </p>
                <a href="https://cal.com/gaurav-kumar-dev/web-development-consultation" className="mt-12 inline-flex items-center gap-2 text-sm text-primary rounded-lg border border-border px-4 py-2 transition-colors hover:bg-primary/10" target="_blank" rel="noopener noreferrer">
                    <CalendarDays className="size-4" />
                    Schedule a meeting
                </a>
            </div>
            <div
                className="flex items-center flex-col gap-4 w-full border border-border rounded-xl p-4 sm:p-8 mb-12"
            >
                <div className="w-full mt-4 mb-4">
                    <label htmlFor="name" className="block text-sm  mb-1">To</label>
                    <Input disabled value="gauravlabs.dev@gmail.com" />
                </div>
                <form className="w-full space-y-8" onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
                        <div>
                            <label htmlFor="name" className={`block text-sm ${errors.name ? "text-red-500" : ""}`}>Your Name*</label>
                            <Input placeholder="Gaurav Kumar" type="text" value={name} onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: "" })); }} id="name" name="name" className="w-full mt-1 p-4" required />
                        </div>
                        <div>
                            <label htmlFor="email" className={`block text-sm ${errors.email ? "text-red-500" : ""}`}>Your Email*</label>
                            <Input placeholder="your.email@example.com" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: "" })); }} id="email" name="email" className="w-full mt-1 p-4" required />
                        </div>

                        <div>
                            <label htmlFor="phone" className={`block text-sm ${errors.phone ? "text-red-500" : ""}`}>Phone</label>
                            <Input placeholder="+91 977 157 0572" type="tel" value={phone} onChange={(e) => { setPhone(e.target.value); setErrors(prev => ({ ...prev, phone: "" })); }} id="phone" name="phone" className="w-full mt-1 p-4" />

                        </div>
                        <div>
                            <label htmlFor="subject" className={`block text-sm ${errors.subject ? "text-red-500" : ""}`}>Subject</label>
                            <Input placeholder="What's on your mind?" type="text" value={subject} onChange={(e) => { setSubject(e.target.value); setErrors(prev => ({ ...prev, subject: "" })); }} id="subject" name="subject" className="w-full mt-1 p-4" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className={`block text-sm ${errors.message ? "text-red-500" : ""}`} >Your Message*</label>
                        <Textarea placeholder="Describe your project, ask something or just say hello!" value={message} onChange={(e) => { setMessage(e.target.value); setErrors(prev => ({ ...prev, message: "" })); }} id="message" name="message" className="w-full mt-1 p-4 resize-none h-48" required />
                    </div>
                    <div className="flex justify-end">
                        <Button disabled={isSubmitting}
                            type="submit"
                            variant="outline"
                            className="cursor-pointer flex items-center justify-center rounded-lg gap-2 py-5 px-6">
                            {isSubmitting ? <span className="flex items-center flex-row justify-center gap-1"><Spinner /> Sending...</span> : <span className="flex items-center flex-row justify-center gap-1"><Send size={16} /> Send</span>}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactSection

