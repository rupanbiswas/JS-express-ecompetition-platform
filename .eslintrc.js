module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  ignorePatterns: ['database/models/*.js', 'test/*.js'],
  rules: {
    /**
     *     'prettier/prettier': [
     *     'error',
     *    { singleQuote: true, semi: true, parser: 'flow' },
     *   ],
     */
  },
  plugins: ['prettier'],
};
