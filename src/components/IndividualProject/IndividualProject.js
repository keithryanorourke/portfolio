import "./IndividualProject.scss";
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
				<img src={githubIcon} alt="GitHub icon" />
			</a>
			<div className="overflow-container">
				<article
					className={
						"single-project" +
						(first ? " single-project--first" : "")
					}>
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className="single-project__link">
						<h3 className="single-project__title">{name}</h3>
						<img
							src={thumbnail}
							alt=""
							className="single-project__thumbnail"
						/>
					</a>
					<p className="single-project__copy">{description}</p>
					<section className="tech-stack">
						<h4 className="tech-stack__title">Tech Stack</h4>
						<div className="tech-stack__container">
							{stack.map((tool) => (
								<img
									className="tech-stack__icon"
									src={`https://skillicons.dev/icons?i=${tool}`}
									alt={`${tool} icon`}></img>
							))}
						</div>
					</section>
				</article>
			</div>
		</>
	);
};

export default IndividualProject;
