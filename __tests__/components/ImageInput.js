import React from 'react';
import { render } from '@testing-library/react';
import ImageInput from 'components/ImageInput/ImageInput';

describe('Button', () => {
  it('matches snapshot', () => {
    const utils = render(<ImageInput />);
    expect(utils.container).toMatchSnapshot();
  });

  it('calls onChange File', async () => {
    const handleFile = jest.fn();
    const { getByTitle } = render(<ImageInput onChange={handleFile} />);
    getByTitle('이미지 업로드');
  });
});
