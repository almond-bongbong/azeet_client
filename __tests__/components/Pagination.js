import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from 'components/Pagination/Pagination';

describe('Pagination', () => {
  const activatedPageStyle = 'text-decoration: underline';

  it('matches snapshot', () => {
    const utils = render(<Pagination total={23} />);

    expect(utils.container).toMatchSnapshot();
  });

  it('current 2 page', () => {
    const { getByText, queryByText } = render(<Pagination current={2} total={24} />);

    getByText('1');
    expect(getByText('2')).toHaveStyle(activatedPageStyle);
    getByText('3');
    expect(queryByText('4')).toBeNull();
  });

  it('click to first page', () => {
    const onChange = jest.fn();
    const { getByTitle } = render(<Pagination current={3} total={51} onChange={onChange} />);
    const btnFirstPage = getByTitle('첫 페이지로 이동');

    fireEvent.click(btnFirstPage);
    expect(onChange).toBeCalledWith(1);
  });

  it('click to last page', () => {
    const onChange = jest.fn();
    const { getByTitle } = render(<Pagination current={3} total={51} onChange={onChange} />);
    const btnLastPage = getByTitle('마지막 페이지로 이동');

    fireEvent.click(btnLastPage);
    expect(onChange).toBeCalledWith(6);
  });

  it('click to start page', () => {
    const onChange = jest.fn();
    const { getByTitle } = render(<Pagination current={7} total={113} onChange={onChange} />);
    const btnStartPage = getByTitle('5 페이지로 이동');

    fireEvent.click(btnStartPage);
    expect(onChange).toBeCalledWith(5);
  });

  it('7 to 11 page', () => {
    const onChange = jest.fn();
    const { getByTitle } = render(<Pagination current={7} total={124} onChange={onChange} />);
    const btnNextPage = getByTitle('11 페이지로 이동');

    fireEvent.click(btnNextPage);
    expect(onChange).toBeCalledWith(11);
  });

  it('zero total', () => {
    const { getByText, queryByText } = render(<Pagination current={1} total={0} />);

    getByText('1');
    expect(queryByText('2')).toBeNull();
  });
});
