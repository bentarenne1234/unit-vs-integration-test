import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App component', () => {
  test('renders title in black by default', () => {
    render(<App />);
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement.style.color).toBe('black');
  });
  
  
  test('renders title in red when the user clicks the red button', async () => {
    const user = userEvent.setup();
  
    // Given
    render(<App />);
  
    // When
    const redButtonElement = screen.getByRole('button', { name: 'Click me red!' });
    await user.click(redButtonElement);
  
    // Then
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement.style.color).toBe('red');
  });
  
  test('renders title in blue when the user clicks the blue button', async () => {
    const user = userEvent.setup();
  
    // Given
    render(<App />);
  
    // When
    const blueButtonElement = screen.getByRole('button', { name: 'Click me blue!' });
    await user.click(blueButtonElement);
  
    // Then
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement.style.color).toBe('blue');
  });
});

