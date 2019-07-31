import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Thumbnail from 'components/Thumbnail/Thumbnail';

const BookmarkPreviewStyle = styled.a`
  display: table;
  table-layout: fixed;
  width: 100%;
  padding: 20px;
  border: 1px solid #4d4d4d;
  border-radius: 3px;
  .thumbnail {
    display: table-cell;
    width: 200px;
    height: 120px;
    padding-right: 20px;
    vertical-align: top;
  }
  .description {
    display: table-cell;
    color: #999;
    vertical-align: top;
  }
  em {
    color: #eee;
  }
  p {
    margin-top: 6px;
    font-size: 0.9rem;
  }
`;

const BookmarkPreview = ({ og }) => (
  <BookmarkPreviewStyle target="_blank" href={og.url}>
    <div className="thumbnail">
      <Thumbnail url={og.image} background />
    </div>
    <div className="description">
      <em>{og.title}</em>
      <p>{og.description}</p>
    </div>
  </BookmarkPreviewStyle>
);

BookmarkPreview.propTypes = {
  og: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({}),
};

BookmarkPreview.defaultProps = {
  location: undefined,
};

export default BookmarkPreview;
