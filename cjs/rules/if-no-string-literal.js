"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifNoStringLiteralRule = exports.ESLintUtils = void 0;
var utils_1 = require("@typescript-eslint/utils");
Object.defineProperty(exports, "ESLintUtils", { enumerable: true, get: function () { return utils_1.ESLintUtils; } });
/**
 * If statement - no string literal rule
 */
exports.ifNoStringLiteralRule = {
    meta: {
        docs: {
            description: 'Prevents short upper-case string literals being used as values in if statements (enumerations or consts are preferred)',
        },
        type: 'problem',
        messages: {
            ifStringLiteral: 'Prefer using an enumeration or a const over a short string literal',
            switchCaseStringLiteral: 'Prefer using an enumeration or a const over a short string literal',
        },
        schema: [],
    },
    defaultOptions: [],
    create: (context) => ({
        IfStatement: (node) => {
            const literalExpr = /^[A-Z_]+[A-Z0-9_]{0,9}$/;
            const binaryExpression = node.test;
            if ((binaryExpression === null || binaryExpression === void 0 ? void 0 : binaryExpression.right.type) === 'Literal' &&
                typeof binaryExpression.right.value === 'string' &&
                literalExpr.test(binaryExpression.right.value)) {
                context.report({
                    node,
                    messageId: 'ifStringLiteral',
                });
            }
            else if ((binaryExpression === null || binaryExpression === void 0 ? void 0 : binaryExpression.left.type) === 'Literal' &&
                typeof binaryExpression.left.value === 'string' &&
                literalExpr.test(binaryExpression.left.value)) {
                context.report({
                    node,
                    messageId: 'ifStringLiteral',
                });
            }
            return;
        },
    }),
};
exports.default = exports.ifNoStringLiteralRule;
//# sourceMappingURL=if-no-string-literal.js.map