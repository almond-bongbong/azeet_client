import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { rotation } from 'style/animations';

export const ThumbnailStyle = styled.div`
  img {
    display: block;
    width: 100%;
    opacity: 0;
    transition: opacity .3s;
  }
  .loading {
    display: block;
    position: relative;
    overflow: hidden;
    height: 100%;
    background-color: #555;
    text-align: left;
    text-indent: -9999px;
    font-size: 0;
    
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #666;
      transform-origin: 50% 0;
      animation: ${rotation} 1s linear infinite;
    }
  }
  ${props => (!props.pending && css`
    img {
      opacity: 1;
    }
  `)};
`;

const Thumbnail = ({ url }) => {
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
    <ThumbnailStyle pending={pending ? 1 : 0}>
      {pending && <span className="loading">loading...</span>}
      <img src={url} alt="this is one" />
    </ThumbnailStyle>
  );
};

Thumbnail.propTypes = {
  url: PropTypes.string,
};

Thumbnail.defaultProps = {
  url: undefined,
};

export default Thumbnail;
