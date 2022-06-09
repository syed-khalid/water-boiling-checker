const BoilingVerdict = ({ temperature }) => {
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
};

export default BoilingVerdict;
