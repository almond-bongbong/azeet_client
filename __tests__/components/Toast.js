import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { toast } from 'components/Feedback';
import Button from 'components/Button/Button';

describe('Toast', () => {
  it('calls toast popup', async () => {
    const { getByText, getAllByText, queryByText } = render(
      <Button text="click" onClick={() => toast('toast!')} />,
    );

    const button = getByText('click');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(getAllByText('toast!').length).toBe(2);

    await wait(() => expect(queryByText('toast!')).toBeNull());
  });

  it('calls toast popup with time', async () => {
    const { getByText, queryByText } = render(
      <Button text="click" onClick={() => toast('toast!', 500)} />,
    );

    const button = getByText('click');
    fireEvent.click(button);
    getByText('toast!');

    await wait(() => expect(queryByText('toast!')).toBeNull());
  });
});
