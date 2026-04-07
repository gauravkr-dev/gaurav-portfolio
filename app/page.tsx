import React from 'react'
import HeroSection from './_components/HeroSection'
import ServiceSection from './_components/ServiceSection'
import AboutSection from './_components/AboutSection'
import SkillSection from './_components/SkillSection'
import ProjectSection from './_components/ProjectSection'

const page = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
    </div>
  )
}

export default page
