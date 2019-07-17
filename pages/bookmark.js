import React from 'react';
import styled from 'styled-components';
import BookmarkInput from '../container/Bookmark/BookmarkInput';

const BookmarkStyle = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const Bookmark = () => {
  console.log('bookmark');

  return (
    <BookmarkStyle>
      <BookmarkInput />
    </BookmarkStyle>
  );
};

Bookmark.getInitialProps = () => ({
  isPrivate: true,
});

export default Bookmark;
