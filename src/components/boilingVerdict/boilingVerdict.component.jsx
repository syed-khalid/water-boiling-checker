const BoilingVerdict = ({ temperature, scaleType }) => {
	if (scaleType === "c") {
		if (temperature >= 100) {
			return (
				<>
					<h3>Water will boil at this temperature</h3>
				</>
			);
		}
		return (
			<>
				<h3>Water will not boil at this temperature</h3>
			</>
		);
	}
	if (scaleType === "f") {
		if (temperature >= 212) {
			return (
				<>
					<h3>Water will boil at this temperature</h3>
				</>
			);
		}
		return (
			<>
				<h3>Water will not boil at this temperature</h3>
			</>
		);
	}
};

export default BoilingVerdict;
