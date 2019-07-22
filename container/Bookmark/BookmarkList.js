import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from 'hooks';
import BookmarkPreview from 'components/Bookmark/BookmarkPreview';
import SimpleLoader from 'components/Loader/SimpleLoader';
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

const BookmarkList = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [pendingBookmark, setPendingBookmark] = useState(true);
  const toast = useToast();

  useEffect(() => {
    (async () => {
      try {
        setPendingBookmark(true);
        const response = await axios({ method: 'get', url: '/bookmark' });
        setBookmarks(response.items);
      } catch (e) {
        toast('북마크 목록을 가져오지 못했습니다.');
      } finally {
        setPendingBookmark(false);
      }
    })();
  }, [toast]);

  return (
    <div>
      {pendingBookmark && <SimpleLoader theme="yellow" />}
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
