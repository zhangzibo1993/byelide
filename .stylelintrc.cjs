// .stylelintrc.cjs
module.exports = {
  extends: [
    'stylelint-config-standard', // 通用基础规则
    'stylelint-config-html', // 让 .vue/.html 内的 <style> 被解析
    'stylelint-config-recommended-vue', // Vue SFC 相关最佳实践
    'stylelint-config-recess-order', // 推荐的 CSS 属性分组与顺序
  ],
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html', // 解析 <style>（含 lang="less"）
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less', // 支持 Less 变量、嵌套、mixin
    },
  ],
  rules: {
    /* 常用放宽&兼容 */
    'no-empty-source': null,
    'selector-class-pattern': null, // 不强制 BEM 命名
    'at-rule-no-unknown': null, // 兼容 Less 自定义 at-rule、Tailwind 场景
    'declaration-block-no-duplicate-properties': true, // 严格禁止重复属性

    /* 现代写法（可按需保留） */
    'color-function-notation': 'modern',
    'alpha-value-notation': 'number',
  },
}
