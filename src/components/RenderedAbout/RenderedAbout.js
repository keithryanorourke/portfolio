import { useState, useEffect } from "react";
import "./RenderedAbout.scss";

const RenderedAbout = ({ nameInput, developerInput }) => {
	const [titleText, setTitleText] = useState("");
	const [p1Text, setP1Text] = useState("");
	const [p2Text, setP2Text] = useState("");
	const [p3Text, setP3Text] = useState("");
	const [span1Text, setSpan1Text] = useState("");
	const [textCursor, setTextCursor] = useState("title");

	

	useEffect(() => {
		// Create timer arrays on component mount
		const timeOutArray = [];
		const intervalArray = [];
		console.log(`Ah, I suppose you actually expected the RUN button to console log something, since it's written into the function and all... Well, here you go!`)
		console.log(`Hello!\nMy name is ${nameInput.value} and I am a ${developerInput.value} web developer!`)

		/**
	 *
	 * @param {string} initialState
	 * @param {string} content
	 * @param {function} setter
	 * @param {integer} interval
	 * @param {string} nextCursor
	 * @returns {number} time in ms to complete animation
	 */
		const animateString = (
			delayTime,
			content,
			setter,
			interval,
			nextCursor
		) => {
			let newString = "";
			let i = 0;
			timeOutArray.push(
				setTimeout(() => {
					const animationTimer = setInterval(() => {
						if (content[i]) {
							newString += content[i];
							setter(newString);
						}
						i++;
						if (i >= content.length || !content[i]) {
							clearInterval(animationTimer);
							setTextCursor(
								(prevState) => nextCursor || prevState
							);
						}
					}, interval);
					intervalArray.push(animationTimer);
				}, delayTime || 0)
			);
			return interval * content.length;
		};

		// Scroll user to top and render all text based on variables using animateString function
		document.querySelector(".app").scroll(0, 0);
		const splitName = nameInput.value.split(" ");
		const middlename =
			splitName.length === 3 ? splitName[1] || "Ryan" : "Ryan";
		let delayTime = 0;
		delayTime += animateString(0, "Hello!", setTitleText, 50, "p1");
		delayTime += animateString(
			delayTime + 300,
			`My name is ${
				nameInput.value ||
				"(Hm... Seems like someone left a field empty!)"
			} and I'm a ${
				developerInput.value ||
				"(Hm... Seems like someone left a field empty!)"
			} web developer!`,
			setP1Text,
			25,
			"p2"
		);
		delayTime += animateString(
			delayTime + 500,
			"My favorite thing about web development is the plethora of opportunities to collaborate with others. I'm very passionate about technology, education, and professional growth!",
			setP2Text,
			25,
			"p3"
		);
		delayTime += animateString(
			delayTime + 500,
			`By the way: I go by my middlename, ${middlename}! `,
			setP3Text,
			25,
			"span1"
		);
		animateString(delayTime + 500, "〜(￣▽￣〜)", setSpan1Text, 25, "");

		// Unmount cleanup to clear all setTimeouts and setIntervals
		return () => {
			for (let i = 0; i < timeOutArray.length; i++) {
				clearTimeout(timeOutArray[i]);
			}
			for (let i = 0; i < intervalArray.length; i++) {
				clearInterval(intervalArray[i]);
			}
		};
	}, [developerInput, nameInput]);

	return (
		<div className="rendered-about">
			<h3 className="rendered-about__subtitle">
				{titleText}
				{textCursor === "title" ? (
					<div className="rendered-about__text-cursor"></div>
				) : (
					""
				)}
			</h3>
			<p className="rendered-about__copy">
				{p1Text}
				{textCursor === "p1" ? (
					<span className="rendered-about__text-cursor"></span>
				) : (
					""
				)}
			</p>
			<p className="rendered-about__copy">
				{p2Text}
				{textCursor === "p2" ? (
					<span className="rendered-about__text-cursor"></span>
				) : (
					""
				)}
			</p>
			<p className="rendered-about__copy">
				{p3Text}
				{textCursor === "p3" ? (
					<span className="rendered-about__text-cursor"></span>
				) : (
					""
				)}
				<span className="rendered-about__face">
					{span1Text}
					{textCursor === "span1" ? (
						<span className="rendered-about__text-cursor"></span>
					) : (
						""
					)}
				</span>
			</p>
		</div>
	);
};

export default RenderedAbout;
