import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const Link = ({ children, href, className }) => (
  <NextLink href={href}>
    <a href={href} className={className}>{children}</a>
  </NextLink>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

Link.defaultProps = {
  children: undefined,
  className: '',
};

export default Link;
