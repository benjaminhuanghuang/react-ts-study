import { render } from '@testing-library/react';
import React from 'react';

import { ExternalLink } from './external-link';

describe('external link', () => {
  it('matches snapshot', () => {
    const externalLink = (
      <ExternalLink href={'http://test/'}>
        <div>hello world</div>
      </ExternalLink>
    );

    const { container } = render(externalLink);
    expect(container.firstChild).toMatchSnapshot();
  });
});
