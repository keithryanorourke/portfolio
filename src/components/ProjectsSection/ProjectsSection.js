import './ProjectsSection.scss'
import liftBookThumbnail from "../../assets/images/liftBookCapture.png"
import IndividualProject from '../IndividualProject/IndividualProject'
import SectionTitle from '../SectionTitle/SectionTitle'

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects">
      <SectionTitle title='Projects' />
      <div className="projects__container">
        <IndividualProject
          thumbnail={liftBookThumbnail}
          link='https://liftbook.ca'
          name='liftBook'
          description="liftBook is a full stack workout tracker built primarily using React, Express, and MySQL!"
        />
      </div>
    </section>
    
  )
}

export default ProjectsSection