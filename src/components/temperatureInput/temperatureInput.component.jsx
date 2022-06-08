const TemperatureInput = ({ type, setTemperature, setScaleType }) => {
	const scaleType = {
		c: "Celsius",
		f: "Fahrenheit",
	};

	return (
		<>
			<p>{scaleType[type]}</p>
			<input
				type='text'
				placeholder={scaleType[type]}
				onChange={(event) => {
					setTemperature(event.target.value);
					setScaleType(type);
				}}
			/>
		</>
	);
};

export default TemperatureInput;
