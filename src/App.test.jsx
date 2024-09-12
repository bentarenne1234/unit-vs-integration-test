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

  test('renders title in black and then should render the title in blue when clicking ' +
    'blue button and then should put the title in red when clicking the red button', async () => {
      render(<App />);
      const titleElement = screen.getByRole('heading', { level: 1 });
      expect(titleElement.style.color).toBe('black');

      const blueButton = screen.getByRole('button', { name: 'Click me blue!' })

      await user.click(blueButton)

      expect(titleElement.style.color).toBe('blue');

      const redButton = screen.getByRole('button', { name: 'Click me red!' })

      await user.click(redButton)

      expect(titleElement.style.color).toBe('red');
    });
});

