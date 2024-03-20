import { TSESLint } from '@typescript-eslint/utils';
import { ifNoStringLiteralRule } from './if-no-string-literal';

/**
 * Rules
 */
export const rules = {
	'if-no-string-literal': ifNoStringLiteralRule,
} satisfies Record<string, TSESLint.RuleModule<string, Array<unknown>>>;
