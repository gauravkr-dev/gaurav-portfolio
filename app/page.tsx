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
import CtaSection from './_components/CtaSection'
import Navbar from './_components/Navbar/Navbar'
import ExperienceView from './_components/Experience/experience-view'
import ProjectView from './_components/Projects/project-view'

const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* // Background pattern with radial gradient and opacity */}

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
      <CtaSection /> */}
      <ContactSection />

    </div>
  )
}

export default page
