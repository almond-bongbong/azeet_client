import React from 'react';
import { render } from '@testing-library/react';
import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';

describe('ButtonGroup', () => {
  it('matches snapshot', () => {
    const utils = render(<ButtonGroup>button</ButtonGroup>);

    expect(utils.container).toMatchSnapshot();
  });

  it('button group has gutter', () => {
    const { getByText, getAllByTestId } = render(
      <ButtonGroup>
        <Button text="1" />
        <Button text="2" />
      </ButtonGroup>,
    );

    getByText('1');
    getByText('2');
    expect(getAllByTestId('button-wrap')[1]).toHaveStyle('margin-left: 10px');
  });
});
