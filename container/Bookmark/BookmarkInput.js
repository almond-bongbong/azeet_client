import React, { useCallback, useState } from 'react';
import useToast from 'hooks/useToast';
import debounce from 'lodash/debounce';
import axios from 'axios';
import styled from 'styled-components';
import BookmarkPreview from 'components/Bookmark/BookmarkPreview';
import Input from 'components/Input/Input';
import SimpleLoader from 'components/Loader/SimpleLoader';
import Button, { ButtonStyle } from 'components/Button/Button';

const BookmarkInputStyle = styled.div`
  .preview-area {
    position: relative;
    margin-top: 30px;
    ${ButtonStyle} {
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
  }
`;

const BookmarkInput = () => {
  const [url, setUrl] = useState();
  const toast = useToast();
  const [bookmark, setBookmark] = useState(null);
  const [pendingPreview, setPendingPreview] = useState(false);
  const [pendingSubmit, setPendingSubmit] = useState(false);

  const fetchBookmarkPreview = useCallback(debounce(async (bookmarkUrl) => {
    try {
      setPendingPreview(true);
      const response = await axios({ method: 'get', url: '/bookmark/preview', params: { url: bookmarkUrl } });
      setBookmark(response);
    } catch (e) {
      toast(e.data?.message);
    } finally {
      setPendingPreview(false);
    }
  }, 1000), []);

  const handleUrl = useCallback(({ target }) => {
    const { value } = target;
    setUrl(value);
    fetchBookmarkPreview(value);
  }, [fetchBookmarkPreview]);

  const onSubmit = useCallback(async () => {
    try {
      setPendingSubmit(true);
      await axios({ method: 'post', url: '/bookmark', data: bookmark });
      toast('등록되었습니다.');
    } catch (e) {
      toast(e.data?.message);
    } finally {
      setPendingSubmit(false);
      setBookmark(null);
    }
  }, [bookmark, toast]);

  return (
    <BookmarkInputStyle>
      <Input
        type="text"
        color="dark"
        placeholder="URL을 입력하세요"
        value={url}
        onChange={handleUrl}
      />
      <div className="preview-area">
        {pendingPreview && <SimpleLoader theme="white" />}
        {bookmark && (
          <>
            <BookmarkPreview og={bookmark.og} location={bookmark.location} />
            <Button height={30} theme="blue" text="등록" onClick={onSubmit} loading={pendingSubmit} />
          </>
        )}
      </div>
    </BookmarkInputStyle>
  );
};

export default BookmarkInput;
