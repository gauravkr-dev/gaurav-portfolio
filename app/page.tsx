import React from 'react'
import HeroSection from './_components/Home/HeroSection'
import SkillSection from './_components/SkillSection'
import { TestimonialsSection } from './_components/TestimonialSection'
import ContactSection from './_components/ContactSection'
import ExperienceView from './_components/Experience/experience-view'
import ProjectView from './_components/Projects/project-view'
import AnimatedContent from './_components/AnimateVerticleContent'

const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
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
        delay={0.1}
      >
        <HeroSection />
      </AnimatedContent>

      <SkillSection />
      <ExperienceView />
      <ProjectView />
      <TestimonialsSection />
      <ContactSection />

    </div>
  )
}

export default page
