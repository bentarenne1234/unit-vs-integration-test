import { render, screen } from '@testing-library/react';
import { Title } from './Title';

describe('Title component', () => {
  test('renders the title text when the color is not provided', () => {
    render(<Title/>);
    const titleTextElement = screen.getByText(/This is the title with color:/i);
    expect(titleTextElement).toBeInTheDocument();
  });
  
  test('renders the title text when the color prop is provided', () => {
    render(<Title titleColor='light-blue-test-color'/>);
    const titleTextElement = screen.getByText(/This is the title with color: light-blue-test-color/i);
    expect(titleTextElement).toBeInTheDocument();
  });
});