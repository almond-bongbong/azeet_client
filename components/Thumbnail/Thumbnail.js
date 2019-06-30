import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ThumbnailStyle = styled.div`
  & img {
      opacity: 0;
      transition: opacity .3s;
  }
  ${props => (!props.pending && css`
    & img {
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

    return () => {
      image.onload = null;
    };
  }, [url]);

  return (
    <ThumbnailStyle pending={pending ? 1 : 0}>
      {pending && <span>loading...</span>}
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
