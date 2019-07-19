/* eslint-disable */
const path = require('path');
const coreJs = require('core-js');

module.exports = {
  webpack: (config) => {
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js'] && !entries['main.js'].includes(coreJs)
      ) {
        entries['main.js'].unshift(cof)
      }

      return entries
    }
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
          }
        }
      ],
    });

    return config;
  },
};
