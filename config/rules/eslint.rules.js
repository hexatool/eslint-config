module.exports = {
	// Possible Problems [eslint](https://eslint.org/docs/latest/rules/#possible-problems)
	'array-callback-return': ['error', { checkForEach: true }],
	'no-await-in-loop': 'error',
	'no-constant-binary-expression': 'error',
	'no-constructor-return': 'error',
	'no-promise-executor-return': 'error',
	'no-self-compare': 'error',
	'no-template-curly-in-string': 'error',
	'no-unmodified-loop-condition': 'error',
	'no-unreachable-loop': 'error',
	'no-unused-private-class-members': 'error',
	// Disable cause of conflict with unused-imports/no-unused-vars
	'no-unused-vars': 'off',
	'no-use-before-define': [
		'error',
		{
			functions: false,
			classes: true,
			variables: true,
			allowNamedExports: false,
		},
	],
	'require-atomic-updates': 'error',

	// Suggestions [eslint](https://eslint.org/docs/latest/rules/#suggestions)
	camelcase: ['error', { properties: 'never' }],
	'capitalized-comments': 'error',
	complexity: ['error', 30],
	'consistent-this': ['error', 'self'],
	curly: 'error',
	'default-case-last': 'error',
	'dot-notation': 'error',
	eqeqeq: 'error',
	'func-name-matching': 'error',
	'func-names': ['error', 'as-needed'],
	'grouped-accessor-pairs': 'error',
	'guard-for-in': 'error',
	'max-depth': ['error', 4],
	'max-params': 'off',
	'multiline-comment-style': ['error', 'starred-block'],
	'new-cap': ['error', { capIsNew: false }],
	'no-alert': 'error',
	'no-array-constructor': 'error',
	'no-bitwise': 'error',
	'no-caller': 'error',
	'no-eq-null': 'error',
	'no-console': ['error', { allow: ['error'] }],
	'no-else-return': ['error', { allowElseIf: false }],
	'no-empty-static-block': 'error',
	'no-eval': 'error',
	'no-extend-native': 'error',
	'no-extra-bind': 'error',
	'no-extra-label': 'error',
	'no-floating-decimal': 'error',
	'no-implicit-coercion': 'error',
	'no-implicit-globals': 'error',
	'no-implied-eval': 'error',
	'no-inline-comments': 'error',
	'no-invalid-this': 'error',
	'no-iterator': 'error',
	'no-label-var': 'error',
	'no-lone-blocks': 'error',
	'no-loop-func': 'error',
	'no-lonely-if': 'error',
	'no-mixed-operators': 'error',
	'no-multi-assign': 'error',
	'no-negated-condition': 'error',
	'no-new-wrappers': 'error',
	'no-param-reassign': 'error',
	'no-return-assign': 'error',
	'no-sequences': 'error',
	'no-throw-literal': 'error',
	'no-underscore-dangle': 'error',
	'no-unneeded-ternary': 'error',
	'no-unused-expressions': 'error',
	'no-useless-call': 'error',
	'no-useless-computed-key': 'error',
	'no-useless-return': 'error',
	'no-var': 'error',
	'object-shorthand': 'error',
	'one-var': 'off',
	'operator-assignment': ['error', 'always'],
	'prefer-const': 'error',
	'prefer-named-capture-group': 'error',
	'prefer-numeric-literals': 'error',
	'prefer-object-has-own': 'error',
	'prefer-promise-reject-errors': 'error',
	'prefer-rest-params': 'error',
	'prefer-spread': 'error',
	'prefer-template': 'error',
	'require-await': 'error',
	'quote-props': ['error', 'as-needed'],
	radix: 'error',
	'spaced-comment': ['error', 'always'],
	yoda: 'error',

	// Style
	'arrow-parens': ['error', 'as-needed'],
	'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
	'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
};
