"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rule_tester_1 = require("@typescript-eslint/rule-tester");
const if_no_string_literal_1 = __importDefault(require("./if-no-string-literal"));
const ruleTester = new rule_tester_1.RuleTester({
    parser: '@typescript-eslint/parser',
});
ruleTester.run('if-no-string-literal', if_no_string_literal_1.default, {
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
//# sourceMappingURL=if-no-string-literal.test.js.map