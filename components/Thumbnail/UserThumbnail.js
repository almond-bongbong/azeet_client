import React from 'react';
import PropTypes from 'prop-types';

const UserThumbnail = ({ url }) => (
  <div>
    <img src={url} alt="썸네일" />
  </div>
);

UserThumbnail.propTypes = {
  url: PropTypes.string.isRequired,
};

export default UserThumbnail;
