import React from 'react';
import renderWithRedux from 'utils/renderWithRedux';
import BookmarkList from 'container/Bookmark/BookmarkList';
// import axios from 'axios';
// import { initAxios } from 'config/configureAxios';
// import MockAdapter from 'axios-mock-adapter';

describe('BookmarkList', () => {
  // initAxios();
  // const mock = new MockAdapter(axios, { delayResponse: 200 }); // 200ms 가짜 딜레이 설정
  // mock.onGet('/bookmark').reply(200, {
  //   items: [
  //     { id: 1, og: { title: '제목', description: 'og_description1' } },
  //     { id: 2, og: { title: '제목', description: 'og_description2' } },
  //   ],
  // });

  it('matches snapshot', () => {
    const utils = renderWithRedux(<BookmarkList />);
    expect(utils.container).toMatchSnapshot();
  });

  it('get bookmark list', async () => {
    const { findAllByText } = renderWithRedux(<BookmarkList />, {
      bookmark: {
        bookmarks: [
          { id: 1, og: { title: '제목', description: 'og_description1' } },
          { id: 2, og: { title: '제목', description: 'og_description2' } },
        ],
      },
    });
    const bookmarks = await findAllByText('제목');
    expect(bookmarks).toHaveLength(2);
  });
});
