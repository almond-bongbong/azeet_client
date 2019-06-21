import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import renderWithRedux from 'utils/renderWithRedux';
import Confirm from 'components/Confirm/Confirm';
import Button from 'components/Button/Button';
import { confirm } from 'store/modules/confirm';

describe('Confirm', () => {
  const setup = () => {
    const onResult = jest.fn();
    const utils = renderWithRedux(
      <>
        <Button text="click" onClick={() => utils.store.dispatch(confirm('really?')).then(onResult)} />
        <Confirm />
      </>,
    );
    const { getByText } = utils;
    const button = getByText('click');
    return { ...utils, button, onResult };
  };

  it('matches snapshot', () => {
    const utils = renderWithRedux(<Confirm />);
    expect(utils.container).toMatchSnapshot();
  });

  it('calls confirm and cancel', async () => {
    const { getByText, queryByText, button, onResult } = setup();
    fireEvent.click(button);
    getByText('really?');

    const cancelButton = getByText('취소');
    fireEvent.click(cancelButton);
    expect(queryByText('really?')).toBeNull();
    await wait(() => expect(onResult).toBeCalledWith(false));
  });

  it('calls confirm and confirmed', async () => {
    const { getByText, queryByText, button, onResult } = setup();
    fireEvent.click(button);
    getByText('really?');

    const confirmButton = getByText('확인');
    fireEvent.click(confirmButton);
    expect(queryByText('really?')).toBeNull();
    await wait(() => expect(onResult).toBeCalledWith(true));
  });
});
