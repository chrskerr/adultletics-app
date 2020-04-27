
// deps
import React from "react";
import PropTypes from "prop-types";

// app
import { Pane, Text } from "evergreen-ui";

//
// Adultletics Admin / Views / Workout / Workout
//


export default function Workout ( props ) {
	const { id } = props;

	return (
		<>
			<Pane>
				<Text>{ id }</Text>
			</Pane>
		</>
	);
}
Workout.propTypes = {
	id: PropTypes.string,
};