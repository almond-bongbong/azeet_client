import React from 'react';
import styled from 'styled-components';
import { BookmarkInput, BookmarkList } from 'container/Bookmark';
import { bookmarkActions } from 'store/modules/bookmark';

const BookmarkStyle = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const Bookmark = () => (
  <BookmarkStyle>
    <BookmarkInput />
    <BookmarkList />
  </BookmarkStyle>
);

Bookmark.getInitialProps = async (ctx) => {
  const { store } = ctx;
  store.dispatch(bookmarkActions.fetchList());
  return { isPrivate: true };
};

export default Bookmark;
