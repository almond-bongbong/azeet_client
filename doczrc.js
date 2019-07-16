export default {
  title: 'azeet.io',
  description: '',
  codeSandbox: false,
  src: './',
  themeConfig: {
    colors: {
      primary: '#f9c200',
    },
  },
  menu: [
    'Getting Started',
    'Button',
    'ButtonGroup',
    'Input',
    'OptionsGroup',
    {
      name: 'Checkbox',
      menu: ['BasicCheckbox', 'FancyCheckbox'],
    },
    {
      name: 'Radio',
      menu: ['BasicRadio', 'FancyRadio'],
    },
  ],
  wrapper: 'docz/config/DoczWrapper',
  indexHtml: 'docz/config/index.html',
  modifyBabelRc: babelrc => ({
    ...babelrc,
    plugins: [...babelrc.plugins, '@babel/plugin-proposal-optional-chaining'],
  }),
};
