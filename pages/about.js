import React from 'react';

const About = () => (
  <div>about</div>
);

About.getInitialProps = async () => {
  await new Promise((resolve => setTimeout(() => resolve(), 1000)));
};

export default About;
