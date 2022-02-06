import { render } from '@testing-library/react';

import Layout from './Layout';

describe('Layout', () => {
  it('renders contents', () => {
    const { getByText } = render((
      <Layout>
        <p>this is content</p>
      </Layout>
    ));

    expect(getByText('this is content')).not.toBeNull();
  });
});
