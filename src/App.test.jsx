import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

let user;

describe('App component', () => {
  beforeEach(() => {
    user = userEvent.setup();
  })

  test('renders title in black by default', () => {
    render(<App />);
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement.style.color).toBe('black');
  });


  test('renders title in red when the user clicks the red button', async () => {
    // Arrange
    render(<App />);
    const redButtonElement = screen.getByRole('button', { name: 'Click me red!' });

    // Act
    await user.click(redButtonElement);

    // Assert
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement.style.color).toBe('red');
  });

  test('renders title in blue when the user clicks the blue button', async () => {
    // Arrange
    render(<App />);
    const blueButtonElement = screen.getByRole('button', { name: 'Click me blue!' });

    // Act

    await user.click(blueButtonElement);

    // Assert
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement.style.color).toBe('blue');
  });
});

