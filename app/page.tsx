import React from 'react'
import HeroSection from './_components/HeroSection'
import ServiceSection from './_components/ServiceSection'
import AboutSection from './_components/AboutSection'
import SkillSection from './_components/SkillSection'
import ProjectSection from './_components/ProjectSection'
import EducationSection from './_components/EducationSection'
import { TestimonialsSection } from './_components/TestimonialSection'
import { PricingSection } from './_components/WorkingStyle'
import ContactSection from './_components/ContactSection'
import { Footer } from './_components/Footer'
import CtaSection from './_components/CtaSection'

const page = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <EducationSection />
      <SkillSection />
      <ProjectSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page
