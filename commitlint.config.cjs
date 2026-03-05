module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'fix',
      'feat',
      'docs',
      'ci',
      'chore',
      'test',
      'refactor',
      'style',
      'perf',
      'build',
      'revert'
    ]],
    'scope-empty': [2, 'never'],
    'header-max-length': [2, 'always', 100]
  }
};