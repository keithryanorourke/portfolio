import './ProjectsSection.scss'
import liftBookThumbnail from "../../assets/liftBookCapture.png"
import IndividualProject from '../IndividualProject/IndividualProject'
import SectionTitle from '../SectionTitle/SectionTitle'

const ProjectsSection = () => {
  return (
    <section className="projects">
      <SectionTitle title='Projects' />
      <div className="projects__container">
        <IndividualProject
          thumbnail={liftBookThumbnail}
          link='https://liftbook.ca'
          name='liftBook'
        />
      </div>
    </section>
    
  )
}

export default ProjectsSection