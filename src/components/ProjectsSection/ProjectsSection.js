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
			description="liftBook is a full stack workout tracker! Customizable and powerful, liftBook is made for trainees of all levels!"
			github="https://github.com/keithryanorourke/liftBook"
			stack={[
				"html",
				"css",
				"scss",
				"js",
				"react",
				"nodejs",
				"express",
				"mysql",
				"aws",
				"nginx",
				"linux",
			]}
			key="liftbook"
			first={true}
		/>,
		<IndividualProject
			thumbnail={shapeMakerthumbnail}
			link="https://shapemaker.app"
			name="ShapeMaker"
			badge="Front End"
			description="ShapeMaker is a fun, relaxing, turn your brain off and just make some shapes drawing app!"
			github="https://github.com/keithryanorourke/shapeMaker"
			stack={["html", "css", "scss", "js"]}
			key="ShapeMaker"
			last="true"
		/>,
	];

	return (
		<section id="projects" className="projects">
			<SectionTitle title="PROJECTS" />
			<div className="projects__container">
				{projectsArray[projectIndex]}
				<div className="projects__button-container">
					<button
						className={
							"projects__button projects__button--left" +
							(projectIndex ? " projects__button--enabled" : "")
						}
						disabled={projectIndex ? false : true}
						onClick={() =>
							setProjectIndex(projectIndex - 1)
						}></button>
					<button
						className={
							"projects__button projects__button--right" +
							(projectIndex < projectsArray.length - 1
								? " projects__button--enabled"
								: "")
						}
						disabled={
							projectIndex < projectsArray.length - 1
								? false
								: true
						}
						onClick={() =>
							setProjectIndex(projectIndex + 1)
						}></button>
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
