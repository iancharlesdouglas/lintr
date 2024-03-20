'use strict';

const pluginExample = require('./cjs/rules/index');

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['lintr'],
	overrides: [
		{
			files: ['*.ts'],
			extends: ['eslint:recommended'],
			rules: {
				'example/if-no-string-literal': 'error',
			},
		},
	],
};
