import "./ProjectsSection.scss";
import liftBookThumbnail from "../../assets/images/liftBookCapture.png";
import shapeMakerthumbnail from "../../assets/images/ShapeMakerCapture.jpg"
import IndividualProject from "../IndividualProject/IndividualProject";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProjectsSection = () => {
	// class Project {
	// 	constructor(thumbnail, link, name, description, github, stack) {
	// 		this.thumbnail = thumbnail;
	// 		this.link = link;
	// 		this.name = name;
	// 		this.description = description;
	// 		this.github = github;
	// 		this.stack = stack;
	// 	}

	// 	render() {
	// 		return <IndividualProject thumbnail={this.thumbnail} link={this.link} name={this.name} description ={this.description} />;
	// 	}
	// }

	const projectsArray = [
		<IndividualProject
			thumbnail={liftBookThumbnail}
			link="https://liftbook.ca"
			name="liftBook"
			description="liftBook is a full stack workout tracker built primarily using React, Express, and MySQL!"
			key="liftbook"
		/>,
		<IndividualProject
			thumbnail={shapeMakerthumbnail}
			link="https://shapemaker.app"
			name="ShapeMaker"
			description="ShapeMaker is a fun, relaxing, turn your brain off and just make some shapes drawing app!"
			key="liftbook"
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
