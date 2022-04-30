import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import { render } from './render';
import Dashboard from '../views/dashboard';

test('renders without crashing', () => {
	render(<Dashboard />);
});

test('render sign in link and navigate', () => {
	render(<Dashboard />);
	expect(screen.getByText(/Go back to Sign in/i)).toBeInTheDocument();

	userEvent.click(screen.getByText(/Go back to Sign in/i));

	expect(screen.getByText(/sign in/i));
});
