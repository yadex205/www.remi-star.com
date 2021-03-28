module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-hudochenkov/order', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    // Stylelint default rules
    'at-rule-no-unknown': null,
    // `color-hex-case` conflicts with `prettier`
    'color-hex-length': 'long',
    'comment-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    // `declaration-block-trailing-semicolon` conflicts with `prettier`
    // `declaration-colon-space-after` conflicts with `prettier`
    // `declaration-colon-space-before` conflicts with `prettier`
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    // `identation` conflicts with `prettier`
    // `media-feature-colon-space-after` is set by `stylelint-config-prettier`
    // `media-feature-colon-space-before` is set by `stylelint-config-prettier`
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-range-operator-space-after': 'never',
    'media-feature-range-operator-space-before': 'never',
    // `media-feature-parentheses-space-inside` is set by `stylelint-config-prettier`
    // `number-leading-zero` conflicts with `prettier`
    'property-no-vendor-prefix': [true, { ignoreProperties: ['box-orient'] }],
    // `rule-empty-line-before` conflicts with `prettier
    // `selector-attribute-brackets-space-inside` is set by `stylelint-config-prettier`
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    // `selector-attribute-quotes` is set by `stylelint-config-prettier`
    'selector-class-pattern': [
      '(?!(^|-|_)[0-9])(?!(^-|-$|^[amot]--|---|__-|-__))^[amot]-[0-9a-z-]+(__[0-9a-z-]+){0,2}(--[0-9a-z-]+)?$',
      {
        resolveNestedSelectors: true,
      },
    ],
    // `selector-combinator-space-after` conflicts with `prettier`
    'selector-no-vendor-prefix': true,
    // `selector-pseudo-class-parentheses-space-inside` is set by `stylelint-config-prettier`
    // `string-quotes` conflicts with `prettier`
    'value-no-vendor-prefix': [true, { ignoreValues: ['box'] }],

    // `stylelint-scss` rules
    'scss/at-rule-no-unknown': true,
  },
};
