import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import renderWithRedux from 'utils/renderWithRedux';
import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import { alert } from 'store/modules/alert';

describe('Alert', () => {
  it('matches snapshot', () => {
    const utils = renderWithRedux(<Alert />);
    expect(utils.container).toMatchSnapshot();
  });

  it('calls alert and close', async () => {
    const { getByText, queryByText, store } = renderWithRedux(
      <>
        <Button text="click" onClick={() => store.dispatch(alert('alert'))} />
        <Alert />
      </>,
    );

    const button = getByText('click');
    fireEvent.click(button);
    getByText('alert');

    const closeButton = getByText('확인');
    fireEvent.click(closeButton);
    await wait(() => expect(queryByText('alert')).toBeNull());
  });
});
