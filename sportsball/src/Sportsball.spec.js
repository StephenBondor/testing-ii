import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

describe('<App />', () => {
	it('keeps track of spotsball', () => {
		const {getByTestId} = render(<App />);
		const app = getByTestId('app');
		expect(app).toHaveClass('app');
	});
});
