import React from 'react';
import { render } from '@testing-library/react';
import Image from 'components/Image/Thumbnail';

describe('Thumbnail', () => {
  it('matches snapshot', () => {
    const utils = render(<Image url="https://placeimg.com/600/300/any" />);
    expect(utils.container).toMatchSnapshot();
  });

  it('load image', async () => {
    const { queryByText, getByAltText } = render(<Image url="https://placeimg.com/100/100/any" />);
    const loading = queryByText('loading...');
    const img = getByAltText('thumbnail');
    expect(loading).toBeDefined();
    expect(img).toHaveStyle('opacity: 0');
  });
});
