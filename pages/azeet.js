import React from 'react';

const Azeet = () => (
  <div>
    hello azeet!
  </div>
);

Azeet.getInitialProps = (prop) => {
  console.log(prop);
};

export default Azeet;
