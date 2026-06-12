import React from 'react'
import HeroSection from './_components/Home/HeroSection'
import SkillSection from './_components/SkillSection'
import { TestimonialsSection } from './_components/TestimonialSection'
import ContactSection from './_components/ContactSection'
import ExperienceView from './_components/Experience/experience-view'
import ProjectView from './_components/Projects/project-view'

const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <HeroSection />
      <SkillSection />
      <ExperienceView />
      <ProjectView />
      <TestimonialsSection />
      <ContactSection />

    </div>
  )
}

export default page
