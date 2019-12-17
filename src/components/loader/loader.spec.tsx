import { render } from '@testing-library/react';
import React from 'react';

import { Loader } from './loader';

describe('loader', () => {
  it('matches snapshot', () => {
    const loader = <Loader loading loadingText={'test'} />;
    const { container } = render(loader);
    expect(container.firstChild).toMatchSnapshot();
  });
});
