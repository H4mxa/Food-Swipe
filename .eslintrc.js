module.exports = {
  root: true,
  extends: '@react-native-community',

  rules: {
    quotes: [2, 'single', {avoidEscape: true}],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
