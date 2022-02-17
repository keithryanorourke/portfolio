import { useState, useEffect } from "react"
import "./HomePage.scss"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection"
import ContactSection from "../../components/ContactSection/ContactSection"
import Header from "../../components/Header/Header"
import AboutSection from "../../components/AboutSection/AboutSection"


// Disable warning for incorrect usage of ${} since I'm intentionally trying to print ${} to the screen.
/* eslint-disable no-template-curly-in-string */ 


const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  )
}

export default HomePage