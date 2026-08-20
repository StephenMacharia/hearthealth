import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Cardio AI landing page', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /cardio ai/i, level: 1 });
  expect(heading).toBeInTheDocument();
});
