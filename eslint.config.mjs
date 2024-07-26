import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      '@typescript-eslint/explicit-function-return-type': ['error'],
      quotes: ['error', 'single'],
      eqeqeq: ['error', 'always'],
      'import/no-unresolved': 'off',
      'comma-dangle': ['error', 'always-multiline'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'object-curly-newline': 'off',
      'no-unused-vars': 'warn',
      'no-unused-expressions': 'warn',
      'no-unused-labels': 'warn',
      'no-extra-semi': 'warn',
      'no-multi-spaces': 'warn',
      'no-trailing-spaces': 'warn',
      semi: ['error', 'never'],
      'no-console': 'off',
      indent: ['error', 2, { SwitchCase: 1 }],
      'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]
