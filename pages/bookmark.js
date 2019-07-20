import React from 'react';
import styled from 'styled-components';
import { BookmarkInput, BookmarkList } from 'container/Bookmark';

const BookmarkStyle = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const Bookmark = () => {
  console.log('bookmark');

  return (
    <BookmarkStyle>
      <BookmarkInput />
      <BookmarkList />
    </BookmarkStyle>
  );
};

Bookmark.getInitialProps = () => ({
  isPrivate: true,
});

export default Bookmark;
