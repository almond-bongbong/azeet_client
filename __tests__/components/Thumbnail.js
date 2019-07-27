import React from 'react';
import { render } from '@testing-library/react';
import Thumbnail from 'components/Thumbnail/Thumbnail';

describe('Thumbnail', () => {
  it('matches snapshot', () => {
    const utils = render(<Thumbnail url="https://placeimg.com/600/300/any" />);
    expect(utils.container).toMatchSnapshot();
  });

  it('load image', async () => {
    const { getByAltText } = render(<Thumbnail url="https://placeimg.com/100/100/any" />);
    const img = getByAltText('thumbnail');
    expect(img).toHaveStyle('opacity: 0');
  });
});
