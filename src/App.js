import { useState } from "react";
import "./App.css";

import BoilingVerdict from "./components/boilingVerdict/boilingVerdict.component";
import TemperatureInput from "./components/temperatureInput/temperatureInput.component";

// Todo: Next make it so that when celsius is entered it should also show converted fahrenheit value and vice versa

function App() {
	const [temperature, setTemperature] = useState(0);
	const [scaleType, setScaleType] = useState("c");

	return (
		<div className='App'>
			<h1>Enter your temperature:</h1>
			<TemperatureInput
				type='c'
				setTemperature={setTemperature}
				setScaleType={setScaleType}
			/>
			<TemperatureInput
				type='f'
				setTemperature={setTemperature}
				setScaleType={setScaleType}
			/>

			<BoilingVerdict
				scaleType={scaleType}
				temperature={parseInt(temperature)}
			/>
		</div>
	);
}

export default App;

