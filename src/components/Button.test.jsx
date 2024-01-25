import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders a button', () => {
  render(<Button/>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('renders the button text when the color text prop is not provided', () => {
  render(<Button/>);
  const buttonTextElement = screen.getByText(/Click me !/i);
  expect(buttonTextElement).toBeInTheDocument();
});

test('renders the button text when the color text prop is provided', () => {
  render(<Button buttonText='PLEASE!!'/>);
  const buttonTextElement = screen.getByText(/Click me PLEASE!!!/i);
  expect(buttonTextElement).toBeInTheDocument();
});