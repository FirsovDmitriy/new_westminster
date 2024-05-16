import configPrettier from 'eslint-config-prettier'
import reactHookEslint from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import reactEslint from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
      plugins: {
        '@typescript-eslint': tseslint.plugin,
        reactRefresh,
        reactEslint,
        'react-hooks': reactHookEslint,
        prettier,
        configPrettier
      },
    },
    {
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node,
          ...globals.es2021
        },
        parserOptions: {
          project: true,
          tsconfigDirName: import.meta.dirname,
        },
  
      }
    },
    {
      ignores: ['node_modules', 'dist']
    },
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        ...configPrettier.rules,
        'no-unused-vars': 'warn',
        'no-console': 'warn',
        // 'sort-imports': ['warn'],
      },
    }
)
