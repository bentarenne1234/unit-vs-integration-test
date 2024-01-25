import { render, screen } from '@testing-library/react';
import { RedButton } from './RedButton';

test('renders the red button text', () => {
  render(<RedButton/>);
  const buttonTextElement = screen.getByText('Click me red!');
  expect(buttonTextElement).toBeInTheDocument();
});