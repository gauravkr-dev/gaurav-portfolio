import React from 'react'
import HeroSection from './_components/HeroSection'
import ServiceSection from './_components/ServiceSection'
import AboutSection from './_components/AboutSection'
import SkillSection from './_components/SkillSection'
import ProjectSection from './_components/ProjectSection'
import EducationSection from './_components/EducationSection'
import { TestimonialsSection } from './_components/TestimonialSection'
import { PricingSection } from './_components/PricingSection'
import ContactSection from './_components/ContactSection'

const page = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <EducationSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
    </div>
  )
}

export default page
