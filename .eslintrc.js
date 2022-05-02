module.exports = {
  setting: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    },
    'import/resolver': {
      node: {
          extensions: ['.ts'],
      },
    },
  },
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'no-loops',
    'promise'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended'
  ],
  globals: {},
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    indent: ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'double'],
    semi: ['error', 'always'],
    'array-bracket-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'no-loops/no-loops': 2,
    'space-in-parens': ['error', 'always']
  }
}