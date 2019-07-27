module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    'jest-dom/extend-expect',
  ],
  moduleNameMapper: {
    '\\.(css|less|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
  },
};
