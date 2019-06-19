export default {
  title: 'azeet.io',
  description: '',
  codeSandbox: false,
  src: './',
  themeConfig: {
    colors: {
      primary: '#da032c',
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
  modifyBundlerConfig: (bundlerConfig) => {
    const rules = [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ];
    bundlerConfig.module.rules.push(...rules);
    return bundlerConfig;
  },
};
