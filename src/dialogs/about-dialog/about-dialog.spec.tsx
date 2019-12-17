import { render } from '@testing-library/react';
import React from 'react';

import { AboutDialog } from './about-dialog';

describe('about dialog', () => {
  it('matches snapshot', () => {
    const aboutDialog = <AboutDialog onClose={() => {}} />;
    render(aboutDialog);
    expect(document.body.lastChild).toMatchSnapshot();
  });
});
