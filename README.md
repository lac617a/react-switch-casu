# Simplify conditional rendering in react

[![Version][version-badge]][npm]
[![Downloads][downloads-badge]][npm]
[![GitHub stars](https://img.shields.io/github/stars/lac617a/react-switch-casu.svg?style=social&label=Stars)](https://github.com/lac617a/react-switch-casu)
[![gzip size](http://img.badgesize.io/https://unpkg.com/react-switch-casu/dist/react-switch-casu.min.js?compression=gzip)](https://unpkg.com/react-switch-casu/dist/react-switch-casu.min.js)

[![MIT License][license-badge]](LICENSE.md)

## Demo

[Take a look at the demo][demon]

## Installing

### Package manager

```bash
$ npm install react-switch-casu
```

Using yarn:

```bash
$ yarn add react-switch-casu
```

Using pnpm:

```bash
$ pnpm add react-switch-casu
```

## What is it, and what it does?

It is a simple package that provides multiple utility components for simplifying conditional rendering in react. By using this package you can make your code more readable and maintainable as shown below.

1. `Switch`
    * Wrapper component for `Case` and `Default`.
    * It takes an expression as a prop.
    * It also takes two  optional  boolean props `fallthrough` and `enableMemo`.
    * By default both 'fallthrough' and 'enableMemo' are false.
    * After enabling memo feature, it will only re-render if the expression changes.
    * After enabling fallthrough you will need to pass a boolean `break` in the `Case` component wherever you want to
      stop fallthrough.
    * Anything else outside of `Case` and `Default` will be ignored.
2. `Case`
    * Must be used inside `Switch`.
    * It takes a `conditional` as a prop.
    * Must contain children/child.
    * Optional boolean prop `break` if fallthrough is enabled in `Switch`.
3. `Default`
   * Must be used inside `Switch`.
   * Must contain children/child.

```jsx
import React from "react";
import Switch from "react-switch-casu";

function SwitchCaseSimpleExample() {
  const [show, setShow] = useState(false)
  return (
    <Switch>
      <Switch.Case condition={show}>
        {/* here your login component  */}
      </Switch.Case>
      <Switch.Case condition={!show}>
        {/* here your register component  */}
      </Switch.Case>
      <Switch.Default>
        <h1>Welcome to Home</h1>
      </Switch.Default>
    </Switch>
  );
}
```

### This is the basic syntax for a `Switch` statement with the `expression` condition

```jsx
import React from "react";
import Switch from "react-switch-casu";

function SwitchCaseExpressionExample() {
  const [expression, setExpression] = useState(3)
  return (
    <Switch expression={expression}>
      <Switch.Case condition={1}>
        {/* here your login component  */}
      </Switch.Case>
      <Switch.Case condition={2}>
        {/* here your register component  */}
      </Switch.Case>
      <Switch.Default>
        <h1>Welcome to Home</h1>
      </Switch.Default>
    </Switch>
  );
}
```

The computer will review the `Switch` statement and check for equality
strict === between the case `Case` and the expression `expression`.

If one of the cases matches the expression `expression`,
will execute the code inside the `Case` case clause.

If multiple cases match the `Switch` statement, the
first case `Case` that matches the expression `expression`.

If none of the cases match the expression, the clause will be executed
default `Default`.

With the `Switch` statements they can have a cleaner syntax than the
complicated `ternary` or `if else` statements, which are sometimes a
little cumbersome to understand.

### `Switch` fallthrough example

```jsx
import React from "react";
import Switch from "react-switch-casu";

function SwitchCaseExpressionExample() {
  const [weekDayNo, setWeekDayNo] = useState(3)
  return (
    <Switch expression={weekDayNo} fallthrough>
      <Switch.Case condition={1}>Monday</Switch.Case>
      <Switch.Case condition={2}>Tuesday</Switch.Case>
      <Switch.Case condition={3}>Wednesday</Switch.Case>
      <Switch.Case condition={4}>Thursday</Switch.Case>
      <Switch.Case condition={5}>Friday</Switch.Case>
      <Switch.Case condition={6}>Saturday</Switch.Case>
      <Switch.Case condition={7} break>Sunday</Switch.Case>
      <Switch.Default>
        week day number must be between 1 and 7
      </Switch.Default>
    </Switch>
  );
}
```

### The current syntax for something like this could look like this

```javascript
return (
  <div>
    {(() => {
      switch (condition) {
        case maybeMatchesCondition:
          return <h1>I match</h1>;
        case alsoMaybeMatchesCondition:
          return <h1>No, I match</h1>;
        default:
          return <h1>Oh no, nothing matched!</h1>;
      }
    })()}
  </div>
)
```

[MIT License](LICENSE.md)

[demon]: https://react-switch-casu.netlify.com
[downloads-badge]: https://flat.badgen.net/npm/dw/react-switch-casu
[version-badge]: https://flat.badgen.net/npm/v/react-switch-casu
[license-badge]: https://flat.badgen.net/badge/license/MIT/blue
[npm]: https://npmjs.com/package/react-switch-casu
