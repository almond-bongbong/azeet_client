import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { veil } from 'style/animations';

export const ThumbnailStyle = styled.div`
  position: relative;
  .image {
    display: block;
    width: 100%;
    opacity: 0;
    transition: opacity .4s;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(-45deg, #ee7752, #e7c705, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    transition: opacity .4s;
    animation: ${veil} 3s ease infinite;
  }
  ${({ url, background }) => (background && css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .image {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: url(${url}) no-repeat 50% 50%;
      background-size: cover;
    }
  `)};
  ${({ pending }) => (!pending && css`
    .image {
      opacity: 1;
    }
    :after {
      opacity: 0;
    }
  `)};
`;

const Thumbnail = ({ url, background }) => {
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const image = new Image();

    if (url) {
      image.onload = () => setPending(false);
      image.src = url;
    }

    return () => { image.onload = null; };
  }, [url]);

  return (
    <ThumbnailStyle pending={pending ? 1 : 0} url={url} background={background ? 1 : 0}>
      {background ? (
        <div className="image" />
      ) : (
        <img src={url} alt="thumbnail" className="image" />
      )}
    </ThumbnailStyle>
  );
};

Thumbnail.propTypes = {
  url: PropTypes.string,
  background: PropTypes.bool,
};

Thumbnail.defaultProps = {
  url: undefined,
  background: false,
};

export default Thumbnail;
