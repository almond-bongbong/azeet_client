import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from 'components/Checkbox/Checkbox';

describe('Checkbox', () => {
  it('matches snapshot', () => {
    const utils = render(<Checkbox onChange={() => null} id="checkbox0" />);

    expect(utils.container).toMatchSnapshot();
  });

  it('click and check', () => {
    const onChange = jest.fn();
    const { getByDisplayValue } = render(<Checkbox onChange={onChange} value="value" id="checkbox1" label="체크박스" />);
    const checkbox = getByDisplayValue('value');

    fireEvent.click(checkbox);

    expect(onChange).toBeCalled();
  });
});
