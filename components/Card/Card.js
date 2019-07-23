import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail, { ThumbnailStyle } from 'components/Thumbnail/Thumbnail';
import styled from 'styled-components';
import { multiEllipsis } from '../../style/mixin';

export const CardStyle = styled.div`
  padding: 15px;
  background-color: #2f3338;
  box-shadow: 0 1px 4px 1px rgba(0,0,0,0.3);
  color: #eee;
  .thumbnail {
    position: relative;
    padding-top: 75%;
  }
  ${ThumbnailStyle} {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  em {
    display: block;
    overflow: hidden;
    margin-top: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    font-size: 1.1rem;
  }
  p {
    overflow: hidden;
    height: 63px;
    margin-top: 7px;
    ${multiEllipsis(3)}
  }
`;

const Card = ({ thumbnail, title, content }) => (
  <CardStyle>
    <div className="thumbnail"><Thumbnail url={thumbnail} background /></div>
    <em title={title}>{title}</em>
    <p>{content}</p>
  </CardStyle>
);

Card.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

Card.defaultProps = {
  thumbnail: undefined,
  title: '',
  content: '',
};

export default Card;
