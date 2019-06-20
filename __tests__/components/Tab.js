import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tab from 'components/Tab/Tab';

describe('Select', () => {
  it('matches snapshot', () => {
    const utils = render(
      <Tab
        onClick={_ => _}
        value="ko"
        items={[
          { value: 'ko', title: '한국' },
          { value: 'jp', title: '일본' },
          { value: 'hk', title: '홍콩' },
          { value: 'mo', title: '마카오' },
        ]}
      />,
    );

    expect(utils.container).toMatchSnapshot();
  });

  it('selected second tab', () => {
    const { getByText } = render(
      <Tab
        onClick={_ => _}
        value="jp"
        items={[
          { value: 'ko', title: '한국' },
          { value: 'jp', title: '일본' },
          { value: 'hk', title: '홍콩' },
          { value: 'mo', title: '마카오' },
        ]}
      />,
    );

    expect(getByText('일본').closest('button')).toHaveStyle('color: #64b5f6');
    expect(getByText('한국').closest('button')).not.toHaveStyle('color: #64b5f6');
  });

  it('calls onClick hk', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Tab
        onClick={handleClick}
        value="jp"
        items={[
          { value: 'ko', title: '한국' },
          { value: 'jp', title: '일본' },
          { value: 'hk', title: '홍콩' },
          { value: 'mo', title: '마카오' },
        ]}
      />,
    );

    const hk = getByText('홍콩');
    fireEvent.click(hk);
    expect(handleClick).toBeCalledWith('hk');
  });
});
