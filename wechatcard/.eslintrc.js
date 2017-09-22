// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6
  },
  env: {//脚本运行环境
    browser: true,
    node: true
  },
  // add your custom rules here
  // 0-off; 1-warn; 2-error
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // require let or const instead of var
    'no-var': 2,
    // allow async-await
    'generator-star-spacing': 0,
    // 禁用不必要的转义
    'no-useless-escape': 0,
    // enforce consistent spacing inside braces
    'object-curly-spacing': [2, 'always'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // disallow the use of console
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // disallow the use of alert, confirm, and prompt
    'no-alert': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
