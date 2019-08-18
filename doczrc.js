export default {
  title: 'azeet.io',
  description: '',
  codeSandbox: false,
  src: './',
  themeConfig: {
    colors: {
      primary: '#597ef7',
    },
  },
  menu: [
    'Getting Started',
    'Color',
    'Button',
    'ButtonGroup',
    'Input',
    'OptionsGroup',
    {
      name: 'Feedback',
      menu: ['alert', 'confirm'],
    },
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
