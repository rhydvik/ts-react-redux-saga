import React from 'react';

import { render } from './render';
import Dashboard from '../views/dashboard';

test('renders without crashing', () => {
  render(<Dashboard />);
});
