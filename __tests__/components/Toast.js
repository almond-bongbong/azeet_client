import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import renderWithRedux from 'utils/renderWithRedux';
import Toast from 'components/Toast';
import Button from 'components/Button/Button';
import { toastActions } from 'store/modules/toast';

describe('Toast', () => {
  it('matches snapshot', () => {
    const utils = renderWithRedux(<Toast />);
    expect(utils.container).toMatchSnapshot();
  });

  it('calls toast popup', async () => {
    const { getByText, getAllByText, queryByText, store } = renderWithRedux(
      <>
        <Button text="click" onClick={() => store.dispatch(toastActions.toast('toast!'))} />
        <Toast />
      </>,
    );

    const button = getByText('click');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(getAllByText('toast!').length).toBe(2);

    await wait(() => expect(queryByText('toast!')).toBeNull());
  });

  it('calls toast popup with time', async () => {
    const { getByText, queryByText, store } = renderWithRedux(
      <>
        <Button text="click" onClick={() => store.dispatch(toastActions.toast({ message: 'toast!', time: 500 }))} />
        <Toast />
      </>,
    );

    const button = getByText('click');
    fireEvent.click(button);
    getByText('toast!');

    await wait(() => expect(queryByText('toast!')).toBeNull());
  });
});
