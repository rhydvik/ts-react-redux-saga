import React from 'react';

import { render } from './render';
import App from '../App';

test('renders without crashing', () => {
	render(<App />);
});
