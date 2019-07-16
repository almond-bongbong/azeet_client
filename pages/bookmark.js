import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Input from 'components/Input/Input';

const BookmarkStyle = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const Bookmark = () => {
  const [url, setUrl] = useState();
  const handleUrl = useCallback(({ target }) => {
    const { value } = target;
    setUrl(value);
  }, []);

  return (
    <BookmarkStyle>
      <Input
        type="text"
        color="dark"
        placeholder="URL을 입력하세요"
        value={url}
        onChange={handleUrl}
      />
    </BookmarkStyle>
  );
};

Bookmark.getInitialProps = () => ({
  isPrivate: true,
});

export default Bookmark;
