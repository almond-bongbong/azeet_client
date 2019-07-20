import React from 'react';
import BookmarkBg from 'static/images/home/bookmark_bg.jpg';
import ReviewBg from 'static/images/home/review_bg.jpg';
import Link from 'components/Link';
import styled from 'styled-components';
import Thumbnail from 'components/Thumbnail/Thumbnail';
import { alignXY } from 'style/mixin';

const MainMenuStyle = styled.div`
  display: flex;
  flex-direction: row;
  a {
    flex: 1 0 auto;
    display: block;
    position: relative;
    height: 80px;
    + a {
      margin-left: 10px;
    }
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      background-color: rgba(0,0,0,0.65);
    }
    span {
      ${alignXY};
      display: block;
      z-index: 20;
      color: #fdfdfd;
      text-align: center;
    }
  }
`;

const Home = () => (
  <div>
    <MainMenuStyle>
      <Link href="/bookmark" className="menu-bookmark">
        <Thumbnail url={BookmarkBg} background />
        <span>북마크</span>
      </Link>
      <Link href="/review" className="menu-review">
        <Thumbnail url={ReviewBg} background />
        <span>나만의 장소</span>
      </Link>
    </MainMenuStyle>
  </div>
);

export default Home;
