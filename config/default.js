const eslintRules = require('./rules/eslint.rules.js');
const prettierRules = require('./rules/prettier.rules.js');
const importRules = require('./rules/import.rules.js');
const typescriptOverrides = require('./overrides/typescript.overrides.js');
const typescriptDefOverrides = require('./overrides/typescript-definition.overrides.js');

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['import', 'simple-import-sort', 'unused-imports'],
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	rules: {
		...eslintRules,
		...prettierRules,
		...importRules,
	},
	overrides: [typescriptOverrides, typescriptDefOverrides],
};
