import React, { ReactElement, ReactNode } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { configStore } from '../redux-modules/store';

export const render = (ui: ReactElement, { ...renderOptions } = {}) => {
	const { store } = configStore();
	const Wrapper = ({ children }: { children?: ReactNode }) => (
		<Provider store={store}>
			<MemoryRouter>{children}</MemoryRouter>
		</Provider>
	);

	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
