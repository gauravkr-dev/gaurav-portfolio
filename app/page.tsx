import React from 'react'
import HeroSection from './_components/HeroSection'
import ServiceSection from './_components/ServiceSection'
import AboutSection from './_components/AboutSection'
import SkillSection from './_components/SkillSection'
import ProjectSection from './_components/ProjectSection'
import EducationSection from './_components/EducationSection'
import { TestimonialsSection } from './_components/TestimonialSection'

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
    </div>
  )
}

export default page
