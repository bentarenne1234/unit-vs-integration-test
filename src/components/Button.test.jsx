import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import userEvent from '@testing-library/user-event'

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

test('invokes handleClick function when the user clicks on the button', async() => {
  const user = userEvent.setup();
  const handleClick = () => console.log("It has clicked!");
  render(<Button buttonText='yellow' handleClick={handleClick}/>);
  const button = screen.getByRole('button', { name: 'Click me yellow!' });
  await user.click(button);
  //expect(handleClick).toHaveBeenCalledTimes(1);

});
test('invokes handleClick (with mocked) function when the user clicks on the button', async() => {  
  const user = userEvent.setup();
  const mockedHandleClick = jest.fn();
  render(<Button buttonText='yellow' handleClick={mockedHandleClick}/>);
  const button = screen.getByRole('button', { name: 'Click me yellow!' });
  await user.click(button);
  expect(mockedHandleClick).toHaveBeenCalledTimes(1);

});