import React from 'react';
import BookmarkPreview from 'components/Bookmark/BookmarkPreview';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const BookmarkWrapperStyle = styled.div`
  margin-top: 30px;
  & + & {
    margin-top: 15px;
  }
  &.bookmark-enter {
    opacity: 0;
    transition: opacity .3s;
  }
  &.bookmark-enter-active {
    opacity: 1;
  }
  &.bookmark-leave {
    opacity: 1;
    transition: opacity .3s;
  }
  &.bookmark-leave-active {
    opacity: 0;
  }
`;

const BookmarkList = () => {
  const bookmarks = useSelector(state => state.bookmark.bookmarks);
  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="bookmark"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {bookmarks.map(b => (
          <BookmarkWrapperStyle key={b.id}>
            <BookmarkPreview og={b.og} />
          </BookmarkWrapperStyle>
        ))}
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default BookmarkList;
