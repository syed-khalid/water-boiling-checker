import React, { useState } from "react";
import "./App.css";

import BoilingVerdict from "./components/boilingVerdict/boilingVerdict.component";
import TemperatureInput from "./components/temperatureInput/temperatureInput.component";
import { useTemp } from "./context/TempContext";

// Todo: Next make it so that when celsius is entered it should also show converted fahrenheit value and vice versa

function App() {
	const { temperature, toCelsius, toFahrenheit } = useTemp();
	const [scaleType, setScaleType] = useState("c");

	console.log(temperature);
	return (
		<div className='App'>
			<h1>Enter your temperature:</h1>
			<TemperatureInput
				value={temperature}
				scaleType={scaleType}
				type='c'
				setScaleType={setScaleType}
				updater={toFahrenheit}
			/>
			<TemperatureInput
				value={temperature}
				scaleType={scaleType}
				type='f'
				setScaleType={setScaleType}
				updater={toCelsius}
			/>

			<BoilingVerdict temperature={parseInt(temperature)} />
		</div>
	);
}

export default App;

