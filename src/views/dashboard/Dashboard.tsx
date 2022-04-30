import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			<h1>This is dashboard</h1>
			<Link to="/sign-in">Go back to Sign in</Link>
		</div>
	);
};

export default Dashboard;
