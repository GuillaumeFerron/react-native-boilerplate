module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './components',
          assets: './assets',
          constants: './constants',
          navigation: './navigation',
          screens: './screens',
          utils: './utils',
          store: './store'
        }
      }
    ]
  ]
};
