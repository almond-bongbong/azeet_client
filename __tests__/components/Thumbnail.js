import React from 'react';
import { render } from '@testing-library/react';
import Thumbnail from 'components/Thumbnail/Thumbnail';

describe('Thumbnail', () => {
  it('matches snapshot', () => {
    const utils = render(<Thumbnail url="https://placeimg.com/600/300/any" />);
    expect(utils.container).toMatchSnapshot();
  });

  it('load image', async () => {
    const { queryByText, getByAltText } = render(<Thumbnail url="https://placeimg.com/100/100/any" />);
    const loading = queryByText('loading...');
    const img = getByAltText('this is one');
    expect(loading).toBeDefined();
    expect(img).toHaveStyle('opacity: 0');
  });
});
