import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Popup from 'components/Popup/Popup';

describe('Popup', () => {
  it('matches snapshot', () => {
    const utils = render(<Popup>hello</Popup>);
    expect(utils.container).toMatchSnapshot();
  });

  it('not showing popup', () => {
    const { queryByText } = render(<Popup show={false}>hello popup</Popup>);
    expect(queryByText('hello popup')).toBeNull();
  });

  it('display popup', () => {
    const { getByText } = render(<Popup show>hello popup</Popup>);
    getByText('hello popup');
  });

  it('click to popup dim', () => {
    const handleDim = jest.fn();
    const { getByTitle } = render(<Popup show onClickDim={handleDim}>hello popup</Popup>);
    const dim = getByTitle('팝업닫기');

    fireEvent.click(dim);
    expect(handleDim).toBeCalled();
  });

  it('keypress ESC for popup', () => {
    const handleESC = jest.fn();
    const { getByText } = render(<Popup show keyPressESC={handleESC}>hello popup</Popup>);
    const popup = getByText('hello popup');

    fireEvent.keyDown(popup, { key: 'Escape', keyCode: 27 });
    expect(handleESC).toBeCalled();
  });
});
