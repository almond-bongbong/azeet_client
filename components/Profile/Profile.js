import React, { useCallback } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Thumbnail, { ThumbnailStyle } from 'components/Thumbnail/Thumbnail';
import Button from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { confirmActions } from 'store/modules/confirm';
import Cookie from 'js-cookie';
import { authActions } from '../../store/modules/auth';

export const ProfileStyle = styled.div`
  padding: 50px;
  background-color: #28282d;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.3);
  text-align: center;
  
  ${ThumbnailStyle} {
    overflow: hidden;
    width: 120px;
    height: 120px;
    margin: 0 auto;
    border-radius: 50%;
  }
  
  .name {
    margin: 10px 0;
    text-align: center;
  }
`;

const Profile = ({ user }) => {
  const { nickname, profileImage } = user;
  const dispatch = useDispatch();
  const handleLogout = useCallback(async () => {
    if (await dispatch(confirmActions.confirm('정말 로그아웃 하시겠습니까?'))) {
      dispatch(authActions.logout());
    }
  }, [dispatch]);

  return (
    <ProfileStyle>
      <Thumbnail url={profileImage} />
      <div className="name">{nickname}</div>
      <Button height={30} onClick={handleLogout} theme="gray" text="로그아웃" />
    </ProfileStyle>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    nickname: PropTypes.string,
    profileImage: PropTypes.string,
  }),
};

Profile.defaultProps = {
  user: {},
};

export default Profile;
