import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import background1 from "./assets/images/body_background.jpg";
import background2 from "./assets/images/body_background2.jpg";

function App() {
	return (
		<div className="app">
			<img src={background1} alt="Closeup of a blooming Cherry Blossom tree" className="app__background" />
			<img
				src={background2}
				alt="Snowy forest landscape"
				className="app__background app__background--wide"
			/>
			<HomePage />
		</div>
	);
}

export default App;
