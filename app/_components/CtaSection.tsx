import PixelBlast from '@/components/PixelBlast'
import { Send } from 'lucide-react'
import React from 'react'
import AnimatedContent from './AnimateVerticleContent'


const CtaSection = () => {
    return (
        <section id="prices" className='bg-[#F5F5F5] px-4 md:px-12 py-16'>
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
                    <div className='text-[#FF9330] font-bold text-lg mb-6'>Take Action</div>
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
                            Bring Your Vision Online
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
                delay={0.2}
            >
                <div className='border border-orange-500 rounded-lg isolate relative mx-auto  md:w-3/4 overflow-hidden mt-18 md:h-[450px] h-[550px]'>
                    <PixelBlast
                        variant="square"
                        pixelSize={3}
                        color="#F97316"
                        patternScale={1}
                        patternDensity={1}
                        pixelSizeJitter={0}
                        enableRipples
                        rippleSpeed={0.3}
                        rippleThickness={0.1}
                        rippleIntensityScale={1.5}
                        liquid={false}
                        liquidStrength={0.12}
                        liquidRadius={1.2}
                        liquidWobbleSpeed={5}
                        speed={0.1}
                        edgeFade={0.15}
                        transparent
                        className="absolute inset-0 z-0 pointer-events-none"
                    />
                    <div className="absolute inset-0 z-10 flex items-center justify-center text-center bg-white/60 rounded-lg">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                                Your next big opportunity starts here.
                            </h2>
                            <p className="text-lg font-medium md:text-xl mb-8">
                                Your website should do more than just exist — it should attract clients, build trust, and grow your business around the clock. Let’s create a digital experience that truly represents your vision.
                            </p>

                            <a href="https://cal.com/gaurav-kumar-dev/web-development-consultation" className='inline-block text-lg font-medium bg-[#FFB646] border border-black rounded py-3 px-6 hover:bg-[#FFB646]/80 duration-300' target="_blank"
                                rel="noopener noreferrer">
                                Schedule a Free Call
                                <Send className='inline-block size-4 ml-2 text-orange-500' />
                            </a>
                            <div className='mt-12 font-medium flex flex-col  md:flex-row md:items-center md:justify-between px-4 md:px-12'>
                                <span className='flex items-center gap-2 text-orange-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" /><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" /></g></svg>
                                    <p className='text-black'>Smooth process</p>
                                </span>
                                <span className='flex items-center gap-2 text-orange-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" /><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" /></g></svg>
                                    <p className='text-black'>Fast delivery</p>
                                </span>
                                <span className='flex items-center gap-2 text-orange-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" /><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" /></g></svg>
                                    <p className='text-black'>High quality</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedContent>
        </section>
    )
}

export default CtaSection
