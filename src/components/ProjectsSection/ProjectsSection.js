import "./ProjectsSection.scss";
import liftBookThumbnail from "../../assets/images/liftBookCapture.png";
import shapeMakerthumbnail from "../../assets/images/ShapeMakerCapture.png";
import IndividualProject from "../IndividualProject/IndividualProject";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProjectsSection = () => {
	const projectsArray = [
		<IndividualProject
			thumbnail={liftBookThumbnail}
			link="https://liftbook.ca"
			name="liftBook"
			badge="Full Stack"
			description="liftBook is a full stack workout tracker built primarily using React, Express, and MySQL!"
			key="liftbook"
		/>,
		<IndividualProject
			thumbnail={shapeMakerthumbnail}
			link="https://shapemaker.app"
			name="ShapeMaker"
			badge="Front End"
			description="ShapeMaker is a fun, relaxing, turn your brain off and just make some shapes drawing app!"
			key="liftbook"
			last="true"
		/>,
	];

	return (
		<section id="projects" className="projects">
			<SectionTitle title="PROJECTS" />
			<div className="projects__container">
				{projectsArray.map((project) => project)}
			</div>
		</section>
	);
};

export default ProjectsSection;
