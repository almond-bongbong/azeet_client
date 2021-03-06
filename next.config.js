/* eslint-disable */
const path = require('path');
require('core-js');

module.exports = {
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    config.node = { fs: 'empty' };
    config.module.rules.push({
      test: /.(svg|png|jpg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]?[hash]',
            emitFile: false,
            publicPath: '/',
          },
        },
      ],
    });

    return config;
  },
};
