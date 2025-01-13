module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es2021": true
  },
  "extends": [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  "parser": '@typescript-eslint/parser',
  "plugins": ['@typescript-eslint', 'react'],
  "rules": {
    // 自定义规则
  }
}; 