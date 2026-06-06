import React from 'react'
import HeroSection from './_components/Home/HeroSection'
import ServiceSection from './_components/ServiceSection'
import AboutSection from './_components/AboutSection'
import SkillSection from './_components/SkillSection'
import ProjectSection from './_components/ProjectSection'
import EducationSection from './_components/EducationSection'
import { TestimonialsSection } from './_components/TestimonialSection'
import { PricingSection } from './_components/WorkingStyle'
import ContactSection from './_components/ContactSection'
import Footer from './_components/Footer'
import CtaSection from './_components/CtaSection'
import Navbar from './_components/Navbar/Navbar'
import ExperienceView from './_components/Experience/experience-view'
import ProjectView from './_components/Projects/project-view'

const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* // Background pattern with radial gradient and opacity */}
      <div
        className="fixed inset-0 -z-10 h-screen"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 80%)',
          backgroundImage: 'radial-gradient(circle at 0.5px 0.5px, var(--primary) 0.5px, transparent 0)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 80%)',
          opacity: 0.4,
          pointerEvents: 'none'
        }}
        aria-hidden="true"
        role="presentation"
      />
      <Navbar />
      <HeroSection />
      <SkillSection />
      <ExperienceView />
      <ProjectView />
      <TestimonialsSection />
      {/* <ServiceSection />
      <AboutSection />
      <EducationSection /> */}

      {/* <ProjectSection />

      <PricingSection />
      <CtaSection />
      <ContactSection /> */}
      <Footer />
    </div>
  )
}

export default page
