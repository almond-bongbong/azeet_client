import React from 'react';
import PropTypes from 'prop-types';
import BookmarkPreview from 'components/Bookmark/BookmarkPreview';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';

const BookmarkWrapperStyle = styled.div`
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

const BookmarkList = ({ bookmarks }) => (
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

BookmarkList.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.shape({})),
};

BookmarkList.defaultProps = {
  bookmarks: [],
};

export default BookmarkList;
