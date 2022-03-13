import "./HomePage.scss"
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection"
import ContactSection from "../../components/ContactSection/ContactSection"
import Header from "../../components/Header/Header"
import AboutSection from "../../components/AboutSection/AboutSection"

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