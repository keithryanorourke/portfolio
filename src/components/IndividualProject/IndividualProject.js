import "./IndividualProject.scss";
import TechStack from "../TechStack/TechStack";
import githubIcon from "../../assets/icons/github-icon.png";

const IndividualProject = ({
	thumbnail,
	link,
	name,
	description,
	badge,
	github,
	stack,
	first,
}) => {
	return (
		<>
			<span
				className={
					"single-project__badge" +
					(badge === "Full Stack"
						? " single-project__badge--fullstack"
						: badge === "Front End"
						? " single-project__badge--frontend"
						: " single-project__badge--backend")
				}>
				{badge}
			</span>
			<a
				href={github}
				className="single-project__github"
				target="_blank"
				rel="noreferrer">
				<img src="https://skillicons.dev/icons?i=github" alt="GitHub icon" />
			</a>
			<div className="overflow-container">
				<article
					className={
						"single-project" +
						(first ? " single-project--first" : "")
					}>
					<img
						className="single-project__thumbnail"
						src={thumbnail}
						alt={`${name} preview`}
					/>
					<div className="single-project__overlay"></div>
					<div className="single-project__content-container">
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className="single-project__link">
						<h3 className="single-project__title">{name}</h3>
					</a>
						<p className="single-project__copy">{description}</p>
						<TechStack stack={stack} />
					</div>
				</article>
			</div>
		</>
	);
};

export default IndividualProject;
