"use client"
import React from 'react'
import AnimatedContent from './AnimateVerticleContent'



const ServiceSection = () => {
    return (
        <section id="services" className='bg-white px-4 md:px-12 py-16 mb-6'>
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
                    <div className='text-[#FF9330] font-bold text-lg mb-6'>Services</div>
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
                    delay={0.2}
                >
                    <div
                        className="relative flex items-center gap-4 ml-2"
                    >
                        <div className='absolute md:h-18 md:w-18 w-12 h-12 rounded-full bg-[#FFB646] -left-4 -top-2 z-0 pointer-events-none' />
                        <h1 className="text-4xl md:text-6xl font-bold text-black-800 relative z-10">
                            My specialties
                        </h1>
                    </div>
                </AnimatedContent>

            </div>
            <div
            >
                <div
                    className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-18'
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
                        <div className=' w-full p-4 rounded-lg  gap-6 flex flex-col transition duration-300 border border-orange-500 hover:bg-orange-50 hover:border-orange-500/50 hover:translate-y-[-2px]'>
                            <div className='flex items-start gap-3 text-orange-500 text-xl font-bold'>
                                <svg className='flex-shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" /><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" /></g></svg>
                                <p className='text-black'>Full-Stack Web Development</p>
                            </div>
                            <div>
                                <p>I build complete web applications from start to finish, handling both client-side and server-side logic. My focus is on creating fast, scalable, and reliable solutions that solve real business problems.
                                </p>
                            </div>
                        </div>

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
                        delay={0.4}
                    >
                        <div className=' w-full p-4 rounded-lg  gap-6 flex flex-col transition duration-300 border border-orange-500 hover:bg-orange-50 hover:border-orange-500/50 hover:translate-y-[-2px]'>
                            <div className='flex items-start gap-3 text-orange-500 text-xl font-bold'>
                                <svg className='flex-shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" /><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" /></g></svg>
                                <p className='text-black'>Frontend Development (UI/UX)</p>
                            </div>
                            <div>
                                <p>I design and develop responsive and visually appealing user interfaces with a strong focus on usability. Every interface is optimized for smooth interaction and consistent experience across all devices.
                                </p>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
            <div
            >
                <div
                    className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-12'
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
                        delay={0.4}
                    >
                        <div className=' w-full p-4 rounded-lg  gap-6 flex flex-col transition duration-300 border border-orange-500 hover:bg-orange-50 hover:border-orange-500/50 hover:translate-y-[-2px]'>
                            <div className='flex items-start gap-3 text-orange-500 text-xl font-bold'>
                                <svg className='flex-shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" /><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" /></g></svg>
                                <p className='text-black'>Backend Development & API Integration</p>
                            </div>
                            <div>
                                <p>I develop secure and efficient backend systems that manage data, logic, and integrations. My goal is to ensure smooth performance, structured architecture, and seamless communication within applications.
                                </p>
                            </div>
                        </div>
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
                        delay={0.6}
                    >
                        <div className=' w-full p-4 rounded-lg  gap-6 flex flex-col transition duration-300 border border-orange-500 hover:bg-orange-50 hover:border-orange-500/50 hover:translate-y-[-2px]'>
                            <div className='flex items-start gap-3 text-orange-500 text-xl font-bold'>
                                <svg className='flex-shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" /><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" /></g></svg>
                                <p className='text-black'>Website Deployment & Optimization</p>
                            </div>
                            <div>
                                <p>I implement secure authentication systems and handle the complete deployment process. I ensure applications are optimized for performance, stability, and ready for real-world usage.
                                </p>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection
