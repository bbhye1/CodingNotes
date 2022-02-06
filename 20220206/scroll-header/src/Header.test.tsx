import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('renders Logo and menu', () => {
    const { container } = render((<Header />));

    expect(container).toHaveTextContent('Logo');

    expect(container).toHaveTextContent('menu1');
    expect(container).toHaveTextContent('menu2');
    expect(container).toHaveTextContent('menu3');
  });
});
