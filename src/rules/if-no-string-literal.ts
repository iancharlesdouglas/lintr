import { TSESLint, TSESTree } from '@typescript-eslint/utils';
export { ESLintUtils } from '@typescript-eslint/utils';

type MessageIds = 'ifStringLiteral' | 'switchCaseStringLiteral';

/**
 * If statement - no string literal rule
 */
export const ifNoStringLiteralRule: TSESLint.RuleModule<MessageIds> = {
	meta: {
		docs: {
			description:
				'Prevents short upper-case string literals being used as values in if statements (enumerations or consts are preferred)',
		},
		type: 'problem',
		messages: {
			ifStringLiteral:
				'Prefer using an enumeration or a const over a short string literal',
			switchCaseStringLiteral:
				'Prefer using an enumeration or a const over a short string literal',
		},
		schema: [],
	},
	defaultOptions: [],
	create: (context) => ({
		IfStatement: (node) => {
			const literalExpr = /^[A-Z_]+[A-Z0-9_]{0,9}$/;
			const binaryExpression = node.test as TSESTree.BinaryExpression;
			if (
				binaryExpression?.right.type === 'Literal' &&
				typeof binaryExpression.right.value === 'string' &&
				literalExpr.test(binaryExpression.right.value)
			) {
				context.report({
					node,
					messageId: 'ifStringLiteral',
				});
			} else if (
				binaryExpression?.left.type === 'Literal' &&
				typeof binaryExpression.left.value === 'string' &&
				literalExpr.test(binaryExpression.left.value)
			) {
				context.report({
					node,
					messageId: 'ifStringLiteral',
				});
			}
			return;
		},
	}),
};

export default ifNoStringLiteralRule;
