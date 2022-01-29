module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': '2020',
    'sourceType': 'module',
  },
  'rules': {
      /* changed comma-dangle default...ironically,
      we can't use a dangling comma here because this is a JSON file. 
      */
      'comma-dangle': [
        2,
        'always-multiline'
      ],
      'indent': [
        2,
        4
      ],
  },
};
