import React from 'react';
import { render } from 'testUtils';
import App from './App';

test('snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

test('h1 class', () => {
  const { container } = render(<App />);
  const h1 = container.querySelector('h1');
  expect(h1.classList.contains('App_heading')).toBe(true);
});

test('jest-extended', () => {
  expect(true).toBeTrue();
});
