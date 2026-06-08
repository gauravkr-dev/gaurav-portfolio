"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="min-h-screen flex items-center justify-center mx-w-4xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center mt-8">
                <Image src="/page_not_found1.svg" alt="Error" width={300} height={300} className="mx-auto" />
                <h2 className="text-2xl font-semibold text-center mt-4">{"Oops! Page Not Found."}</h2>
                <p className="text-center mt-2 text-muted-foreground">

                    The page you&apos;re looking for doesn&apos;t exist
                    <br />
                    or has been moved.
                </p>
                <Button
                    onClick={() => router.push('/')}
                    className="mt-6 cursor-pointer group"
                    variant="outline"

                >
                    <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Go Home
                </Button>
            </div>
        </div>
    );
}