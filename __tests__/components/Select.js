import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from 'components/Select/Select';
import Option from 'components/Select/Option';

describe('Select', () => {
  it('matches snapshot', () => {
    const utils = render(
      <Select onChange={_ => _} value="0">
        <Option text="첫번째" value="0" />
        <Option text="두번째" value="1" />
        <Option text="세번째" value="2" />
      </Select>,
    );

    expect(utils.container).toMatchSnapshot();
  });

  it('selected second item', () => {
    const { getByDisplayValue, queryByDisplayValue } = render(
      <Select onChange={_ => _} value="1">
        <Option text="첫번째" value="0" />
        <Option text="두번째" value="1" />
        <Option text="세번째" value="2" />
      </Select>,
    );

    getByDisplayValue('두번째');
    expect(queryByDisplayValue('첫번째')).toBeNull();
  });

  it('calls onChange', () => {
    const handleChange = jest.fn();
    const { getByDisplayValue } = render(
      <Select onChange={handleChange} value="0">
        <Option text="첫번째" value="0" />
        <Option text="두번째" value="1" />
        <Option text="세번째" value="2" />
      </Select>,
    );

    const select = getByDisplayValue('첫번째');
    fireEvent.change(select, { target: { value: '1' } });
    expect(handleChange).toBeCalled();
  });
});
