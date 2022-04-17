import "./TechStack.scss";

const TechStack = ({ stack }) => {
	return (
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
	);
};

export default TechStack;
