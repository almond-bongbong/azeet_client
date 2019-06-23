import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import loadImage from 'blueimp-load-image';
import styled from 'styled-components';
import { hidden } from 'style/mixin';

const ImageInputStyle = styled.div`
  & input {
    ${hidden}
  }
  
  & label {
    display: block;
  }
`;

const imageLoadOptions = {
  maxWidth: 1200,
  orientation: true,
};

const ImageInput = ({ id, onChange }) => {
  const handleImage = useCallback((e) => {
    const { files } = e.target;
    const images = [];

    Array.from(files).forEach((file) => {
      loadImage(file, (img, meta) => {
        const { name, type, lastModified } = file;

        img.toBlob((blob) => {
          const convertedFile = new File([blob], name, { type, lastModified });

          images.push({ file: convertedFile, meta: meta.exif.getAll() });
          if (images.length === files.length && onChange instanceof Function) onChange(images);
        }, type);
      }, imageLoadOptions);
    });
  }, [onChange]);

  return (
    <ImageInputStyle>
      <label htmlFor={id}>
        <input
          id={id}
          type="file"
          onChange={handleImage}
          multiple
          accept="image/*"
        />
        <span>이미지 선택</span>
      </label>
    </ImageInputStyle>
  );
};

ImageInput.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
};

ImageInput.defaultProps = {
  id: 'image_input',
  onChange: null,
};

export default ImageInput;
