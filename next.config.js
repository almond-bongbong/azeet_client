/* eslint-disable */

module.exports = {
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    config.node = {
      fs: 'empty',
    };

    return config;
  },
};
