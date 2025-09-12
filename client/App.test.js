import { render, screen } from '@testing-library/react';
import WorkoutTrackerLanding from './App';

test('renders landing page hero title', () => {
  const { container } = render(<WorkoutTrackerLanding />);
  expect(screen.getByText(/Train Smarter,/i)).toBeInTheDocument();
  expect(screen.getByText(/Not Harder/i)).toBeInTheDocument();
});