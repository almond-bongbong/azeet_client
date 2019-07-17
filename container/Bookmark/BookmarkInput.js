import React, { useCallback, useState } from 'react';
import useToast from 'hooks/useToast';
import debounce from 'lodash/debounce';
import axios from 'axios';
import styled from 'styled-components';
import BookmarkPreview from 'components/Bookmark/BookmarkPreview';
import Input from 'components/Input/Input';
import SimpleLoader from 'components/Loader/SimpleLoader';

const BookmarkInputStyle = styled.div`
  .preview-area {
    margin-top: 30px;
  }
`;

const BookmarkInput = () => {
  const [url, setUrl] = useState();
  const toast = useToast();
  const [preview, setPreview] = useState();
  const [pending, setPending] = useState(false);

  const fetchBookmarkPreview = useCallback(debounce(async (bookmarkUrl) => {
    try {
      setPending(true);
      const response = await axios({ url: '/bookmark/preview', params: { url: bookmarkUrl } });
      setPreview(response);
    } catch (e) {
      toast(e.data.message);
    } finally {
      setPending(false);
    }
  }, 1000), []);

  const handleUrl = useCallback(({ target }) => {
    const { value } = target;
    setUrl(value);
    fetchBookmarkPreview(value);
  }, [fetchBookmarkPreview]);

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
        {pending && <SimpleLoader theme="white" />}
        {preview && <BookmarkPreview og={preview.og} location={preview.location} />}
      </div>
    </BookmarkInputStyle>
  );
};

export default BookmarkInput;
