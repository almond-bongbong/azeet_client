import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BookmarkInput, BookmarkList } from 'container/Bookmark';
import axios from 'axios';

const BookmarkStyle = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const Bookmark = ({ bookmarks }) => (
  <BookmarkStyle>
    <BookmarkInput />
    <BookmarkList bookmarks={bookmarks} />
  </BookmarkStyle>
);

Bookmark.getInitialProps = async () => {
  const { items } = await axios({ method: 'get', url: '/bookmark' });
  return { isPrivate: true, bookmarks: items };
};

Bookmark.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.shape({})),
};

Bookmark.defaultProps = {
  bookmarks: [],
};

export default Bookmark;
