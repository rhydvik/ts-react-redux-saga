import React from 'react';
import { act, fireEvent, screen } from '@testing-library/react';

import { render } from './render';
import SignIn from '../views/signin';

test('renders without crashing', () => {
	render(<SignIn />);
});

test('renders sign in form', () => {
	render(<SignIn />);
	expect(screen.getByTestId('signInForm')).toBeInTheDocument();
	expect(screen.getByTestId('email')).toBeInTheDocument();
	expect(screen.getByTestId('password')).toBeInTheDocument();
	expect(screen.getByTestId('submit')).toBeInTheDocument();
});

describe('form behaviour', () => {
	it('validate user inputs, and provides error messages', async () => {
		const { getByTestId, getByText } = render(<SignIn />);

		await act(async () => {
			fireEvent.change(screen.getByTestId(/email/i), {
				target: { value: '' },
			});

			fireEvent.change(screen.getByTestId(/password/i), {
				target: { value: '' },
			});
		});

		await act(async () => {
			fireEvent.submit(getByTestId('signInForm'));
		});

		expect(getByText('Email is required.')).toBeInTheDocument();
		expect(getByText('Password is required.')).toBeInTheDocument();
	});

	it('should submit when form inputs contain text', async () => {
		const { getByTestId, queryByText } = render(<SignIn />);

		await act(async () => {
			fireEvent.change(screen.getByTestId(/email/i), {
				target: { value: 'vikram@gmail.com' },
			});

			fireEvent.change(screen.getByTestId(/password/i), {
				target: { value: 'Test123!' },
			});
		});

		await act(async () => {
			fireEvent.submit(getByTestId('signInForm'));
		});

		expect(queryByText('Email is required.')).not.toBeInTheDocument();
		expect(queryByText('Password is required.')).not.toBeInTheDocument();
	});

	it('should throw an error if valid email is not required', async () => {
		const { getByTestId, queryByText } = render(<SignIn />);
		await act(async () => {
			fireEvent.change(screen.getByTestId(/email/i), {
				target: { value: 'vikram' },
			});
			fireEvent.change(screen.getByTestId(/password/i), {
				target: { value: 'Test123!' },
			});
		});
		await act(async () => {
			fireEvent.submit(getByTestId('signInForm'));
		});
		expect(queryByText('email must be a valid email')).toBeInTheDocument();
	});

	it('should show an loader if credentials are valid', async () => {
		const { getByTestId, queryByText } = render(<SignIn />);
		await act(async () => {
			fireEvent.change(screen.getByTestId(/email/i), {
				target: { value: 'vikram@yopmail.com' },
			});
			fireEvent.change(screen.getByTestId(/password/i), {
				target: { value: 'Test123!' },
			});
		});
		await act(async () => {
			fireEvent.submit(getByTestId('signInForm'));
		});
		expect(queryByText('Loading...')).toBeInTheDocument();
	});
});
