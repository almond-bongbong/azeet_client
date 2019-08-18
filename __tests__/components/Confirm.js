import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import renderWithRedux from 'utils/renderWithRedux';
import { confirm } from 'components/Feedback';
import Button from 'components/Button/Button';

describe('Confirm', () => {
  const setup = () => {
    const onResult = jest.fn();
    const utils = renderWithRedux(
      <Button text="click" onClick={() => confirm('really?').then(onResult)} />,
    );
    const { getByText } = utils;
    const button = getByText('click');
    return { ...utils, button, onResult };
  };

  it('calls confirm and cancel', async () => {
    const { getByText, queryByText, button, onResult } = setup();
    fireEvent.click(button);
    getByText('really?');

    const cancelButton = getByText('취소');
    fireEvent.click(cancelButton);
    await wait(() => expect(queryByText('really?')).toBeNull());
    await wait(() => expect(onResult).toBeCalledWith(false));
  });

  it('calls confirm and confirmed', async () => {
    const { getByText, queryByText, button, onResult } = setup();
    fireEvent.click(button);
    getByText('really?');

    const confirmButton = getByText('확인');
    fireEvent.click(confirmButton);
    await wait(() => expect(queryByText('really?')).toBeNull());
    await wait(() => expect(onResult).toBeCalledWith(true));
  });
});
