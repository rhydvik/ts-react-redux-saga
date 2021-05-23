import React from 'react';

import { render } from './render';
import SignIn from '../views/signin';

test('renders without crashing', () => {
  render(<SignIn />);
});
