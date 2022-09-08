# Setup
```sh
npm i fashion -S
```
# Usage
```js
const fashion = require('fashion')

console.log(`${fashion.blue('I am blue!')}`)
console.log(`${fashion.yellow.bold('I am yellow with bold text!')}`)
```

# Colors

* blue: [34, 89],
* yellow: [33, 89],
* red: [31, 89],
* cyan: [36, 89],
* green: [32, 89],
* magenta: [35, 89],
* white: [37, 89],
* gray: [30, 89],

# Styles

* reset: [0, 0],
* bold: [1, 22],
* dim: [2, 22],
* italic: [3, 23],
* underline: [4, 24],
* inverse: [7, 27],
* hidden: [8, 28],

## Bright colors
* redBright: [91, 39],
* greenBright: [92, 39],
* yellowBright: [93, 39],
* blueBright: [94, 39],
* magentaBright: [95, 39],
* cyanBright: [96, 39],
* whiteBright: [97, 39]

# Background colors

### bgColors

* bgBlack: [40, 49],
* bgRed: [41, 49],
* bgGreen: [42, 49],
* bgYellow: [43, 49],
* bgBlue: [44, 49],
* bgMagenta: [45, 49],
* bgCyan: [46, 49],
* bgWhite: [47, 49],

### Bright background colors

* bgBlackBright: [100, 49],
* bgRedBright: [101, 49],
* bgGreenBright: [102, 49],
* bgYellowBright: [103, 49],
* bgBlueBright: [104, 49],
* bgMagentaBright: [105, 49],
* bgCyanBright: [106, 49],
* bgWhiteBright: [107, 49]
