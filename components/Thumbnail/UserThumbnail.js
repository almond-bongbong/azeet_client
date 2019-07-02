import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserThumbnailStyle = styled.div`
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  
  & img {
    width: 100%;
  }
`;

const UserThumbnail = ({ url }) => (
  <UserThumbnailStyle>
    <img src={url} alt="썸네일" />
  </UserThumbnailStyle>
);

UserThumbnail.propTypes = {
  url: PropTypes.string.isRequired,
};

export default UserThumbnail;
