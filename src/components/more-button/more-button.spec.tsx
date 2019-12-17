import { MenuItem } from '@blueprintjs/core';
import { render } from '@testing-library/react';
import React from 'react';

import { MoreButton } from './more-button';

describe('more button', () => {
  it('matches snapshot (full)', () => {
    const moreButton = (
      <MoreButton>
        <MenuItem>LOL 1</MenuItem>
        <MenuItem>LOL 2</MenuItem>
      </MoreButton>
    );

    const { container } = render(moreButton);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches snapshot (empty)', () => {
    const moreButton = <MoreButton>{null}</MoreButton>;

    const { container } = render(moreButton);
    expect(container.firstChild).toMatchSnapshot();
  });
});
