import React from 'react';
import {render, screen} from '../../../../../testUtils/jest';
import {Button} from '../Button';

describe('Button', () => {
  it('Render Button component', () => {
    const {debug} = render(
      <Button title="Button Title" action={() => console.log()} />,
    );
    debug();
  });

  it('Should render right text when passed', async () => {
    const {debug} = render(
      <Button title="Button Title" action={() => console.log()} />,
    );
    await screen.findByRole('text');
    const textElement = screen.getByRole('text');
    expect(textElement).toBeTruthy();

    debug();
  });
});
