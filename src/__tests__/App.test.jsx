import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('adds new todo item to the list', () => {
  window.localStorage.clear();
  render(<App />);
  const input = screen.getByLabelText(/new item/i);
  fireEvent.change(input, { target: { value: 'Write tests' } });
  const button = screen.getByRole('button', { name: /add/i });
  fireEvent.click(button);
  expect(screen.getByText('Write tests')).toBeInTheDocument();
});
