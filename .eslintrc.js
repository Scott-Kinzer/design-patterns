module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],

  overrides: [
    {
      parser: '@typescript-eslint/parser',
      plugins: ['prettier'],
      files: ['**/*.ts'],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: ['./tsconfig.json'],
      },
      rules: {
        'prettier/prettier': 'error'
      }
    }
  ]
};
