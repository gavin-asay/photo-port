import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('contact form', () => {
	it('renders', () => {
		render(<ContactForm></ContactForm>);
	});

	it('matches snapshot', () => {
		const { asFragment } = render(<ContactForm></ContactForm>);

		expect(asFragment()).toMatchSnapshot();
	});

	it('matches text content', () => {
		const { getByTestId } = render(<ContactForm></ContactForm>);

		expect(getByTestId('contact-me')).toHaveTextContent('Contact Me');
	});

	it('matches submit button', () => {
		const { getByTestId } = render(<ContactForm></ContactForm>);

		expect(getByTestId('submit')).toHaveTextContent('Submit');
	});
});
