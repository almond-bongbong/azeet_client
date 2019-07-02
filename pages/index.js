import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

const Home = () => (
  <div>
    hello
  </div>
);

Home.propTypes = {
  router: PropTypes.shape({}).isRequired,
};

export default withRouter(Home);
