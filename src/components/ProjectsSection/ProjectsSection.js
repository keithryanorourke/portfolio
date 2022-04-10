import "./ProjectsSection.scss";
import liftBookThumbnail from "../../assets/images/liftBookCapture.png";
import shapeMakerthumbnail from "../../assets/images/ShapeMakerCapture.png";
import IndividualProject from "../IndividualProject/IndividualProject";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useState } from "react";

const ProjectsSection = () => {
	const [projectIndex, setProjectIndex] = useState(0);
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
				{projectIndex > 0 ? (
					<button className="projects__button projects__button--left" onClick={() => setProjectIndex(projectIndex - 1)}></button>
				) : null}
				{projectsArray[projectIndex]}
				{projectIndex < projectsArray.length - 1 ? (
					<button className="projects__button projects__button--right" onClick={() => setProjectIndex(projectIndex + 1)}></button>
				) : null}
			</div>
		</section>
	);
};

export default ProjectsSection;
