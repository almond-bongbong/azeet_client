import React, { useEffect } from 'react';
import axios from 'axios';

const BookmarkList = () => {
  useEffect(() => {
    (async () => {
      const response = await axios({ method: 'get', url: '/bookmark' });
      console.log(response);
    })();
  }, []);

  return (
    <div>hello</div>
  );
};

export default BookmarkList;
