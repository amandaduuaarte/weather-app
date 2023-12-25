import React from 'react';
import {render} from '../../../testUtils/jest';
import {Loading} from '..';

describe('Loading', () => {
  it('Render Loading component', () => {
    const {debug} = render(<Loading />);
    debug();
  });
});
