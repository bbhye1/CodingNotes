import { render, screen } from '@testing-library/react';

import HomePage from '../pages/index';

test('App', () => {
  render(<HomePage />);

  screen.getByText(/Welcome/);
});
