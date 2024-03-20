# Lintr Linting Rules

This library contains miscellaneous ESLint linting rules.

## `if-no-string-literal`

Type: `problem`

Prevents short upper-case string literals being used as values in if statement tests (enumerations or consts are preferred).

### Invalid Code

```
const buySell = 'S';

if (buySell === 'S') {
  createSellTrade();
}
```

### Valid Code

```
enum BuySell {
  Sell = 'S'
};

const buySell = BuySell.Sell;

if (buySell === BuySell.Sell) {
  createSellTrade();
}
```
