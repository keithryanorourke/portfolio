import { useState } from "react";
import "./AboutSection.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import RenderedAbout from "../RenderedAbout/RenderedAbout";

const AboutSection = () => {
	const [showText, setShowText] = useState(false);
	const [nameInput, setNameInput] = useState({
		value: "Keith Ryan O'Rourke",
		length: 19,
		style: { width: "19ch" },
	});
	const [developerInput, setDeveloperInput] = useState({
		value: "full stack",
		length: 10,
		style: { width: "10ch" },
	});
	const [loveInput, setLoveInput] = useState({
		value: "true",
		length: 5,
		style: { width: "5ch", color: "#a62100" },
	});

	const inputChangeHandler = (e, setter) => {
		if (e.target.name === "love") {
			if (e.target.value.length < 6) {
				const color =
					e.target.value === "true" || e.target.value === "false"
						? "#a62100"
						: "#000";
				setter({
					value: e.target.value,
					style: {
						width: e.target.value.length.toString() + "ch",
						color: color,
					},
				});
			}
			return;
		}
		if (e.target.value.length < 30) {
			setter({
				value: e.target.value,
				style: { width: e.target.value.length.toString() + "ch" },
			});
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (e.target.love.value !== "true") {
			alert("Lies!!");
		} else {
			setShowText(true);
		}
	};
	return (
		<section id="about" className="about">
			<div className="about__title-container">
				<SectionTitle title="ABOUT" />
				<SectionTitle title="ME" />
			</div>
			{!showText ? (
				<form onSubmit={submitHandler} className="about__codebox">
					<label className="about__code-label">
						<span className="about__declaration">const</span> myName
						={" "}
						<div className="about__input-wrapper">
							"
							<input
								type="text"
								style={nameInput.style}
								onChange={(e) =>
									inputChangeHandler(e, setNameInput)
								}
								name="myName"
								value={nameInput.value}
								className="about__input"
							/>
							"
						</div>
					</label>
					<label className="about__code-label">
						<span className="about__declaration">const</span> type ={" "}
						<div className="about__input-wrapper">
							"
							<input
								type="text"
								style={developerInput.style}
								onChange={(e) =>
									inputChangeHandler(e, setDeveloperInput)
								}
								name="developer"
								value={developerInput.value}
								className="about__input"
							/>
							"
						</div>
					</label>
					<label className="about__code-label">
						<span className="about__declaration">const</span>{" "}
						lovesCollaboration ={" "}
						<div className="about__input-wrapper">
							<input
								type="text"
								style={loveInput.style}
								onChange={(e) =>
									inputChangeHandler(e, setLoveInput)
								}
								name="love"
								value={loveInput.value}
								className="about__input"
							/>
						</div>
					</label>
					<div className="about__myPortfolio-container">
						<span className="about__code">
							<span className="about__declaration">const</span>
							<span className="about__function">
								{" "}
								renderAbout
							</span>
							{" = (nameStr, typeStr, bool) => {"}
						</span>
						<span className="about__code about__code--single-indent">
							<span className="about__declaration">if</span>
							{"(!bool) {"}
						</span>
						<span className="about__code about__code--double-indent">
							alert('Lies!!')
						</span>
						<span className="about__code about__code--single-indent">
							{"}"}
							<span className="about__declaration">
								{" "}
								else
							</span>{" "}
							{"{"}
						</span>
						<span className="about__code about__code--double-indent">
							console.<span className="about__function">log</span>
							{`(\`Hello!\\nMy name is \${nameStr} and I am a \${typeStr} web developer!\`)`}
						</span>
						<span className="about__code about__code--single-indent">
							{"}"}
						</span>
						<span className="about__code">{"}"}</span>
					</div>
					<span className="about__code">
						<span className="about__function">renderAbout</span>
						(myName, type, lovesCollaboration)
					</span>
					<div className="about__button-container">
						<p className="about__hint">
							(Try changing the glowing text before hitting RUN!)
						</p>
						<button className="about__submit">RUN</button>
					</div>
				</form>
			) : (
				<RenderedAbout
					nameInput={nameInput}
					developerInput={developerInput}
				/>
			)}
		</section>
	);
};

export default AboutSection;
