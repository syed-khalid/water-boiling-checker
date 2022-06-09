import { useTemp } from "../../context/TempContext";

const TemperatureInput = ({
	value,
	type,
	scaleType,
	setScaleType,
	updater,
}) => {
	const { setTemperature, converter } = useTemp();

	const typeScale = {
		c: "Celsius",
		f: "Fahrenheit",
	};

	const onChangeHandler = (event) => {
		console.log(value, type, converter);
		setTemperature(event.target.value);
		setScaleType(type);
		updater(event.target.value);
	};

	return (
		<>
			<p>{typeScale[type]}</p>
			<input
				value={scaleType === type ? value : converter}
				type='text'
				placeholder={typeScale[type]}
				onChange={onChangeHandler}
			/>
		</>
	);
};

export default TemperatureInput;
