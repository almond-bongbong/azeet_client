import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Radio from 'components/Radio/Radio';

describe('Radio', () => {
  it('matches snapshot', () => {
    const handleChange = jest.fn();
    const utils = render(<Radio onChange={handleChange} id="radio_0" />);

    expect(utils.container).toMatchSnapshot();
  });

  it('onChange radio', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <>
        <Radio onChange={handleChange} id="radio_0" label="male" checked />
        <Radio onChange={handleChange} id="radio_1" label="female" />
      </>,
    );

    getByLabelText('male');
    const radioForFemale = getByLabelText('female');

    fireEvent.click(radioForFemale);

    expect(handleChange).toBeCalled();
  });
});
