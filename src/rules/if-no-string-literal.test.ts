import { RuleTester } from '@typescript-eslint/rule-tester';
import ifNoStringLiteralRule from './if-no-string-literal';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
});

ruleTester.run('if-no-string-literal', ifNoStringLiteralRule, {
	valid: [
		{
			code: `if (x === 'Some value') {}`,
		},
		{
			code: 'if (x === "Some 123 value") {}',
		},
		{
			code: `if (x == 'Some value') {}`,
		},
		{
			code: 'if (x == "Some 123 value") {}',
		},
		{
			code: `if ('Some value' === x) {}`,
		},
		{
			code: 'if ("Some 123 value" !== x) {}',
		},
	],
	invalid: [
		{
			code: `if (x === 'S') {}`,
			errors: [{ messageId: 'ifStringLiteral' }],
		},
		{
			code: `if (x === 'SOME_CODE_1') {}`,
			errors: [{ messageId: 'ifStringLiteral' }],
		},
	],
});
