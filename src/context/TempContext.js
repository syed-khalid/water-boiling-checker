import React, { useState, createContext, useContext } from "react";

export const temperatureContext = createContext();

export function useTemp() {
	return useContext(temperatureContext);
}

const ContextProvider = ({ children }) => {
	const [temperature, setTemperature] = useState(0);
	const [converter, setConverter] = useState(0);
	const value = {
		temperature,
		setTemperature,
		converter,
		toCelsius,
		toFahrenheit,
	};

	function toCelsius(temperature) {
		return setConverter(((temperature - 32) * 5) / 9);
	}

	function toFahrenheit(temperature) {
		return setConverter((temperature * 9) / 5 + 32);
	}

	return (
		<temperatureContext.Provider value={value}>
			{children}
		</temperatureContext.Provider>
	);
};

export default ContextProvider;
