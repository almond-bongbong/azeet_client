import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from 'components/Button/Button';

describe('Button', () => {
  it('matches snapshot', () => {
    const utils = render(<Button />);

    expect(utils.container).toMatchSnapshot();
  });

  it('calls onClick', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick} text="버튼" />);
    const button = getByText('버튼');

    fireEvent.click(button);

    expect(onClick).toBeCalled();
  });

  it('not calls onClick with while loading', () => {
    const onClick = jest.fn();
    const { getByTitle } = render(<Button onClick={onClick} loading text="로딩버튼" />);
    const button = getByTitle('로딩중');

    fireEvent.click(button);

    expect(onClick).not.toBeCalled();
  });
});
