module.exports = {
  extends: [
    // "eslint:recommended",
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    semi: [1, 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
