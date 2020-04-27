
// deps
import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import _ from "lodash";

// app
import { Pane, Text, Heading, Button } from "evergreen-ui";
import { Services, Queries, Loading } from "../index";

//
// Adultletics Admin / Views / Weeks / Weeks
//


export default function Weeks () {
	const { openPanel } = useContext( Services.UI );
	const { data, loading } = useQuery( Queries.drills.getAll );
	const workouts = _.get( data, "drills" );

	if ( loading ) return <Loading />;

	return (
		<>
			<Pane display="flex" justifyContent="flex-end">
				<Button iconBefore="plus" onClick={ () => openPanel({ panel: "drills/add" })}>Add</Button>
			</Pane>
			<Pane marginBottom={ 16 }>
				<Heading>All Workouts:</Heading>
			</Pane>
			<Pane>
				{ workouts && _.map( workouts, workout => {
					const { id, title } = workout;
					return ( 
						<Link to={ `/workouts/${ id }` } key={ id } style={{ marginBottom: "24px" }}>
							<Pane display="flex" elevation={ 1 } height={ 48 } alignItems="center" background="white" marginBottom={ 16 }>
								<Text marginLeft={ 24 }>{ title }</Text> 
							</Pane> 
						</Link>
					);
				})}
			</Pane>
		</>
	);
}
