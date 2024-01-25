import { render, screen } from '@testing-library/react';
import { BlueButton } from './BlueButton';

test('renders the blue button text', () => {
  render(<BlueButton/>);
  const buttonTextElement = screen.getByText('Click me blue!');
  expect(buttonTextElement).toBeInTheDocument();
});